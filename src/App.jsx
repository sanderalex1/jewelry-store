import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import infiniteCarouselSlides from "./data";
import InfiniteCarousel from "./components/InfiniteCarousel";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="flex grow relative h-full w-full z-10 overflow-hidden">
          <a aria-label="image link">
            <img src="placeholder.jpg" alt="" />
          </a>
        </div>
        <div className="flex grow relative h-full w-full z-10 overflow-hidden">
          <a aria-label="image link">
            <img src="placeholder.jpg" alt="" />
          </a>
        </div>
        <InfiniteCarousel slides={infiniteCarouselSlides} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
