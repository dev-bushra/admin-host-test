import Link from "next/link";
import HomeBanner from "./components/Sections/HomeBanner";
import '@/app/scss/globals.scss'
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { NextSeo } from "next-seo";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import StoriesSection from "./components/Sections/StoriesSection";
import BrowseByCategorySection from "./components/Sections/BrowseByCategorySection";
import DealsOfTheDay from "./components/Sections/DealsOfTheDay";


export default function Home() {
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
      <span>Categories</span>
      <span>Sales</span>
      <Link href="/thankyou">Thank You Page</Link>
      <Link href="/login">Login Page</Link>
    </main>
  );
}
