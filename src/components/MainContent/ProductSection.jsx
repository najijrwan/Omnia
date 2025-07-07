// ProductSection.jsx
import { useRef } from 'react';
import ProductCard from './ProductCard';
import { products, newArrivals } from '../../data/mainContent/products';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductSection({ title }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold text-base-1 mb-4">{title}</h2>
      <div className='relative flex flex-col items-center'>
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto overflow-y-clip scroll-smooth hide-scrollbar"
        >
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div>
          <button
            onClick={() => scroll('left')}
            className='text-base-1 rounded-full cursor-pointer hover:bg-base-1 hover:text-white transtion-all duration-300 ease-in-out'
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => scroll('right')}
            className='text-base-1 rounded-full cursor-pointer hover:bg-base-1 hover:text-white transtion-all duration-300 ease-in-out'
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
