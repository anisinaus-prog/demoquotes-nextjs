export default function ContactPage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold md:text-6xl">
            Contact <span className="text-orange-400">Our Team</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            Have a demolition project in mind? Get in touch with our team for a
            free consultation and fast quote.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
          {/* FORM */}
          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-extrabold">Send Us a Message</h2>
            <p className="mt-2 text-slate-600">
              Fill out the form below and we will respond within 24 hours.
            </p>

            <form className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none"
              />

              <select className="w-full rounded-xl border border-slate-300 px-5 py-4 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none">
                <option>Service Type</option>
                <option>House Demolition</option>
                <option>Commercial Demolition</option>
                <option>Excavation Works</option>
                <option>Asbestos Removal</option>
                <option>Site Clearing</option>
              </select>

              <textarea
                rows={6}
                placeholder="Tell us about your project"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-orange-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* INFO */}
          <div className="space-y-8">
            <div className="rounded-[30px] bg-slate-50 p-8 border border-slate-200">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="mt-3 text-slate-600">
                We are available for demolition projects across Sydney and
                surrounding areas.
              </p>

              <div className="mt-6 space-y-4 text-slate-700">
                <p>
                  <strong>Phone:</strong> 1300 DEMO QUOTE
                </p>
                <p>
                  <strong>Email:</strong> info@demolitionquote.com.au
                </p>
                <p>
                  <strong>Service Area:</strong> Sydney, NSW
                </p>
              </div>
            </div>

            <div className="rounded-[30px] bg-white p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold">Why Contact Us?</h3>

              <ul className="mt-5 space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  Fast demolition quote turnaround
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  Licensed and insured contractors
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  Residential & commercial services
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  Safe asbestos handling
                </li>
              </ul>
            </div>

            <div className="rounded-[30px] bg-gradient-to-r from-orange-600 to-orange-500 p-8 text-white">
              <h3 className="text-2xl font-bold">Need Urgent Demolition?</h3>
              <p className="mt-3 text-orange-50">
                Call us directly for fast response and priority project
                handling.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex rounded-xl bg-slate-950 px-6 py-4 font-bold hover:bg-slate-900"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="bg-slate-100 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold">Our Service Area</h2>
          <p className="mt-4 text-slate-600">
            We provide demolition services across Sydney and surrounding NSW
            regions.
          </p>

          <div className="mt-10 rounded-3xl bg-slate-300 h-96 flex items-center justify-center text-slate-700">
            Google Map Embed Placeholder
          </div>
        </div>
      </section>
    </div>
  );
}
