'use client';

import ReactMarkdown from 'react-markdown';

export default function MarkdownContent({
  content,
}: {
  content: string;
}) {
  return (
    <article className="max-w-none text-gray-700 leading-8">

      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="mb-6 mt-10 text-4xl font-bold leading-tight text-gray-900">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="mb-4 mt-10 text-2xl font-bold leading-tight text-gray-900">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mb-3 mt-8 text-xl font-bold text-gray-900">
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p className="mb-6 text-lg leading-8 text-gray-700">
              {children}
            </p>
          ),

          ul: ({ children }) => (
            <ul className="mb-6 ml-6 list-disc space-y-2 text-lg text-gray-700">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="mb-6 ml-6 list-decimal space-y-2 text-lg text-gray-700">
              {children}
            </ol>
          ),

          li: ({ children }) => (
            <li className="pl-2">
              {children}
            </li>
          ),

          strong: ({ children }) => (
            <strong className="font-bold text-gray-900">
              {children}
            </strong>
          ),

          a: ({ href, children }) => (
            <a
              href={href}
              className="font-semibold text-blue-600 underline hover:text-blue-800"
            >
              {children}
            </a>
          ),

          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-4 border-blue-600 bg-gray-50 px-6 py-4 italic text-gray-700">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>

    </article>
  );
}