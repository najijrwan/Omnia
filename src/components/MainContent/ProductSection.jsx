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
    <section className="">
      <header className='flex items-center justify-between'>
        <h2 className="text-2xl font-semibold text-base-1">{title}</h2>
      </header>
      <div className='relative flex flex-col'>
        <div
          ref={scrollRef}
          className="flex justify-around gap-3 w-full overflow-x-auto overflow-y-clip scroll-smooth hide-scrollbar"
        >
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
