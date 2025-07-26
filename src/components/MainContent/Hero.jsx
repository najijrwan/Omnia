import { useState, useEffect } from "react";
import { ads } from "../../data/navBar/ads";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === ads.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <section className="w-full p-2 text-center">

      {/* Carousel Section */}
      <div className="relative w-full max-w-xl mx-auto">
        {/* Image */}
        <img
          src={ads[currentIndex].image}
          alt={ads[currentIndex].title}
          className="w-full h-56 object-cover rounded-lg shadow-md transition-all duration-700"
        />

        {/* Title overlay */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-base-1/60 text-white py-2 px-4 rounded-lg">
          <h3 className="text-lg font-semibold">{ads[currentIndex].title}</h3>
          <p className="text-sm">{ads[currentIndex].subtitle}</p>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={() =>
            setCurrentIndex(
              currentIndex === 0 ? ads.length - 1 : currentIndex - 1
            )
          }
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 cursor-pointer"
        >
          ◀
        </button>
        <button
          onClick={() =>
            setCurrentIndex(
              currentIndex === ads.length - 1 ? 0 : currentIndex + 1
            )
          }
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 cursor-pointer"
        >
          ▶
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {ads.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-base-1" : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
