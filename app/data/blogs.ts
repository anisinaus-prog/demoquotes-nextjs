export type Blog = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

export const blogs: Blog[] = [
  {
    slug: '5-things-to-know-before-hiring-a-demolition-contractor',
    title: '5 Things to Know Before Hiring a Contractor',
    description:
      'Learn key tips before hiring demolition contractors.',
    content: `
Hiring the right demolition contractor can make your project safer, easier and more affordable.

## 1. Check Their Licence

Always check that the contractor has the correct licence for the work.

## 2. Get Several Quotes

Compare quotes from different contractors.

- Check what is included
- Check waste removal
- Check asbestos removal
- Check site clean-up

## 3. Check Insurance

Make sure the contractor has suitable insurance.

## Final Thoughts

Take your time and compare contractors before making your decision.
`,
  },

  {
    slug: 'concrete-removal',
    title: 'Concrete Removal & Excavation – DemolitionQuotes.com.au',
    description:
      'Fast and safe concrete removal and excavation services. Compare licensed contractors and get free quotes instantly.',
  },
];