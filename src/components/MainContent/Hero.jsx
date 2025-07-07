import { useState, useRef } from "react";
import { features } from "../../data/mainContent/features";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) < 50) return; // ignore small swipes
    if (delta > 0) nextSlide();       // swipe left
    else prevSlide();                 // swipe right
  };

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className=" 
        relative flex flex-col items-center justify-between text-center w-full h-[260px] p-5 bg-secondary border-b border-b-base-2/50 overflow-hidden"
    >

      {/* Feature content */}
      <div className="transition-all duration-500 max-w-2xl px-5">
        <h1 className="text-[30px] text-base-1 font-extrabold sm:text-[35px]">
          {features[index].title}
        </h1>
        <p className="text-[15px] text-main mt-2 sm:text-[17.5px]">
          {features[index].description}
        </p>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 text-base-1 p-2 rounded-full cursor-pointer hover:bg-base-1 hover:text-main transition-all duration-300 ease-in-out"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 text-base-1 p-2 rounded-full cursor-pointer hover:bg-base-1 hover:text-main transition-all duration-300 ease-in-out"
      >
        <ChevronRight />
      </button>

      {/* Dots Indicator */}
      <div className="flex flex-col items-center justify-center gap-3">
        <button className="bg-base-1 text-main px-6 py-2 rounded-md font-semibold cursor-pointer hover:bg-main hover:text-base-1 transition transtion-all duration-500 ease-in-out">
          Shop Now
        </button>
        <div className="flex gap-2">
          {features.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full border border-base-1 transition ${i === index ? "bg-base-1" : "bg-transparent"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
