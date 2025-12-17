import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { infiniteCarouselSlides } from "./data";
import { carouselSlides } from "./data";
import InfiniteCarousel from "./components/InfiniteCarousel";
import SlidingCarousel from "./components/SlidingCarousel";
import WordColorEffect from "./components/WordColorEffect";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="overflow-x-hidden">
        <div className="flex grow relative h-full w-full z-10 overflow-hidden">
          <a aria-label="image link">
            <img src="placeholder.jpg" alt="placeholder" />
          </a>
        </div>
        <div className="flex grow relative h-full w-full z-10 overflow-hidden">
          <a aria-label="image link">
            <img src="placeholder.jpg" alt="placeholder" />
          </a>
        </div>
        <InfiniteCarousel slides={infiniteCarouselSlides} />
        <div>
          <WordColorEffect
            text="Each piece is developed through a restrained design process that favors precision over embellishment. Situated within a contemporary visual framework, the work exists in dialogue with fashion, image-making, and collaboration, forming a coherent and considered aesthetic."
            active={scrolled}
          />
        </div>
        <SlidingCarousel slides={carouselSlides} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
