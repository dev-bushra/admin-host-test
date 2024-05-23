"use client"
// import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Head from "next/head";
import { NextSeo } from "next-seo";
import { DefaultSeo } from "next-seo";
import Image from 'next/image';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Assets
import '@/app/[locale]/scss/globals.scss'
import AdvertisementFourFull from '../../../public/advertisement-four-full.png'

// Components
import HomeBanner from "./components/Sections/HomeBanner";
import StoriesSection from "./components/Sections/StoriesSection";
import BrowseByCategorySection from "./components/Sections/BrowseByCategorySection";
import DealsOfTheDay from "./components/Sections/DealsOfTheDay";
import AdvertisementOne from "./components/Sections/AdvertisementOne";
import AdvertisementTwo from "./components/Sections/AdvertisementTwo";
import AdvertisementThree from "./components/Sections/AdvertisementThree";
import OffersSection from "./components/Sections/OffersSection";
import BestSellingSection from "./components/Sections/BestSellingSection";
import RecentArriveSection from "./components/Sections/RecentArriveSection";
import BestSellersOfTheWeek from "./components/Sections/BestSellersOfTheWeek";
import PopularityCounterSection from "./components/Sections/PopularityCounterSection";

export default function Home() {
  // const t = useTranslations('IndexPage');
  // const pathname = usePathname();
  // console.log('pathname', pathname);
  
  return (
    <main className="flex flex-col items-center min-h-screen">

      {/* SEO Head */}
      <Head>
        <NextSeo
          title="Dynamic Maids"
          description="description"
          canonical="https://www.website.ie/"
          openGraph={{
            url: "https://www.website.ie/",
            title: "Dynamic Maids",
            description: "description",
            images: [
              { url: "https://find.com/images/find-logo.png" },
            ],
          }}
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Page */}
      <HomeBanner />
      <StoriesSection />
      <BrowseByCategorySection />
      <DealsOfTheDay />
      <AdvertisementOne />
      <OffersSection />
      <AdvertisementTwo />
      <BestSellingSection />
      <BestSellersOfTheWeek />
      <AdvertisementThree />
      <RecentArriveSection />
      <Image src={AdvertisementFourFull} width={1300} height={430} alt='advertisement-four-full' />
      <PopularityCounterSection />
      {/* 
      <span>Categories</span>
      <span>Sales</span>
      <Link href="/thankyou">Thank You Page</Link>
      <Link href="/login">Login Page</Link> 
      */}
    </main>
  );
}
