import type { MetadataRoute } from 'next';
import { cities } from '@/app/data/cities';
import { suburbsOfSydney } from '@/app/data/suburbs';
import { blogs } from '@/app/data/blogs'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://demoquotes.com.au';

  // City pages
  const cityUrls = cities.map((city) => ({
    url: `${baseUrl}/services/house-demolition/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Sydney suburb pages
  const suburbUrls = suburbsOfSydney.map((suburb) => ({
    url: `${baseUrl}/services/house-demolition/sydney/${suburb}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  // Blog pages 
  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({ 
    url: `${baseUrl}/blog/${blog.slug}`, 
    lastModified: new Date(), 
    changeFrequency: 'monthly', 
    priority: 0.7, }));

  // Main service pages
  const serviceUrls: MetadataRoute.Sitemap = [

    {
      url: `${baseUrl}/services/asbestos-removal`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/excavation-works`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },    {
      url: `${baseUrl}/services/house-demolition`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/commercial`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/concrete-removal`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    

  ];

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },

    // Quote page
    {
      url: `${baseUrl}/get-a-quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Service pages
    ...serviceUrls,

    // City pages
    ...cityUrls,

    // Sydney suburb pages
    ...suburbUrls,
    
    // Blog pages
    ...blogPages,
  ];
}