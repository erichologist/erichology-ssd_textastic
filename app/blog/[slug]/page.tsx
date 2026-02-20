import Link from "next/link";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Render content: split by double newlines into paragraphs / headings
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

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-3">
        {post.title}
      </h1>

      {/* Meta */}
      <p className="text-sm text-gray-500 mb-10">
        {formatDate(post.date)} · By {post.author}
      </p>

      {/* Content */}
      <div className="prose prose-indigo max-w-none space-y-4 text-gray-800 leading-relaxed">
        {blocks.map((block, i) => {
          if (block.startsWith("## ")) {
            return (
              <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-2">
                {block.slice(3)}
              </h2>
            );
          }
          if (block.startsWith("# ")) {
            return (
              <h1 key={i} className="text-3xl font-extrabold text-gray-900 mt-8 mb-3">
                {block.slice(2)}
              </h1>
            );
          }
          // Render numbered or bulleted lists
          if (/^[-*\d]/.test(block)) {
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
                    {line.replace(/^[-*]\s+/, "").replace(/^\d+\.\s+/, "")}
                  </li>
                ))}
              </ListTag>
            );
          }
          // Table
          if (block.includes("|")) {
            const rows = block.split("\n").filter((r) => r.trim() && !r.match(/^\|[-:|\s]+\|$/));
            return (
              <div key={i} className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    {rows.map((row, ri) => (
                      <tr key={ri} className={ri === 0 ? "bg-indigo-50 font-semibold" : "border-t border-gray-100"}>
                        {row.split("|").filter((_, ci) => ci > 0 && ci < row.split("|").length - 1).map((cell, ci) => (
                          <td key={ci} className="px-3 py-2 text-gray-700">
                            {cell.trim()}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          return (
            <p key={i} className="text-gray-700">
              {block}
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
