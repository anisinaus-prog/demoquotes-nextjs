'use client';

import { useEffect, useRef } from 'react';

type Props = {
  value: string;
  onChange: (value: string, lat?: string, lng?: string) => void;
  placeholder?: string;
};

export default function AddressAutocompleteInput({
  value,
  onChange,
  placeholder = 'Property Address',
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const autocompleteRef =
    useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    if (!window.google?.maps?.places) {
      console.error('Google Maps Places is not available');
      return;
    }

    console.log('Google Maps Places is available');

    const autocomplete =
      new google.maps.places.Autocomplete(inputRef.current, {
        types: ['address'],
        componentRestrictions: {
          country: 'au',
        },
      });

    autocompleteRef.current = autocomplete;

    const listener = autocomplete.addListener(
      'place_changed',
      () => {
        const place = autocomplete.getPlace();

        onChange(
          place.formatted_address || '',
          place.geometry?.location?.lat()?.toString(),
          place.geometry?.location?.lng()?.toString()
        );
      }
    );

    return () => {
      google.maps.event.removeListener(listener);
      autocompleteRef.current = null;
    };
  }, [onChange]);

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
    />
  );
}