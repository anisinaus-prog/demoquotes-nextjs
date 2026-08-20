export default function TermsAndConditionsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-300">
            Legal Information
          </div>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
            Terms & Conditions
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Please read these Terms & Conditions carefully before using our
            website or engaging our demolition and excavation services.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:p-14">
            <div className="prose prose-slate max-w-none">
              <p>Last updated: January 2026</p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing this website or using our services, you agree to be
                bound by these Terms & Conditions. If you do not agree, you must
                not use our services.
              </p>

              <h2>2. Services</h2>
              <p>
                We provide demolition, excavation, asbestos removal, and related
                site preparation services. All services are subject to
                availability, site inspection, and written quotation.
              </p>

              <h2>3. Quotes & Pricing</h2>
              <p>
                All quotes provided are estimates based on initial information.
                Final pricing may vary depending on site conditions, access,
                materials, permits, and unforeseen circumstances.
              </p>

              <h2>4. Site Conditions</h2>
              <p>
                The client is responsible for providing accurate site
                information. Hidden hazards (including asbestos, underground
                services, or unstable structures) may impact project scope and
                cost.
              </p>

              <h2>5. Permits & Compliance</h2>
              <p>
                Where required, council approvals and permits must be obtained
                prior to work commencement. We may assist but do not guarantee
                approval outcomes.
              </p>

              <h2>6. Safety</h2>
              <p>
                We adhere to strict safety regulations and industry standards.
                Clients must ensure site access is safe and free from
                unauthorised persons during works.
              </p>

              <h2>7. Cancellations</h2>
              <p>
                Cancellations after work scheduling may incur costs for
                mobilisation, labour, or equipment booking.
              </p>

              <h2>8. Liability</h2>
              <p>
                We are not liable for indirect losses, delays caused by weather,
                council restrictions, or unforeseen site conditions outside our
                control.
              </p>

              <h2>9. Payment Terms</h2>
              <p>
                Payment terms will be specified in each project agreement. Late
                payments may result in additional fees or suspension of work.
              </p>

              <h2>10. Intellectual Property</h2>
              <p>
                All website content, branding, and materials are owned by the
                company and may not be copied or reused without permission.
              </p>

              <h2>11. Changes to Terms</h2>
              <p>
                We reserve the right to update these Terms & Conditions at any
                time. Continued use of our services constitutes acceptance of
                updated terms.
              </p>

              <h2>12. Contact</h2>
              <p>
                If you have any questions about these Terms & Conditions, please
                contact us via our website contact page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-extrabold">
            Need Professional Demolition Services?
          </h2>

          <p className="mt-5 text-lg text-orange-50">
            Contact our team today for safe, reliable, and compliant project
            delivery.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex rounded-2xl bg-slate-950 px-8 py-4 text-lg font-bold text-white transition hover:bg-slate-900"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
