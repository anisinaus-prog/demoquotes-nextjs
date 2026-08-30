import type { Metadata } from 'next';

import { suburbsOfSydney } from '@/app/data/suburbs';
import { getSuburbDemolitionContent } from '@/app/data/suburbContent';

type Props = {
  params: {
    suburb: string;
  };
};

const formatName = (text: string) =>
  text
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

export function generateStaticParams() {
  return suburbsOfSydney.map((suburb) => ({
    suburb,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const suburb = params.suburb;

  if (!suburbsOfSydney.includes(suburb)) {
    return {
      title: 'House Demolition Sydney | Free Quotes',
      description:
        'Find professional house demolition contractors in Sydney and get free quotes.',
    };
  }

  const suburbName = formatName(suburb);

  return {
    title: `Get Free Quotes for House Demolition in ${suburbName}`,
    description: `Compare now your ${suburbName} house demolition prices. Find safe, reliable and licensed demolition contractors. Get free quotes today.`,
  };
}

export default function Page({ params }: Props) {
  const suburb = params.suburb;

  if (!suburbsOfSydney.includes(suburb)) {
    return (
      <main className="p-10">
        <h1 className="text-2xl font-bold">
          Suburb not found
        </h1>
      </main>
    );
  }

  const suburbName = formatName(suburb);

  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm text-orange-300">
            Residential Demolition Services
          </div>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
            House Demolition {suburbName}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Get and compare house demolition prices in{' '}
            {suburbName}. Find safe, reliable and licensed
            demolition contractors. Get free quotes today.
          </p>

          <div className="mt-10">
            <a
              href="/get-a-quote"
              className="inline-flex rounded-2xl bg-orange-600 px-8 py-4 text-lg font-bold transition hover:bg-orange-700"
            >
              Get Free Quote
            </a>
          </div>

        </div>
      </section>

      {/* CONTENT */}
<section className="py-20">
  <div className="mx-auto max-w-4xl px-6 lg:px-8">

    {getSuburbDemolitionContent(suburbName).map((section) => (
      <section key={section.title} className="mb-12">
        <h2 className="mb-5 text-3xl font-extrabold text-slate-900">
          {section.title}
        </h2>

        <div className="space-y-5 text-lg leading-8 text-slate-700">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    ))}

  </div>
</section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <h2 className="text-center text-4xl font-extrabold">
            House Demolition Services in {suburbName}
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {[
              {
                title: 'Full House Demolition',
                desc: `Complete house demolition in ${suburbName}, carried out safely and efficiently.`,
              },
              {
                title: 'Partial Demolition',
                desc: `Selective demolition services in ${suburbName} for renovations and rebuilding.`,
              },
              {
                title: 'Site Clearing',
                desc: `Clear and prepare your ${suburbName} property for new construction.`,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-100 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <h2 className="text-center text-4xl font-extrabold">
            Why Choose Us in {suburbName}?
          </h2>

          <div className="mt-12 space-y-4">

            {[
              'Licensed and insured demolition contractors',
              'Fast and safe house demolition process',
              `Local experience in ${suburbName}`,
              'Affordable and transparent pricing',
              'Full waste removal and recycling',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                  ✓
                </div>

                <p className="font-medium text-slate-700">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-extrabold">
            Need House Demolition in {suburbName}?
          </h2>

          <p className="mt-5 text-lg text-orange-50">
            Get a fast, free, no-obligation quote from local experts.
          </p>

          <div className="mt-8">
            <a
              href="/get-a-quote"
              className="rounded-2xl bg-slate-950 px-8 py-4 text-lg font-bold transition hover:bg-slate-900"
            >
              Get Free Quote
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}