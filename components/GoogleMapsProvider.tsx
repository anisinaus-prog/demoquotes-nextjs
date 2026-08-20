'use client';

import { useEffect, useState } from 'react';

export default function GoogleMapsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      console.error('Google Maps API key is missing');
      setError(true);
      return;
    }

    // Google Maps already loaded
    if (window.google?.maps) {
      setLoaded(true);
      return;
    }

    const script = document.createElement('script');

    script.src =
      `https://maps.googleapis.com/maps/api/js` +
      `?key=${encodeURIComponent(apiKey)}` +
      `&libraries=places`;

    script.async = true;
    script.defer = true;

    script.onload = () => {
      console.log('Google Maps script loaded');

      if (window.google?.maps) {
        console.log('Google Maps is available');
        setLoaded(true);
      } else {
        console.error('Google Maps script loaded but window.google is missing');
        setError(true);
      }
    };

    script.onerror = () => {
      console.error('Google Maps script failed to load');
      setError(true);
    };

    document.head.appendChild(script);
  }, []);

  if (error) {
    return (
      <div className="rounded-xl bg-red-100 p-4 text-red-700">
        Failed to load Google Maps.
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="rounded-xl bg-slate-100 p-4 text-slate-600">
        Loading address search...
      </div>
    );
  }

  return <>{children}</>;
}