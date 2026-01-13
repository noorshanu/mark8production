'use client'

import dynamic from 'next/dynamic'
import Hero from "./components/Hero";

// Lazy load below-the-fold components - disable SSR for faster initial load
const IntroSection = dynamic(() => import("./components/IntroSection"), {
  loading: () => <div className="h-96 bg-[#fdd820] animate-pulse" />,
  ssr: false,
})

const Services = dynamic(() => import("./components/Services"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
  ssr: false,
})

const RecentProjects = dynamic(() => import("./components/RecentProjects"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
  ssr: false,
})

const ClientFeedback = dynamic(() => import("./components/ClientFeedback"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  ssr: false,
})

const Cta = dynamic(() => import("./components/Cta"), {
  loading: () => <div className="h-64 bg-white animate-pulse" />,
  ssr: false,
})

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <Services />
      <RecentProjects />
      <ClientFeedback />
      <Cta />
    </>
  );
}
