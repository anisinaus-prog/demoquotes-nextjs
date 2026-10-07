
import type { Metadata } from 'next';

export const metadata = {
  title: 'Get Free Excavation Quotes in Australia',
  description:
    'Compare competitive contractors across Australia. Get free, fast, no-obligation quotes for residential, commercial, and concrete removal projects.',

  alternates: {
    canonical: 'https://www.demoquotes.com.au/services/excavation-works',
  },
  };

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}