import Hero from "./components/Hero";

import Services from "./components/Services";
import RecentProjects from "./components/RecentProjects";
import Cta from "./components/Cta";

import IntroSection from "./components/IntroSection";
import ClientFeedback from "./components/ClientFeedback";
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
