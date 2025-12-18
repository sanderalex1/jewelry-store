import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InfiniteCarousel from "./components/InfiniteCarousel";
import SlidingCarousel from "./components/SlidingCarousel";
import ProductCard from "./components/ProductCard";
import SidePanel from "./components/SidePanel";
import { infiniteCarouselSlides } from "./data";
import { carouselSlides } from "./data";
import { cards } from "./data";
import { body } from "./data";
import { material } from "./data";
import { collections } from "./data";

function App() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const onScroll = () => {
  //     setScrolled(window.scrollY > 100);
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <>
      <header className="sticky top-0 z-50">
        <Header onMenuClick={() => setIsSidePanelOpen(true)} />
        <SidePanel
          open={isSidePanelOpen}
          onClose={() => setIsSidePanelOpen(false)}
          body={body}
          material={material}
          collections={collections}
        />
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
        <h1 className="main-font text-xl p-8 whitespace-pre-line">
          Each piece is developed through a restrained design process that
          favors <span className="text-[#6C6C6C] font-bold">precision</span>{" "}
          over embellishment. Situated within a contemporary visual framework,
          the work exists in dialogue with{" "}
          <span className="text-[#6C6C6C] font-bold">fashion</span>,
          <span className="text-[#6C6C6C] font-bold">image-making</span>, and{" "}
          <span className="text-[#6C6C6C] font-bold">collaboration</span>,
          forming a coherent and considered aesthetic.
        </h1>
        <SlidingCarousel slides={carouselSlides} />
        <div>
          <div className="flex w-[13.8rem] flex-col items-center gap-[1.25rem] justify-self-center mt-8">
            <h2 className="carousel-font text-base text-center">ECLIPSE</h2>
            <h1 className="main-font text-center">
              Explores balance through weight and negative space
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-4 p-4 h-[43rem]">
            {cards.map((card) => (
              <ProductCard card={card} />
            ))}
            <h2 className="carousel-font text-center">
              Explore all collections →
            </h2>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
