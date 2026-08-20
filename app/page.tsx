import Hero from '@/components/HomeHero';

const HomeClient = dynamic(() => import("./HomeClient"), {
  ssr: false,
});
import dynamic from "next/dynamic";
//NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyA4tYcSxSIhE8IoZUrWMgKxXTTGSs0xDH4

export const metadata = {
  title: 'DemoQuotes – Free Demolition Quotes Australia',
  description:
    'Compare licensed demolition contractors across Australia. Get free, fast, no-obligation quotes for residential, commercial, and concrete removal projects.',
};

export default function Page() {

    return <>
     <Hero />
     <HomeClient/>
     </>;
}