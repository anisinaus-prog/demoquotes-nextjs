import Link from 'next/link';
import DemolitionCalculator from '@/components/HouseDemolitionCalculator';

export default function HomeClient() {

  return (
    <div>

      {/* Services */}
      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold text-slate-900">
              Our Services
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Connect with experienced demolition and civil contractors for
              residential and commercial projects.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: '🏚️',
                title: 'House Demolition',
                slug: 'house-demolition',
                desc: 'Complete residential demolition and site clearing services.',
              },
              {
                icon: '🏗️',
                title: 'Commercial Demolition',
                slug: 'commercial',
                desc: 'Safe and efficient commercial and industrial demolition.',
              },
              {
                icon: '🚜',
                title: 'Excavation Works',
                slug: 'excavation-works',
                desc: 'Bulk excavation, trenching, and earthmoving solutions.',
              },
              {
                icon: '☣️',
                title: 'Asbestos Removal',
                slug: 'asbestos-removal',
                desc: 'Licensed asbestos removal completed safely and professionally.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  <Link href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <DemolitionCalculator/>
      {/* How it works */}
      <section id="how" className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold">How It Works</h2>

            <p className="mt-5 text-lg text-slate-300">
              Get demolition quotes in three simple steps.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                number: '1',
                title: 'Submit Your Project',
                desc: 'Tell us about your demolition or excavation project requirements.',
              },
              {
                number: '2',
                title: 'Receive Quotes',
                desc: 'Licensed contractors send competitive quotes directly to you.',
              },
              {
                number: '3',
                title: 'Compare & Save',
                desc: 'Choose the best contractor based on pricing and reviews.',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl font-extrabold text-slate-900">
                  {step.number}
                </div>

                <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>

                <p className="mt-4 leading-7 text-slate-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ==================================================
    WHY CHOOSE US
================================================== */}

<section className="bg-slate-100 py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">

      <div className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-700">
        Why Choose DemoQuotes
      </div>

      <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
        A Better Way to Find Demolition Contractors
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Compare quotes from experienced demolition, excavation and
        asbestos removal contractors in your area.
      </p>

    </div>


    {/* Benefits */}
    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          icon: '⚡',
          title: 'Fast Responses',
          text: 'Get your project details in front of suitable contractors and receive quotes quickly.',
        },
        {
          icon: '🔍',
          title: 'Compare Quotes',
          text: 'Compare multiple contractor quotes so you can make a more informed decision.',
        },
        {
          icon: '🛡️',
          title: 'Trusted Contractors',
          text: 'Connect with experienced contractors who provide demolition and related services.',
        },
        {
          icon: '📍',
          title: 'Local Contractors',
          text: 'We help connect you with contractors servicing your local area.',
        },
        {
          icon: '💰',
          title: 'Free to Request',
          text: 'There is no cost to submit your project and request demolition quotes.',
        },
        {
          icon: '🏗️',
          title: 'Multiple Services',
          text: 'Find contractors for demolition, excavation, asbestos removal, site clearing and more.',
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
        >

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
            {item.icon}
          </div>

          <h3 className="mt-6 text-xl font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            {item.text}
          </p>

        </div>
      ))}

    </div>
  </div>
</section>

{/* ==================================================
    AREAS WE SERVE
================================================== */}

<section className="bg-white py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">

      <div className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-700">
        Areas We Serve
      </div>

      <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
        Demolition Contractors Across Sydney
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        DemoQuotes helps homeowners, builders and developers connect
        with demolition contractors across Sydney and surrounding areas.
      </p>

    </div>


    {/* Areas */}
    <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">

      {[
        'Western Sydney',
        'South Western Sydney',
        'South Sydney',
        'South Eastern Sydney',
        'Northern Sydney',
        'North Western Sydney',
        'Eastern Suburbs',
        'Inner West',
        'Parramatta',
        'Liverpool',
        'Blacktown',
        'Penrith',
        'Campbelltown',
        'Sutherland Shire',
        'Hills District',
        'Macarthur',
      ].map((area) => (
        <div
          key={area}
          className="group rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition hover:border-orange-300 hover:bg-orange-50"
        >
          <div className="flex items-center gap-3">

            <span className="text-orange-600">
              📍
            </span>

            <span className="font-semibold text-slate-700 group-hover:text-orange-700">
              {area}
            </span>

          </div>
        </div>
      ))}

    </div>


    {/* Bottom CTA */}
    <div className="mt-12 text-center">

      <p className="text-slate-600">
        Can't see your area?
      </p>

      <a
        href="/get-a-quote"
        className="mt-4 inline-flex rounded-xl bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-700"
      >
        Find Contractors Near You
      </a>

    </div>

  </div>
</section>
      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-5xl font-extrabold leading-tight">
            Need Demolition Quotes Fast?
          </h2>

          <p className="mt-6 text-xl text-orange-50">
            Compare local demolition contractors and save time and money on your
            next project.
          </p>

          <div className="mt-10">
            <a
              href="/get-a-quote"
              className="inline-flex rounded-2xl bg-slate-900 px-8 py-5 text-lg font-bold text-white transition hover:bg-slate-800"
            >
              Start Free Quote Request
            </a>
          </div>
        </div>
      </section>
      {/* footer */}
    </div>
  );
}
