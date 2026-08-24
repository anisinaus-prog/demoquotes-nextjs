import { notFound } from 'next/navigation';
import { blogs } from '@/app/data/blogs';
import MarkdownContent from '../MarkdownContent';

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export function generateMetadata({ params }: Props) {
  const blog = blogs.find((item) => item.slug === params.slug);

  if (!blog) {
    return {
      title: 'Blog Not Found | DemoQuotes',
    };
  }

  return {
    title: `${blog.title} | DemoQuotes`,
    description: blog.description,
  };
}

export default function BlogPost({ params }: Props) {
  const blog = blogs.find((item) => item.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="bg-white py-16">
      <article className="mx-auto max-w-4xl px-6">

        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          {blog.title}
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          {blog.description}
        </p>

        <div className="mt-10 border-t border-gray-200 pt-8">
          <MarkdownContent content={blog.content} />
        </div>
  
        <div className="mt-12">
          <a
            href="/blog"
            className="font-semibold text-blue-600 hover:text-blue-800"
          >
            ← Back to Blog
          </a>
        </div>

      </article>
    </main>
  );
}