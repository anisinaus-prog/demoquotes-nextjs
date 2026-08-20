'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [quotes, setQuotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');

    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetchQuotes();
  }, [router]);

  const fetchQuotes = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        'https://demoquotes.redlon.com.au/api/get-quotes.php',
        {
          cache: 'no-store',
        }
      );

      const text = await res.text();

      console.log('RAW RESPONSE:', text);

      const data = JSON.parse(text);

      console.log('PARSED DATA:', data);

      if (data.success && Array.isArray(data.quotes)) {
        setQuotes(data.quotes);
      } else {
        setQuotes([]);
        console.log('Invalid structure:', data);
      }
    } catch (err) {
      console.log('ERROR:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-5">Admin Dashboard</h1>

      {loading && <p>Loading quotes...</p>}

      {!loading && quotes.length === 0 && <p>No quotes found</p>}

      {quotes.map((q: any) => (
        <div key={q.id} className="border p-3 mb-3">
          <p>
            <b>Company Name:</b> {q.company}
          </p>
          <p>
            <b>Contact Person:</b> {q.full_name}
          </p>
          <p>
            <b>Phone:</b> {q.phone}
          </p>
          <p>
            <b>Email:</b> {q.email}
          </p>
          <p>
            <b>Service:</b> {q.service_type}
          </p>
          <p>
            <b>Address:</b> {q.service_address}
          </p>
          <p>
            <b>Message:</b> {q.message}
          </p>
        </div>
      ))}
    </main>
  );
}
