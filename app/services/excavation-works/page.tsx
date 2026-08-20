'use client';

import { useState, useEffect, useRef } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import AddressAutocompleteInput from '@/components/AddressAutocompleteInput';
import GoogleMapsProvider from '@/components/GoogleMapsProvider';


export default function ExcavationWorksPage() {
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
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-300">
              Professional Excavation Contractors Sydney
            </div>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-tight md:text-6xl">
              Reliable <span className="text-orange-400">Excavation Works</span>
              <br />
              Services
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Bulk excavation, site cuts, trenching, earthmoving, and land
              clearing services for residential, commercial, and civil projects.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="rounded-2xl bg-orange-600 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-orange-600/30 transition hover:-translate-y-1 hover:bg-orange-700"
              >
                Get Excavation Quote
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
                ['1000+', 'Projects Completed'],
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
              Request Excavation Quote
            </h2>

            <p className="mt-3 text-slate-600">
              Submit your excavation project details and our team will contact
              you shortly.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <input
                type="text"
                name="customer_name"
                value={form.customer_name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                required
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                required
              />

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
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

              {/*<input
                type="text"
                name="service_address"
                value={form.service_address}
                onChange={handleChange}
                placeholder="Job Address"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />*/}

              <select
                name="service_type"
                value={form.service_type}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                required
              >
                <option value="">Select Excavation Type</option>

                <option value="Bulk Excavation">Bulk Excavation</option>

                <option value="Site Cut">Site Cut</option>

                <option value="Trenching">Trenching</option>

                <option value="Earthmoving">Earthmoving</option>

                <option value="Land Clearing">Land Clearing</option>
              </select>

              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Project Details"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
              <input type="hidden" name="lat" value={form.lat} />
              <input type="hidden" name="lng" value={form.lng} />
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-orange-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-700"
              >
                {loading ? 'Submitting...' : 'Get Free Quote'}
              </button>
            </form>
            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />

              <select className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100">
                <option>Select Excavation Type</option>
                <option>Bulk Excavation</option>
                <option>Site Cut</option>
                <option>Trenching</option>
                <option>Earthmoving</option>
                <option>Land Clearing</option>
              </select>

              <textarea
                rows={5}
                placeholder="Project Details"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-orange-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-700"
              >
                Get Free Quote
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
              Excavation Services
            </div>

            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              Complete Excavation Solutions
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Residential, commercial, and civil excavation works completed
              safely and efficiently.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                icon: '🚜',
                title: 'Bulk Excavation',
                desc: 'Large-scale earthmoving and excavation works for construction projects.',
              },
              {
                icon: '🏗️',
                title: 'Site Cuts',
                desc: 'Precision site cuts and land preparation for new developments.',
              },
              {
                icon: '🕳️',
                title: 'Trenching',
                desc: 'Safe trench excavation for plumbing, drainage, and utilities.',
              },
              {
                icon: '🌏',
                title: 'Earthmoving',
                desc: 'Professional earthmoving services using modern machinery.',
              },
              {
                icon: '🌿',
                title: 'Land Clearing',
                desc: 'Efficient land clearing and vegetation removal services.',
              },
              {
                icon: '🚛',
                title: 'Soil Removal',
                desc: 'Safe removal and disposal of soil and excavation materials.',
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
              Experienced Excavation Contractors
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our excavation team delivers safe, reliable, and cost-effective
              earthworks solutions.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              'Experienced excavation operators and supervisors',
              'Modern excavation and earthmoving machinery',
              'Safe excavation and trenching practices',
              'Fast project turnaround times',
              'Residential, commercial, and civil experience',
              'Competitive excavation pricing',
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
              How Excavation Works
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Site Inspection',
                desc: 'We assess the site and understand excavation requirements.',
              },
              {
                number: '02',
                title: 'Excavation Planning',
                desc: 'Our team plans excavation works with safety and efficiency in mind.',
              },
              {
                number: '03',
                title: 'Earthworks Completion',
                desc: 'Excavation, soil removal, and site cleanup completed professionally.',
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
            Need Professional Excavation Contractors?
          </h2>

          <p className="mt-6 text-xl text-orange-50">
            Contact our excavation team today for a free consultation and
            competitive quote.
          </p>

          <div className="mt-10">
            <a
              href="#quote"
              className="inline-flex rounded-2xl bg-slate-950 px-8 py-5 text-lg font-bold text-white transition hover:bg-slate-900"
            >
              Request Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
