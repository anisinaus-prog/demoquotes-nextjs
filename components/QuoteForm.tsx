'use client';

import { useState, useEffect, useRef } from 'react';
import AddressAutocompleteInput from '@/components/AddressAutocompleteInput';
import GoogleMapsProvider from '@/components/GoogleMapsProvider';

export default function QuoteForm() {

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
        console.log('Sending:', form);
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
    }

    return (

        <>
        {/* Form */}
        <div
            id="quote"
            className="rounded-3xl bg-white/90 p-8 text-slate-900 shadow-2xl lg:p-10">
            <h2 className="text-3xl font-extrabold">Request Free Quotes</h2>

            <p className="mt-2 text-slate-600">
                Fill out the form and receive multiple contractor quotes.
            </p>


            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                <input
                    type="text"
                    name="customer_name"
                    value={form.customer_name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                    required
                />
                </div>

                <div>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                    required
                />
                </div>

                <div>
                <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                    required
                />
                </div>

                <div>
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
                </div>

                <div>
                <select
                    name="service_type"
                    value={form.service_type}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                    required
                >
                    <option value="">Select Service</option>
                    <option value="House Demolition">House Demolition</option>
                    <option value="Commercial Demolition">
                    Commercial Demolition
                    </option>
                    <option value="Excavation">Excavation</option>
                    <option value="Asbestos Removal">Asbestos Removal</option>
                    <option value="Soil Removal">Soil Removal</option>
                </select>
                </div>

                <div>
                <textarea
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project"
                    className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                />
                </div>
                <input type="hidden" name="lat" value={form.lat} />
                <input type="hidden" name="lng" value={form.lng} />
                <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-orange-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-700"
                >
                {loading ? 'Submitting...' : 'Get Quotes Now'}
                </button>
                {success && (
                <div className="mb-4 rounded bg-green-100 p-3 text-green-700">
                    {success}
                </div>
                )}
            </form>
            </div>
        </>
    );

}