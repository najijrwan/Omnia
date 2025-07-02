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
      className=" 
        relative flex flex-col gap-5 text-center w-full h-[45vh] p-5 bg-secondary border-b border-b-white/40 overflow-hidden
        sm:text-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {/* Feature content */}
      <div className="transition-all duration-500 max-w-2xl">
        <h1 className="text-[8vw] text-base-1 font-bold">
          {features[index].title}
        </h1>
        <p className="text-[4vw] text-main mt-2">
          {features[index].description}
        </p>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-base-1 text-white p-2 rounded-full hover:bg-base-1/80 transition"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-base-1 text-white p-2 rounded-full hover:bg-base-1/80 transition"
      >
        <ChevronRight />
      </button>

      {/* Dots Indicator */}
      <div className="flex flex-col items-center justify-center gap-3 mt-auto ">
        <button className="bg-base-1 text-secondary px-6 py-2 rounded-md font-semibold cursor-pointer hover:bg-base-1/70 transition">
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
