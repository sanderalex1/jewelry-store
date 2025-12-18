import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InfiniteCarousel from "./components/InfiniteCarousel";
import SlidingCarousel from "./components/SlidingCarousel";
import ProductCard from "./components/ProductCard";
import SidePanel from "./components/SidePanel";
import CommentsCarousel from "./components/CommentsCarousel";
import { infiniteCarouselSlides } from "./data";
import { carouselSlides } from "./data";
import { cards } from "./data";
import { body } from "./data";
import { material } from "./data";
import { collections } from "./data";
import { comments } from "./data";
import { footerInfo } from "./data";

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
          <span className="text-[#6C6C6C] font-bold">fashion </span>{" "}
          <span className="text-[#6C6C6C] font-bold">image-making</span>, and{" "}
          <span className="text-[#6C6C6C] font-bold">collaboration</span>,
          forming a coherent and considered aesthetic.
        </h1>
        <SlidingCarousel slides={carouselSlides} />
        <div>
          <div className="mx-auto flex w-[13.8rem] flex-col items-center gap-[1.25rem] mt-8">
            <h2 className="carousel-font text-xl text-center">ECLIPSE</h2>
            <h1 className="main-font text-center">
              Explores balance through weight and negative space
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-wrap justify-center gap-4 p-4">
              {cards.map((card) => (
                <ProductCard card={card} />
              ))}
            </div>
            <h2 className="carousel-font text-center text-[#3D3B3B] hover:text-black cursor-pointer">
              Explore all collections →
            </h2>
          </div>
        </div>
        <div className="flex flex-row gap-4 px-4 py-16 justify-center">
          <div className="flex flex-col gap-8">
            <img
              className="w-50 aspect-square object-cover"
              src="placeholder2.png"
              alt=""
            />
            <img
              className="w-35 aspect-square object-cover"
              src="placeholder2.png"
              alt=""
            />
          </div>
          <img
            className="h-60 w-45 aspect-[2/4] object-cover self-center"
            src="placeholder2.png"
            alt=""
          />
        </div>
        <CommentsCarousel comments={comments} />
      </main>
      <footer>
        <Footer data={footerInfo} />
      </footer>
    </>
  );
}

export default App;
