import { About } from "./components/About";
import { Categories } from "./components/Categories";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { InstagramFeed } from "./components/InstagramFeed";
import { Luthieria } from "./components/Luthieria";
import { SmoothScroll } from "./components/SmoothScroll";
import { Visit } from "./components/Visit";
import { CONTACT } from "./data/site";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Hero />
        <Categories />
        <About />
        <InstagramFeed />
        <Luthieria />
        <Visit />
      </main>
      <Footer />
      <a
        className="floating-whatsapp"
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar com a Ritmo e Melodia pelo WhatsApp"
      >
        <span aria-hidden="true">↗</span>
        WhatsApp
      </a>
    </SmoothScroll>
  );
}
