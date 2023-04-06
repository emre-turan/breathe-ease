import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Head>
        <link rel="icon" href="/emre-logo-dark-copy.svg" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
