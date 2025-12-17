import { useState } from "react";

function SlidingCarousel({ slides }) {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragPercent, setDragPercent] = useState(0);

  const groupedSlides = [];
  for (let i = 0; i < slides.length; i += 2) {
    groupedSlides.push(slides.slice(i, i + 2));
  }

  const onStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const onMove = (e) => {
    if (!isDragging) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setDragPercent(((x - startX) / window.innerWidth) * 100);
  };

  const onEnd = () => {
    setIsDragging(false);

    if (dragPercent > 15 && index > 0) {
      setIndex(index - 1);
    } else if (dragPercent < -15 && index < groupedSlides.length - 1) {
      setIndex(index + 1);
    }

    setDragPercent(0);
  };

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex ${
          isDragging ? "" : "transition-transform duration-300 ease-out"
        }`}
        style={{
          transform: `translateX(calc(${-index * 100}% + ${dragPercent}%))`,
        }}
        onMouseDown={onStart}
        onMouseMove={onMove}
        onMouseUp={onEnd}
        onMouseLeave={onEnd}
        onTouchStart={onStart}
        onTouchMove={onMove}
        onTouchEnd={onEnd}
      >
        {groupedSlides.map((group, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 grid grid-cols-2 gap-2 px-2"
          >
            {group.map((slide, j) => (
              <img
                key={j}
                src={slide.url}
                alt=""
                draggable={false}
                className="w-full h-[15rem] object-cover"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlidingCarousel;
