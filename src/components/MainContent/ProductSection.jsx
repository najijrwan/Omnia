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
      <header className='flex items-center justify-between'>
        <h2 className="text-2xl font-semibold text-base-1">{title}</h2>
        <ul className='inline-flex items-center'>
          <li className='bg-base-1 px-2 py-1 border-r cursor-pointer'>1</li>
          <li className='bg-base-1 px-2 py-1 border-r cursor-pointer'>2</li>
          <li className='bg-base-1 px-2 py-1 border-r cursor-pointer'>3</li>
          <li className='bg-base-1 px-2 py-1 border-r cursor-pointer'>4</li>
        </ul>
      </header>
      <div className='relative flex flex-col '>
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto overflow-y-clip scroll-smooth hide-scrollbar"
        >
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
