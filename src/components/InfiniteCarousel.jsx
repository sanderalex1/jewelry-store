function InfiniteCarousel({ slides }) {
  return (
    <>
      <div className="m-2 w-full overflow-x-hidden no-scrollbar ">
        <div className="flex gap-4 w-max scroll">
          {/* Group A */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-24 p-4 flex flex-col items-center justify-center"
            >
              <img className="min-h-[96px]" src={slide.url} alt={slide.title} />
              <p className="align-bottom carousel-font capitalize">
                {slide.title}
              </p>
            </div>
          ))}

          {/* Group B */}
          {slides.map((slide, index) => (
            <div
              key={index + slides.length}
              className="w-24 p-4 flex flex-col items-center justify-center"
            >
              <img className="min-h-[96px]" src={slide.url} alt={slide.title} />
              <p className="align-bottom carousel-font capitalize">
                {slide.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default InfiniteCarousel;
