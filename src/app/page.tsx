import dynamic from 'next/dynamic'
import Hero from "./components/Hero";

// Lazy load below-the-fold components for better performance
const IntroSection = dynamic(() => import("./components/IntroSection"), {
  loading: () => <div className="h-96 bg-[#fdd820]" />,
  ssr: true,
})

const Services = dynamic(() => import("./components/Services"), {
  loading: () => <div className="h-96 bg-white" />,
  ssr: true,
})

const RecentProjects = dynamic(() => import("./components/RecentProjects"), {
  loading: () => <div className="h-96 bg-white" />,
  ssr: true,
})

const ClientFeedback = dynamic(() => import("./components/ClientFeedback"), {
  loading: () => <div className="h-96 bg-gray-50" />,
  ssr: true,
})

const Cta = dynamic(() => import("./components/Cta"), {
  loading: () => <div className="h-64 bg-white" />,
  ssr: true,
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
