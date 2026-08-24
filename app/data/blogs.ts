export type Blog = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

export const blogs: Blog[] = [
  {
    slug: 'demo-post-1',
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
];