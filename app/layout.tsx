import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './styles/globals.css';

export const metadata = {
  title: 'DemolitionQuotes.com.au – Free Demolition Quotes',
  description:
    'Compare licensed demolition contractors across Australia. Get free residential, commercial, and concrete removal quotes.',

  openGraph: {
    title: 'DemolitionQuotes.com.au – Get Free Demolition Quotes',
    description:
      'Compare demolition contractors and receive free quotes for residential and commercial demolition projects.',
    url: 'https://demoquotes.com.au',
    siteName: 'DemolitionQuotes',
    images: [
      {
        url: 'https://demoquotes.com.au/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Demolition Quotes Australia',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'DemolitionQuotes.com.au',
    description:
      'Get free demolition quotes from licensed contractors across Australia.',
    images: ['https://demoquotes.com.au/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className="bg-gray-50 font-sans min-h-screen w-full">
        
        <main className="bg-white text-slate-900">
            <Navbar />
            
                {children}
            
        </main>

        <Footer />
         
      </body>
    </html>
  );
}
