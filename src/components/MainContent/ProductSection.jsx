// PorductSection.jsx
import ProductCard from './ProductCard';
import { products, newArrivals } from '../../data/mainContent/products';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductSection({ title }) {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold text-base-1 mb-4">{title}</h2>
      <div className='relative flex items-center gap-4'>
        <button className='p-1.5 text-base-1 rounded-full cursor-pointer hover:bg-base-1 hover:text-white transtion-all duration-300 ease-in-out'>
          <ChevronLeft />
        </button>
        <div className="flex gap-3 w-fit">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <button className=' w-6 h-6 text-base-1'>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
