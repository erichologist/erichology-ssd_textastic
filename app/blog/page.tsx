import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Publications — Erichology",
  description: "Browse all blog publications on Erichology.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
        all
      </h1>
      <p className="text-gray-500 mb-10">
        {posts.length} article{posts.length !== 1 ? "s" : ""} — sorted by further or farther
        
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border-b border-gray-100 pb-8 last:border-0"
          >
            <div className="flex flex-wrap gap-2 mb-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-indigo-700 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              {formatDate(post.date)} · by {post.author}
            </p>
            <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-3 inline-block text-sm font-medium text-indigo-700 hover:text-indigo-900 transition-colors"
            >
              more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
