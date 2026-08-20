import { services } from '../../data/pages';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PageProps {
  params: { slug: string };
}

// Generate metadata dynamically
export async function generateMetadata({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServicePage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return <p className="p-6">Service not found</p>;

  return (
    <>
      <main className="min-h-screen p-6 bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
        <p className="mb-6">{service.description}</p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: service.title,
              description: service.description,
              provider: {
                '@type': 'Organization',
                name: 'DemolitionQuotes',
                url: 'https://demolitionquotes.com.au',
              },
              areaServed: {
                '@type': 'Country',
                name: 'Australia',
              },
              serviceType: 'Demolition Services',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://demolitionquotes.com.au',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Services',
                  item: 'https://demolitionquotes.com.au/services',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: service.title,
                },
              ],
            }),
          }}
        />
      </main>
    </>
  );
}

// Generate static params for Next.js
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
