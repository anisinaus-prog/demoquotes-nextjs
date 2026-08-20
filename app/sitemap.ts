// Google will read:
// demolitionquotes.com.au/sitemap.xml

export default function sitemap() {
  return [
    {
      url: "https://demolitionquotes.com.au",
      lastModified: new Date(),
    },
    {
      url: "https://demolitionquotes.com.au/services/residential-demolition",
      lastModified: new Date(),
    },
    {
      url: "https://demolitionquotes.com.au/services/commercial-demolition",
      lastModified: new Date(),
    },
    {
      url: "https://demolitionquotes.com.au/services/concrete-removal",
      lastModified: new Date(),
    },
  ];
}
