import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';

export default function GetAQuotePage() {
  return (
    <main className="bg-slate-50">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative overflow-hidden bg-slate-950 text-white">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero_bg.svg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/80" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">

          <div className="max-w-3xl">

            <div className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300">
              Free • No Obligation • Fast Responses
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Get a {' '}
              <span className="text-orange-400">
                Free Quote
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Tell us about your project and we’ll help connect you
              with suitable demolition contractors in your area.
            </p>

          </div>

        </div>
      </section>


      {/* ==================================================
          QUOTE FORM
      ================================================== */}

      <section className="relative -mt-8 pb-20 lg:pb-24">

        <div className="mx-auto max-w-4xl px-6 lg:px-8">

          <div className="rounded-[32px] bg-white p-6 shadow-2xl sm:p-8 lg:p-10">

            <div className="mb-8 text-center">

              <h2 className="text-3xl font-extrabold text-slate-900">
                Tell Us About Your Project
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                Provide a few details about your demolition or
                construction project so contractors can better
                understand what you need.
              </p>

            </div>

            <QuoteForm />

          </div>

        </div>

      </section>


      {/* ==================================================
          HOW IT WORKS
      ================================================== */}

      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-700">
              How It Works
            </div>

            <h2 className="mt-5 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              Get Quotes in 3 Simple Steps
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Tell us what you need and we’ll help you find suitable
              contractors for your project.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {/* Step 1 */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-2xl font-extrabold text-orange-600">
                1
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Tell Us About Your Project
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Provide your location, project type and a few
                details about the work you need.
              </p>

            </div>


            {/* Step 2 */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-2xl font-extrabold text-orange-600">
                2
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                We Find Suitable Contractors
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Your project can be matched with contractors
                servicing your area and offering the required service.
              </p>

            </div>


            {/* Step 3 */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-2xl font-extrabold text-orange-600">
                3
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Receive & Compare Quotes
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Contractors can contact you with their pricing
                and project information.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          WHY DEMOQUOTES
      ================================================== */}

      <section className="bg-slate-100 py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-700">
              Why DemoQuotes
            </div>

            <h2 className="mt-5 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              Make Finding a Contractor Easier
            </h2>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: 'Save Time',
                text: 'Submit your project once instead of contacting contractors one by one.',
              },
              {
                title: 'Local Contractors',
                text: 'Find contractors servicing your area and project type.',
              },
              {
                title: 'Compare Options',
                text: 'Receive quotes and compare your options before making a decision.',
              },
              {
                title: 'No Obligation',
                text: 'Requesting quotes is free and does not commit you to hiring a contractor.',
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-3xl bg-white p-7 shadow-sm"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  ✓
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
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
          SERVICES
      ================================================== */}

      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <h2 className="text-4xl font-extrabold text-slate-900">
            What Can You Get Quotes For?
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            DemoQuotes can help you find contractors for a range
            of demolition and site-related services.
          </p>


          <div className="mt-10 flex flex-wrap justify-center gap-3">

            {[
              'House Demolition',
              'Commercial Demolition',
              'Excavation',
              'Asbestos Removal',
              'Site Clearing',
              'Soil Removal',
              'Pool Removal',
              'Driveway Removal',
            ].map((service) => (

              <span
                key={service}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 font-semibold text-slate-700"
              >
                {service}
              </span>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Ready to Get Started?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50">
            Tell us about your project and start finding suitable
            demolition contractors today.
          </p>

          <Link
            href="#top"
            className="mt-8 inline-flex rounded-2xl bg-slate-950 px-8 py-4 text-lg font-bold text-white transition hover:bg-slate-900"
          >
            Get Free Quotes
          </Link>

        </div>

      </section>

    </main>
  );
}