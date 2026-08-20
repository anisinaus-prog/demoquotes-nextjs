import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Free House Demolition Quotes in Australia',
  description:
    'Compare licensed demolition contractors across Australia. Get free, fast, no-obligation quotes for residential, commercial, and concrete removal projects.',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}