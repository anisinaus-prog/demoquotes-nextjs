import type { Metadata } from 'next';
import { cities } from '@/app/data/cities';

type Props = {
  params: {
    city: string;
  };
};

const cityData: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  sydney: {
    title: 'Asbestos Removal Sydney',
    description:
      'Find asbestos removal contractors in Sydney and compare quotes for safe asbestos removal from homes, roofs, walls and other properties.',
  },

  melbourne: {
    title: 'Asbestos Removal Melbourne',
    description:
      'Find experienced asbestos removal contractors in Melbourne for residential properties, renovations and asbestos-related building work.',
  },

  brisbane: {
    title: 'Asbestos Removal Brisbane',
    description:
      'Find asbestos removal contractors in Brisbane for safe removal of asbestos-containing materials from homes and properties.',
  },

  perth: {
    title: 'Asbestos Removal Perth',
    description:
      'Find asbestos removal services in Perth for homes, renovations, demolition projects and other properties containing asbestos materials.',
  },

  adelaide: {
    title: 'Asbestos Removal Adelaide',
    description:
      'Find asbestos removal contractors in Adelaide and request quotes for asbestos removal from residential and commercial properties.',
  },

  darwin: {
    title: 'Asbestos Removal Darwin',
    description:
      'Find asbestos removal contractors in Darwin for residential asbestos removal, renovation projects and property preparation.',
  },

  canberra: {
    title: 'Asbestos Removal Canberra',
    description:
      'Find asbestos removal contractors in Canberra for homes, renovations, demolition projects and other asbestos-related work.',
  },

  hobart: {
    title: 'Asbestos Removal Hobart',
    description:
      'Find asbestos removal contractors in Hobart for safe asbestos removal from older homes, buildings and renovation projects.',
  },
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const city = params.city.toLowerCase();
  const data = cityData[city];

  if (!data) {
    return {
      title: 'Asbestos Removal Contractors | Free Quotes',
      description:
        'Find asbestos removal contractors and get free quotes for asbestos removal services.',
    };
  }

  return {
    title: `${data.title} | Free Quotes`,
    description: data.description,
  };
}

export default function Page({
  params,
}: {
  params: { city: string };
}) {
  const cityKey = params.city.toLowerCase();
  const data = cityData[cityKey];

  if (!data) {
    return (
      <main className="p-10">
        <h1 className="text-2xl font-bold">
          City not found
        </h1>
      </main>
    );
  }

  const cityName =
    cityKey.charAt(0).toUpperCase() + cityKey.slice(1);

  return (
    <main>

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm text-orange-300">
            Asbestos Removal Services
          </div>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
            {data.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {data.description}
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


      {/* INTRODUCTION */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">

          <h2 className="text-4xl font-extrabold text-slate-900">
            Asbestos Removal Services in {cityName}
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">

            <p>
              Asbestos was widely used in Australian homes and
              buildings, particularly in older properties. It may
              be present in roofing, wall sheeting, eaves, fences,
              garages and other building materials.
            </p>

            <p>
              If asbestos-containing materials are damaged or
              disturbed, asbestos fibres can become airborne.
              For this reason, asbestos should be handled carefully
              and removal work should be carried out by appropriately
              qualified professionals.
            </p>

            <p>
              If you are renovating, repairing or preparing a
              property for demolition in {cityName}, getting
              professional advice about suspected asbestos can help
              you plan the work safely.
            </p>

          </div>

        </div>
      </section>


      {/* SERVICES */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <h2 className="text-center text-4xl font-extrabold text-slate-900">
            Asbestos Removal Services in {cityName}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Depending on the property and the type of material,
            asbestos removal contractors may provide a range of
            services.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {[
              {
                title: 'Residential Asbestos Removal',
                desc: `Asbestos removal from homes, garages, sheds and other residential properties in ${cityName}.`,
              },
              {
                title: 'Roof and Wall Removal',
                desc: 'Removal of asbestos-containing roofing, wall sheeting, cladding and other building materials.',
              },
              {
                title: 'Pre-Demolition Asbestos Removal',
                desc: `Asbestos removal and preparation before renovation, redevelopment or demolition projects in ${cityName}.`,
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


      {/* COMMON ASBESTOS MATERIALS */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <h2 className="text-center text-4xl font-extrabold text-slate-900">
            Common Asbestos Materials
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Older properties may contain asbestos in different
            areas of the building. Common examples include:
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {[
              'Fibro wall and ceiling sheets',
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
            Asbestos Removal Before Demolition
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            If an older property in {cityName} is going to be
            demolished, suspected asbestos should be considered
            before demolition work begins. Asbestos-containing
            materials may need to be identified and appropriately
            managed before the building is demolished.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              {
                number: '01',
                title: 'Identify',
                desc: 'Check the property for materials that may contain asbestos before work starts.',
              },
              {
                number: '02',
                title: 'Remove',
                desc: 'Arrange appropriate asbestos removal before the main demolition work.',
              },
              {
                number: '03',
                title: 'Prepare',
                desc: 'Prepare the property for renovation, demolition or the next stage of construction.',
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


      {/* CHOOSING CONTRACTOR */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <h2 className="text-center text-4xl font-extrabold text-slate-900">
            Choosing an Asbestos Removal Contractor in {cityName}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Asbestos removal requires careful planning and
            appropriate safety measures. Before choosing a
            contractor, consider the following:
          </p>

          <div className="mt-12 space-y-4">

            {[
              'Check that the contractor has the appropriate licence and qualifications for the work required.',
              'Ask about their experience with similar asbestos removal projects.',
              'Request a clear written quote before the work starts.',
              'Ask how asbestos materials will be contained and removed.',
              'Confirm how asbestos waste will be transported and disposed of.',
              'Make sure the proposed work follows the applicable requirements in your state or territory.',
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
            Need Asbestos Removal in {cityName}?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50">
            Tell us about your property and asbestos removal
            requirements. Request quotes from suitable contractors
            for your project.
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
