import type { Metadata } from "next";

import "./globals.css";

import dynamic from "next/dynamic";

// Lazy load components for better initial performance
// Note: In Server Components, we can't use ssr: false, so we'll load them normally
const Loader = dynamic(() => import("./components/Loader"), {
  ssr: true,
})

const NavBar = dynamic(() => import("./components/NavBar"), {
  ssr: true, // Keep SSR for NavBar for SEO
  loading: () => <div className="h-20 bg-white" />,
})

const Footer = dynamic(() => import("./components/Footer"), {
  ssr: true,
  loading: () => <div className="h-40 bg-black" />,
})

export const metadata: Metadata = {
  title: "Mark8 Production | Aap Business Sambhalo, Growth hum karwa denge",
  description: "Mark8 Production is a leading digital agency specializing in creating compelling visual stories that drive results. We combine creativity, strategy, and technology to help brands connect with their audiences and achieve their business goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-white text-black"
      >
        <Loader />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
