import Link from "next/link";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Erichology`,
    description: post.excerpt,
  };
}

/** Render inline markdown: **bold**, `code`, [text](url) */
function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  // Pattern matches **bold**, `code`, or [text](url) in order
  const pattern = /(\*\*(.+?)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    if (match[0].startsWith("**")) {
      parts.push(<strong key={match.index}>{match[2]}</strong>);
    } else if (match[0].startsWith("`")) {
      parts.push(
        <code
          key={match.index}
          className="bg-gray-100 text-indigo-700 px-1 py-0.5 rounded text-sm font-mono"
        >
          {match[3]}
        </code>
      );
    } else {
      parts.push(
        <a
          key={match.index}
          href={match[5]}
          className="text-indigo-700 hover:underline"
        >
          {match[4]}
        </a>
      );
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) {
    parts.push(text.slice(last));
  }
  return parts;
}

/** Detect whether a block of text is a markdown-style table. */
function isMarkdownTable(block: string): boolean {
  const lines = block.split("\n").filter((l) => l.trim());
  const pipeLines = lines.filter((l) => l.includes("|"));
  const hasSeparator = lines.some((l) => /^\s*\|?[-:\s|]+\|?\s*$/.test(l));
  return pipeLines.length >= 2 && hasSeparator;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Split content by double (or more) newlines into blocks
  const blocks = post.content.split(/\n\n+/);

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      {/* Back link */}
      <Link
        href="/blog"
        className="text-sm text-indigo-700 hover:text-indigo-900 transition-colors mb-8 inline-block"
      >
        ← Back to all publications
      </Link>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title — sole h1 on the page */}
      <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-3">
        {post.title}
      </h1>

      {/* Meta */}
      <p className="text-sm text-gray-500 mb-10">
        {formatDate(post.date)} · By {post.author}
      </p>

      {/* Content */}
      <div className="max-w-none space-y-4 text-gray-800 leading-relaxed">
        {blocks.map((block, i) => {
          // ## heading → h2
          if (block.startsWith("## ")) {
            return (
              <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-2">
                {renderInline(block.slice(3))}
              </h2>
            );
          }
          // # heading → h2 (not h1, to keep a single h1 per page)
          if (block.startsWith("# ")) {
            return (
              <h2 key={i} className="text-3xl font-bold text-gray-900 mt-8 mb-3">
                {renderInline(block.slice(2))}
              </h2>
            );
          }
          // Ordered or unordered list: require "- ", "* ", or "1. " at line start
          if (/^(\d+\.|[-*])\s/.test(block)) {
            const lines = block.split("\n").filter(Boolean);
            const isOrdered = /^\d+\./.test(lines[0]);
            const ListTag = isOrdered ? "ol" : "ul";
            return (
              <ListTag
                key={i}
                className={`pl-6 space-y-1 ${isOrdered ? "list-decimal" : "list-disc"}`}
              >
                {lines.map((line, j) => (
                  <li key={j} className="text-gray-700">
                    {renderInline(
                      line.replace(/^[-*]\s+/, "").replace(/^\d+\.\s+/, "")
                    )}
                  </li>
                ))}
              </ListTag>
            );
          }
          // Markdown-style table: require multiple pipe lines and a separator row
          if (isMarkdownTable(block)) {
            const rows = block
              .split("\n")
              .filter((r) => r.trim() && !r.match(/^\|[-:|\s]+\|$/));
            const [headerRow, ...dataRows] = rows;
            const headerCells = headerRow
              .split("|")
              .filter((_, ci, arr) => ci > 0 && ci < arr.length - 1);
            return (
              <div key={i} className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-indigo-50">
                    <tr>
                      {headerCells.map((cell, ci) => (
                        <th
                          key={ci}
                          className="px-3 py-2 text-left font-semibold text-gray-900"
                        >
                          {renderInline(cell.trim())}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {dataRows.map((row, ri) => (
                      <tr key={ri} className="border-t border-gray-100">
                        {row
                          .split("|")
                          .filter((_, ci, arr) => ci > 0 && ci < arr.length - 1)
                          .map((cell, ci) => (
                            <td key={ci} className="px-3 py-2 text-gray-700">
                              {renderInline(cell.trim())}
                            </td>
                          ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          // Default: paragraph
          return (
            <p key={i} className="text-gray-700">
              {renderInline(block)}
            </p>
          );
        })}
      </div>

      {/* Back link bottom */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link
          href="/blog"
          className="text-sm font-medium text-indigo-700 hover:text-indigo-900 transition-colors"
        >
          ← Back to all publications
        </Link>
      </div>
    </article>
  );
}
