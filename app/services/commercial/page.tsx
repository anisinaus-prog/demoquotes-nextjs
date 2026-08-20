'use client';

import { useState, useEffect, useRef } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import AddressAutocompleteInput from '@/components/AddressAutocompleteInput';
import GoogleMapsProvider from '@/components/GoogleMapsProvider';

export const metadata = {
  title: 'Get Free Commercial Demolition Quotes in Australia',
  description:
    'Compare licensed demolition contractors across Australia. Get free, fast, no-obligation quotes for residential, commercial, and concrete removal projects.',
};


export default function CommercialDemolitionPage() {
  const [form, setForm] = useState({
    company: '',
    customer_name: '',
    phone: '',
    email: '',
    service_address: '',
    service_type: '',
    message: '',
    lat: '',
    lng: '',
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA4tYcSxSIhE8IoZUrWMgKxXTTGSs0xDH4',
    libraries: ['places'],
  });

  const addressRef = useRef<HTMLInputElement | null>(null);
  const autocompleteRef = useRef<any>(null);

  useEffect(() => {
    if (!isLoaded || !addressRef.current) return;

    autocompleteRef.current = new google.maps.places.Autocomplete(
      addressRef.current,
      {
        types: ['address'],
        componentRestrictions: { country: 'au' }, // Australia only
      }
    );

    autocompleteRef.current.addListener('place_changed', () => {
      const place = autocompleteRef.current.getPlace();

      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      setForm((prev) => ({
        ...prev,
        service_address: place.formatted_address || '',
        lat,
        lng,
      }));
    });
  }, [isLoaded]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  // HANDLE INPUT CHANGE
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT FORM
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess('');

    try {
      const res = await fetch(
        'https://demoquotes.redlon.com.au/api/jobs-insert.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.success) {
        setSuccess('Quote submitted successfully!');

        setForm({
          company: '',
          customer_name: '',
          phone: '',
          email: '',
          service_address: '',
          service_type: '',
          message: '',
          lat: '',
          lng: '',
        });
      } else {
        console.log(data);
        setSuccess('Failed to submit quote');
      }
    } catch (err) {
      console.log(err);
      setSuccess('Server error');
    }

    setLoading(false);
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.2),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-300">
              Commercial Demolition Specialists Sydney
            </div>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-tight md:text-6xl">
              Professional{' '}
              <span className="text-orange-400">Commercial Demolition</span>
              <br />
              Services
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Safe and efficient demolition services for offices, warehouses,
              factories, retail buildings, shopping centres, and industrial
              facilities across Sydney.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="rounded-2xl bg-orange-600 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-orange-600/30 transition hover:-translate-y-1 hover:bg-orange-700"
              >
                Request Free Quote
              </a>

              <a
                href="#services"
                className="rounded-2xl border border-slate-600 px-8 py-4 text-lg font-bold text-white transition hover:border-orange-500 hover:bg-white/5"
              >
                Explore Services
              </a>
            </div>

            {/* STATS */}
            <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
              {[
                ['500+', 'Commercial Projects'],
                ['15+', 'Years Experience'],
                ['24/7', 'Fast Response'],
                ['100%', 'Safety Compliance'],
              ].map(([number, label], i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="text-3xl font-extrabold text-orange-400">
                    {number}
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div
            id="quote"
            className="rounded-[32px] bg-white p-8 text-slate-900 shadow-[0_20px_80px_rgba(0,0,0,0.4)] lg:p-10"
          >
            <h2 className="text-3xl font-extrabold">
              Get Commercial Demolition Quote
            </h2>

            <p className="mt-3 text-slate-600">
              Submit your project details and our demolition team will contact
              you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full border p-3 rounded-xl"
              />

              <input
                name="customer_name"
                value={form.customer_name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border p-3 rounded-xl"
                required
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full border p-3 rounded-xl"
                required
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border p-3 rounded-xl"
                required
              />
 <GoogleMapsProvider>
                          <AddressAutocompleteInput
                              value={form.service_address}
                              onChange={(address, lat, lng) => {
                              setForm((prev) => ({
                                  ...prev,
                                  service_address: address,
                                  lat: lat || '',
                                  lng: lng || '',
                              }));
                              }}
                          /></GoogleMapsProvider>

              {/*
              <input
                name="service_address"
                value={form.service_address}
                onChange={handleChange}
                placeholder="Property Address"
                className="w-full border p-3 rounded-xl"
              />*/}

              <select
                name="service_type"
                value={form.service_type}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
                required
              >
                <option value="">Select Project Type</option>
                <option>Office Building</option>
                <option>Warehouse</option>
                <option>Factory</option>
                <option>Retail Shop</option>
                <option>Shopping Centre</option>
              </select>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Project Details"
                className="w-full border p-3 rounded-xl"
                rows={5}
              />
              <input type="hidden" name="lat" value={form.lat} />
              <input type="hidden" name="lng" value={form.lng} />
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-orange-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-700"
              >
                {loading ? 'Submitting...' : 'Request Quote'}
              </button>

              {success && (
                <div className="mb-4 rounded bg-green-100 p-3 text-green-700">
                  {success}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-700">
              Commercial Services
            </div>

            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              Complete Commercial Demolition Solutions
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We handle demolition projects of all sizes with strict safety and
              environmental compliance.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                icon: '🏢',
                title: 'Office Demolition',
                desc: 'Professional demolition for office buildings and commercial spaces.',
              },
              {
                icon: '🏭',
                title: 'Factory Demolition',
                desc: 'Industrial demolition services for factories and manufacturing sites.',
              },
              {
                icon: '🏬',
                title: 'Retail Demolition',
                desc: 'Safe demolition for retail stores, shopping centres, and malls.',
              },
              {
                icon: '🚜',
                title: 'Site Clearing',
                desc: 'Complete removal of debris and preparation for redevelopment.',
              },
              {
                icon: '☣️',
                title: 'Asbestos Removal',
                desc: 'Licensed asbestos removal services before demolition begins.',
              },
              {
                icon: '♻️',
                title: 'Waste Recycling',
                desc: 'Environmentally responsible recycling and waste management.',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="rounded-[30px] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-2xl"
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
      <section className="bg-slate-100 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-700">
              Why Choose Us
            </div>

            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              Commercial Demolition Experts
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We deliver reliable demolition services with strict project
              management and safety standards.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              'Fully licensed and insured demolition contractors',
              'Large-scale commercial project experience',
              'Safe and compliant demolition works',
              'Fast turnaround and minimal disruption',
              'Modern demolition equipment and machinery',
              'Environmentally responsible waste management',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm"
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

      {/* PROCESS */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full bg-orange-500/10 px-5 py-2 text-sm font-bold text-orange-300">
              Our Process
            </div>

            <h2 className="mt-6 text-5xl font-extrabold">
              How Commercial Demolition Works
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Site Assessment',
                desc: 'We inspect the property and evaluate project requirements.',
              },
              {
                number: '02',
                title: 'Planning & Permits',
                desc: 'Our team manages permits, compliance, and demolition planning.',
              },
              {
                number: '03',
                title: 'Demolition & Cleanup',
                desc: 'Safe demolition, debris removal, and final site clearing completed.',
              },
            ].map((step, i) => (
              <div
                key={i}
                className="rounded-[30px] border border-white/10 bg-white/5 p-8"
              >
                <div className="text-5xl font-extrabold text-orange-400">
                  {step.number}
                </div>

                <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>

                <p className="mt-4 leading-7 text-slate-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-extrabold leading-tight">
            Need Commercial Demolition Contractors?
          </h2>

          <p className="mt-6 text-xl text-orange-50">
            Contact our experienced demolition team today for a fast and
            competitive quote.
          </p>

          <div className="mt-10">
            <a
              href="#quote"
              className="inline-flex rounded-2xl bg-slate-950 px-8 py-5 text-lg font-bold text-white transition hover:bg-slate-900"
            >
              Get Free Commercial Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
