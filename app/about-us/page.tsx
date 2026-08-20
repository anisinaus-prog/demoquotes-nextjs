export default function AboutUsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-300">
              Trusted Demolition & Excavation Contractors Sydney
            </div>

            <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
              About <span className="text-orange-400">Our Company</span>
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              We provide professional demolition, excavation, asbestos removal,
              and site clearing services across Sydney and NSW. Our team is
              committed to safe, efficient, and reliable project delivery.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          {/* LEFT */}
          <div>
            <div className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-700">
              Who We Are
            </div>

            <h2 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">
              Experienced Demolition Specialists
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our company has years of experience delivering safe demolition and
              excavation services for residential, commercial, and civil
              projects.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We focus on safety, compliance, efficiency, and environmentally
              responsible demolition practices. From small residential
              demolitions to large-scale commercial projects, our experienced
              team delivers reliable results on time and within budget.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                ['1000+', 'Projects Completed'],
                ['15+', 'Years Industry Experience'],
                ['100%', 'Safety Compliance'],
                ['24/7', 'Fast Support'],
              ].map(([number, label], i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="text-4xl font-extrabold text-orange-600">
                    {number}
                  </div>
                  <p className="mt-2 text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[32px] bg-slate-100 p-10">
            <h3 className="text-3xl font-extrabold text-slate-900">
              Our Mission
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our mission is to provide safe, affordable, and professional
              demolition and excavation services while maintaining the highest
              standards of quality and compliance.
            </p>

            <div className="mt-10 space-y-5">
              {[
                'Safe and compliant demolition works',
                'Professional project management',
                'Modern demolition and excavation equipment',
                'Eco-friendly waste disposal and recycling',
                'Reliable service and transparent pricing',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-700">
                    ✓
                  </div>

                  <p className="text-lg font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="bg-slate-100 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-700">
              What We Do
            </div>

            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              Our Services
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We offer complete demolition, excavation, and asbestos solutions
              across Sydney.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: '🏠',
                title: 'House Demolition',
                desc: 'Complete residential demolition services.',
              },
              {
                icon: '🏢',
                title: 'Commercial Demolition',
                desc: 'Professional commercial demolition contractors.',
              },
              {
                icon: '🚜',
                title: 'Excavation Works',
                desc: 'Bulk excavation, trenching, and earthmoving services.',
              },
              {
                icon: '☣️',
                title: 'Asbestos Removal',
                desc: 'Licensed asbestos testing and removal services.',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="rounded-[30px] border border-slate-200 bg-white p-8 transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold">{service.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-700">
              Why Choose Us
            </div>

            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              Trusted Across Sydney & NSW
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We are committed to delivering reliable demolition and excavation
              services with a strong focus on safety and customer satisfaction.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              'Licensed and insured contractors',
              'Residential, commercial, and civil expertise',
              'Fast and reliable project delivery',
              'Modern demolition and excavation machinery',
              'Competitive pricing and transparent quotes',
              'Environmentally responsible waste management',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-700">
                  ✓
                </div>

                <p className="text-lg font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-extrabold leading-tight">
            Need Professional Demolition Contractors?
          </h2>

          <p className="mt-6 text-xl text-orange-50">
            Contact our experienced team today for a free quote and
            consultation.
          </p>

          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex rounded-2xl bg-slate-950 px-8 py-5 text-lg font-bold text-white transition hover:bg-slate-900"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
