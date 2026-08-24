import Link from 'next/link';
import { blogs } from '@/app/data/blogs';

export default function BlogPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold md:text-5xl">
            Demolition Blog
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Helpful demolition tips, contractor advice, costs and guides for
            property owners across Australia.
          </p>
        </div>
      </section>

      {/* Blog posts */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h2 className="text-2xl font-semibold text-gray-900">
                  {blog.title}
                </h2>

                <p className="mt-3 text-gray-600">
                  {blog.description}
                </p>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="mt-6 inline-block font-semibold text-blue-600 hover:text-blue-800"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}