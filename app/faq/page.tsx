export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does house demolition cost in Australia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'House demolition in Australia typically costs between $12,000 and $40,000 depending on size, materials, and asbestos removal.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a permit for demolition?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, most councils require demolition permits before work can begin.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does demolition take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most residential demolition projects take 3 to 10 days depending on the structure.',
        },
      },
    ],
  };
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
  />;

  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-300">
            Help & Information
          </div>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Find answers to common questions about demolition, excavation,
            asbestos removal, pricing, permits, and our services across Sydney &
            NSW.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-6">
          {[
            {
              q: 'How much does house demolition cost in Sydney?',
              a: 'House demolition costs vary depending on size, access, asbestos presence, and waste removal. On average, residential demolition in Sydney can range from $12,000 to $40,000+.',
            },
            {
              q: 'Do I need council approval for demolition?',
              a: 'Yes, most demolition projects in NSW require council approval or a Development Application (DA). We can guide you through the approval process.',
            },
            {
              q: 'How long does a demolition take?',
              a: 'Most residential demolitions take 3–7 days. Larger commercial projects may take several weeks depending on complexity and site conditions.',
            },
            {
              q: 'Do you handle asbestos removal?',
              a: 'Yes, we provide licensed asbestos inspection, removal, and disposal services in compliance with NSW safety regulations.',
            },
            {
              q: 'Is excavation included in demolition work?',
              a: 'Excavation is often a separate service, but we provide both demolition and excavation packages for complete site preparation.',
            },
            {
              q: 'What happens to the waste after demolition?',
              a: 'We sort, recycle, and responsibly dispose of demolition waste at approved facilities, ensuring environmental compliance.',
            },
            {
              q: 'Are you fully licensed and insured?',
              a: 'Yes, we are fully licensed and insured for demolition, excavation, and asbestos removal work across Sydney and NSW.',
            },
            {
              q: 'Can you provide a free quote?',
              a: 'Yes, we offer free, no-obligation quotes based on your project details and site inspection where required.',
            },
            {
              q: 'Do you work in my suburb?',
              a: 'We service all areas across Sydney and wider NSW including residential, commercial, and industrial sites.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">{item.q}</h3>

              <p className="mt-3 text-slate-600 leading-7">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-extrabold">Still Have Questions?</h2>

          <p className="mt-5 text-lg text-orange-50">
            Speak to our demolition experts for fast advice and a free quote.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/contact"
              className="rounded-2xl bg-slate-950 px-8 py-4 text-lg font-bold hover:bg-slate-900 transition"
            >
              Contact Us
            </a>

            <a
              href="/get-quote"
              className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-orange-600 hover:bg-orange-50 transition"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
