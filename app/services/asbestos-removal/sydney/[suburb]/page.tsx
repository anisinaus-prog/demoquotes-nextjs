import type { Metadata } from 'next';

import { suburbsOfSydney } from '@/app/data/suburbs';
import { getSuburbAsbestosRemovalContent } from '@/app/data/suburbContent';

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
      title: 'Asbestos Removal Sydney | Free Quotes',
      description:
        'Find asbestos removal contractors in Sydney and get free quotes for safe asbestos removal services.',
    };
  }

  const suburbName = formatName(suburb);

  return {
    title: `Asbestos Removal ${suburbName} | Free Quotes`,
    description: `Need asbestos removal in ${suburbName}? Compare asbestos removal contractors and get free quotes for your property.`,
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
            Asbestos Removal Services
          </div>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
            Asbestos Removal {suburbName}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Need asbestos removal in {suburbName}? Find experienced
            asbestos removal contractors for residential and property
            projects. Compare quotes and find the right professional for
            your asbestos removal needs.
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


      {/* MAIN CONTENT */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">

          {getSuburbAsbestosRemovalContent(suburbName).map(
            (section) => (
              <section
                key={section.title}
                className="mb-14"
              >

                <h2 className="mb-5 text-3xl font-extrabold text-slate-900">
                  {section.title}
                </h2>

                <div className="space-y-5 text-lg leading-8 text-slate-700">

                  {section.paragraphs.map(
                    (paragraph, index) => (
                      <p key={index}>
                        {paragraph.map(
                          (part, partIndex) =>
                            typeof part === 'string' ? (
                              part
                            ) : (
                              <a
                                key={partIndex}
                                href={part.href}
                                className="font-semibold text-orange-600 hover:text-orange-700 hover:underline"
                              >
                                {part.text}
                              </a>
                            )
                        )}
                      </p>
                    )
                  )}

                </div>

              </section>
            )
          )}

        </div>
      </section>


      {/* ASBESTOS SERVICES */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <h2 className="text-center text-4xl font-extrabold text-slate-900">
            Asbestos Removal Services in {suburbName}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Asbestos can be present in many older Australian homes and
            buildings. Professional removal can help reduce the risk of
            asbestos fibres being released during building work.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {[
              {
                title: 'Residential Asbestos Removal',
                desc: `Asbestos removal for homes, garages, sheds and other residential properties in ${suburbName}.`,
              },
              {
                title: 'Roof and Wall Removal',
                desc: `Removal of asbestos-containing roofing, wall sheeting, cladding and other building materials.`,
              },
              {
                title: 'Asbestos Removal Before Demolition',
                desc: `Professional asbestos removal before renovation, redevelopment or house demolition projects in ${suburbName}.`,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* COMMON MATERIALS */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <h2 className="text-center text-4xl font-extrabold text-slate-900">
            Common Asbestos Materials in Older Properties
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Asbestos was widely used in Australian construction. It may
            be found in different parts of older homes and buildings.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {[
              'Fibro wall and ceiling sheeting',
              'Asbestos cement roofing',
              'Eaves and external cladding',
              'Fencing and boundary sheets',
              'Garage and shed materials',
              'Some flooring and lining materials',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
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


      {/* BEFORE DEMOLITION */}
      <section className="bg-slate-100 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <h2 className="text-center text-4xl font-extrabold text-slate-900">
            Asbestos Removal Before House Demolition
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            If you are planning to demolish an older house in {suburbName},
            asbestos should be considered before demolition starts.
            Some older properties may contain asbestos materials that need
            to be identified and managed before the building is demolished.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              {
                number: '01',
                title: 'Inspect',
                desc: 'Identify materials that may contain asbestos before work begins.',
              },
              {
                number: '02',
                title: 'Remove',
                desc: 'Arrange suitable asbestos removal work before the main demolition.',
              },
              {
                number: '03',
                title: 'Demolish',
                desc: 'Once asbestos work is appropriately managed, the remaining demolition can proceed.',
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >

                <div className="text-sm font-bold text-orange-600">
                  STEP {item.number}
                </div>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* WHY CHOOSE */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <h2 className="text-center text-4xl font-extrabold text-slate-900">
            Choosing an Asbestos Removal Contractor in {suburbName}
          </h2>

          <div className="mt-12 space-y-4">

            {[
              'Check the contractor has the appropriate licence and qualifications for the work required.',
              'Ask about their experience with similar asbestos removal projects.',
              'Request a clear written quote before work starts.',
              'Ask how asbestos materials will be contained and removed.',
              'Confirm how asbestos waste will be transported and disposed of.',
              'Make sure the proposed work follows applicable NSW requirements.',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl bg-slate-50 p-6"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                  ✓
                </div>

                <p className="font-medium leading-7 text-slate-700">
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
            Need Asbestos Removal in {suburbName}?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50">
            Tell us about your asbestos removal project and request
            quotes from suitable contractors.
          </p>

          <div className="mt-8">
            <a
              href="/get-a-quote"
              className="inline-flex rounded-2xl bg-slate-950 px-8 py-4 text-lg font-bold transition hover:bg-slate-900"
            >
              Get Free Quotes
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}