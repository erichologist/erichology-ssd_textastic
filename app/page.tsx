import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Welcome to <span className="text-indigo-700">Erichology</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            A collection of publications exploring technology, science, and
            engineering—past and present.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-800 transition-colors"
          >
            Browse All Publications →
          </Link>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Recent Publications
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {recentPosts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 rounded-xl p-6 flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-indigo-700 transition-colors"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-500 mb-3">{formatDate(post.date)}</p>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 text-sm font-medium text-indigo-700 hover:text-indigo-900 transition-colors"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="text-sm font-medium text-indigo-700 hover:underline"
          >
            View all publications →
          </Link>
        </div>
      </section>
    </>
  );
}
