import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 py-16 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="text-2xl font-extrabold text-white">
            DemolitionQuote
          </div>

          <p className="mt-5 leading-7">
            Australia&apos;s leading demolition quoting platform.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Services</h3>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="/services/house-demolition"
              className="transition hover:text-orange-400"
            >
              House Demolition
            </Link>
            <Link
              href="/services/excavation-works"
              className="transition hover:text-orange-400"
            >
              Excavation
            </Link>
            <Link
              href="/services/asbestos-removal"
              className="transition hover:text-orange-400"
            >
              Asbestos Removal
            </Link>
            <Link
              href="/services/commercial"
              className="transition hover:text-orange-400"
            >
              Commercial Demolition
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Company</h3>

          <div className="mt-5 flex flex-col gap-3">
            <Link href="/about-us" className="transition hover:text-orange-400">
              About Us
            </Link>
            <Link href="/contact" className="transition hover:text-orange-400">
              Contact
            </Link>
            <Link
              href="/privacy-policy"
              className="transition hover:text-orange-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="transition hover:text-orange-400"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
        © 2026 DemolitionQuote. All rights reserved.
      </div>
    </footer>
  );
}
