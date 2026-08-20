import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 text-white lg:py-28">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero_bg.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300">
            Trusted Demolition Contractors Across Australia
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Compare{' '}
            <span className="text-orange-400">
              Demolition Quotes
            </span>{' '}
            Fast
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Get competitive quotes from licensed demolition, excavation,
            asbestos removal, and civil contractors near you.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/get-a-quote"
              className="rounded-2xl bg-orange-600 px-7 py-4 font-bold text-white shadow-2xl shadow-orange-600/30 transition hover:-translate-y-1 hover:bg-orange-700"
            >
              Get Free Quotes
            </Link>

            <Link
              href="#services"
              className="rounded-2xl border border-slate-600 px-7 py-4 font-bold text-white transition hover:border-orange-500 hover:bg-white/5"
            >
              Explore Services
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-3">

            <Stat
              number="500+"
              label="Verified Contractors"
            />

            <Stat
              number="24h"
              label="Fast Responses"
            />

            <Stat
              number="100%"
              label="Free Quotes"
            />

          </div>

        </div>
      </div>
    </section>
<<<<<<< HEAD
  );
}


/* ----------------------------------------
   Stat Card
----------------------------------------- */

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <div className="text-2xl font-extrabold text-orange-400 sm:text-3xl">
        {number}
      </div>

      <p className="mt-2 text-sm text-slate-300">
        {label}
      </p>
    </div>
=======
>>>>>>> e18a20c914d1df4a94efea7f6a5c59077378b8a4
  );
}


/* ----------------------------------------
   Stat Card
----------------------------------------- */

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <div className="text-2xl font-extrabold text-orange-400 sm:text-3xl">
        {number}
      </div>

      <p className="mt-2 text-sm text-slate-300">
        {label}
      </p>
    </div>
  );
}
