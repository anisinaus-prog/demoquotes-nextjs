import type { Metadata } from 'next';

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
    title: 'House Demolition Sydney',
    description:
      'Professional house demolition services in Sydney. Safe, fast, and fully licensed demolition contractors.',
  },

  melbourne: {
    title: 'House Demolition Melbourne',
    description:
      'Expert house demolition services in Melbourne with safe and compliant site clearance.',
  },

  brisbane: {
    title: 'House Demolition Brisbane',
    description:
      'Reliable house demolition contractors in Brisbane for residential and commercial projects.',
  },

  perth: {
    title: 'House Demolition Perth',
    description:
      'Affordable and safe house demolition services across Perth and surrounding suburbs.',
  },

  adelaide: {
    title: 'House Demolition Adelaide',
    description:
      'Professional demolition contractors in Adelaide for complete house removal services.',
  },

  darwin: {
    title: 'House Demolition Darwin',
    description:
      'Trusted house demolition services in Darwin with safe and efficient execution.',
  },

  canberra: {
    title: 'House Demolition Canberra',
    description:
      'Licensed demolition experts in Canberra for residential house demolition projects.',
  },

  hobart: {
    title: 'House Demolition Hobart',
    description:
      'Reliable house demolition services in Hobart with full compliance and safety.',
  },
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const city = params.city.toLowerCase();
  const data = cityData[city];

  if (!data) {
    return {
      title: 'House Demolition Contractors | Free Quotes',
      description:
        'Find professional house demolition contractors and get free quotes.',
    };
  }

  return {
    title: data.title,
    description: data.description,
  };
}
export default function Page({ params }: { params: { city: string } }) {
  const cityKey = params.city.toLowerCase();
  const data = cityData[cityKey];

  if (!data) {
    return (
      <main className="p-10">
        <h1 className="text-2xl font-bold">City not found</h1>
      </main>
    );
  }

  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm text-orange-300">
            Residential Demolition Services
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
              className="inline-flex rounded-2xl bg-orange-600 px-8 py-4 text-lg font-bold hover:bg-orange-700 transition"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center">
            House Demolition Services in {params.city}
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Full House Demolition',
                desc: 'Complete removal of residential houses safely and efficiently.',
              },
              {
                title: 'Partial Demolition',
                desc: 'Selective demolition for renovations or rebuilds.',
              },
              {
                title: 'Site Clearing',
                desc: 'Clean and prepare your land for new construction.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-100 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center">
            Why Choose Us in {params.city}?
          </h2>

          <div className="mt-12 space-y-4">
            {[
              'Licensed and insured demolition contractors',
              'Fast and safe house demolition process',
              'Local experience in ' + params.city,
              'Affordable and transparent pricing',
              'Full waste removal and recycling',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold">
                  ✓
                </div>
                <p className="text-slate-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-extrabold">
            Need House Demolition in {params.city}?
          </h2>

          <p className="mt-5 text-lg text-orange-50">
            Get a fast, free, no-obligation quote from local experts.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="rounded-2xl bg-slate-950 px-8 py-4 text-lg font-bold hover:bg-slate-900 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
