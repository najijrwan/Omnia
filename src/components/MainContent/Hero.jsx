import { useState } from "react";
import { features } from "../../data/mainContent/features";

export default function Hero() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className=" relative flex flex-col items-center w-full h-[50vh] p-5 bg-secondary border-b border-b-white/40 overflow-hidden">

      {/* Feature content */}
      <div className="transition-all duration-500 max-w-2xl">
        <h1 className="text-4xl text-base-1 md:text-5xl font-bold mb-4">
          {features[index].title}
        </h1>
        <p className="text-lg text-main md:text-xl mb-6">
          {features[index].description}
        </p>
        <button className="bg-base-1 text-secondary px-6 py-2 rounded-md font-semibold cursor-pointer hover:bg-base-1/70 transition">
          Shop Now
        </button>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-base-1 text-white p-2 rounded-full hover:bg-base-1/80 transition"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-base-1 text-white p-2 rounded-full hover:bg-base-1/80 transition"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button> 

      {/* Dots Indicator */}
      <div className="flex gap-2 mt-8">
        {features.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full border border-base-1 transition ${
              i === index ? "bg-base-1" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
