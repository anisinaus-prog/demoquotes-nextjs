import Script from "next/script";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './styles/globals.css';  

export const metadata = {
  metadataBase: new URL('https://www.demoquotes.com.au'),

  title: 'DemolitionQuotes.com.au – Free Demolition Quotes',
  description:
    'Compare licensed demolition contractors across Australia. Get free residential, commercial, and concrete removal quotes.',

  alternates: {
    canonical: 'https://www.demoquotes.com.au/',
  },
  
  openGraph: {
    title: 'DemolitionQuotes.com.au – Get Free Demolition Quotes',
    description:
      'Compare demolition contractors and receive free quotes for residential and commercial demolition projects.',
    url: 'https://www.demoquotes.com.au/',
    siteName: 'DemolitionQuotes',
    images: [
      {
        url: 'https://www.demoquotes.com.au/og-image.jpg',
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
    images: ['https://www.demoquotes.com.au/og-image.jpg'],
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
          {/* <!-- Google tag (gtag.js) -->*/}
          <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-4BNV7EW2C0"></Script>
          <Script >
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4BNV7EW2C0');
            `}
          </Script>
      </body>
    </html>
  );
}
