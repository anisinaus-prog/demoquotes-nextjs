export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-300">
            Legal Information
          </div>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This Privacy Policy explains how we collect, use, and protect your
            personal information when using our website and services.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:p-14">
            <div className="prose prose-slate max-w-none">
              <p>Last updated: January 2026</p>

              <h2>1. Introduction</h2>
              <p>
                We are committed to protecting your privacy and handling your
                personal information responsibly. This Privacy Policy outlines
                how we collect, use, store, and protect your information.
              </p>

              <h2>2. Information We Collect</h2>
              <p>
                We may collect the following information when you use our
                website or contact us:
              </p>

              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Property or project details</li>
                <li>IP address and browser information</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use your information to:</p>

              <ul>
                <li>Provide demolition and excavation quotes</li>
                <li>Respond to enquiries</li>
                <li>Improve our services and website</li>
                <li>Communicate project updates</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>4. Cookies</h2>
              <p>
                Our website may use cookies and analytics tools to improve user
                experience and track website performance.
              </p>

              <h2>5. Third-Party Services</h2>
              <p>
                We may use trusted third-party services such as analytics,
                hosting providers, email services, or advertising platforms.
              </p>

              <h2>6. Data Protection</h2>
              <p>
                We take reasonable steps to protect your personal information
                from misuse, loss, unauthorized access, modification, or
                disclosure.
              </p>

              <h2>7. Sharing Information</h2>
              <p>
                We do not sell or rent your personal information. Your
                information may only be shared where necessary to provide our
                services or comply with legal requirements.
              </p>

              <h2>8. Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your
                personal information by contacting us directly.
              </p>

              <h2>9. External Links</h2>
              <p>
                Our website may contain links to external websites. We are not
                responsible for the privacy practices of third-party websites.
              </p>

              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                If you have any questions regarding this Privacy Policy, please
                contact our team through the contact page on our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-extrabold">
            Need Demolition or Excavation Services?
          </h2>

          <p className="mt-5 text-lg text-orange-50">
            Contact our experienced team today for a free consultation and
            quote.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex rounded-2xl bg-slate-950 px-8 py-4 text-lg font-bold text-white transition hover:bg-slate-900"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
