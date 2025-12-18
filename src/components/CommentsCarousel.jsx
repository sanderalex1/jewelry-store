import { useCallback, useEffect, useRef, useState } from "react";

function CommentsCarousel({ comments }) {
  const timeRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = comments[currentIndex];

  const goToPrevious = () => {
    const isFirstComment = currentIndex === 0;
    const newIndex = isFirstComment ? comments.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastComment = currentIndex === comments.length - 1;
    const newIndex = isLastComment ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, comments]);

  const goToComment = (commentIndex) => {
    setCurrentIndex(commentIndex);
  };

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(goToNext, 5000);

    return () => clearTimeout(timeRef.current);
  }, [goToNext]);

  return (
    <div className="flex flex-col justify-center p-4 gap-4">
      <div className="flex flex-col gap-4 text-center max-w-md">
        <div className="flex flex-col gap-2">
          <h1 className="carousel-font uppercase">press</h1>
          <h2 className="carousel-font capitalize opacity-90 uppercase text-xs">
            The experience
          </h2>
        </div>
        <div className="overflow-hidden w-full max-w-md mx-auto">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {comments.map((comment, i) => (
              <div key={i} className="w-full px-8 flex-shrink-0 text-center">
                <p className="main-font">{comment.comment}</p>
                <p className="text-xs mt-2 uppercase">{comment.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        {comments.map((_, commentIndex) => (
          <div
            key={commentIndex}
            className={`text-xl transition-opacity ${
              commentIndex === currentIndex
                ? "text-black opacity-100"
                : "text-black opacity-50"
            }`}
            onClick={() => goToComment(commentIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentsCarousel;
