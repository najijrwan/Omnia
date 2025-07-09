import { useRef } from 'react';
import { ProductCardRectangle } from './ProductCards';
import { products } from '../../data/mainContent/products';
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function TopSellers({ title }) {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 1000;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    // 👇 Prepare the top 6 best sellers
    const topSellingProducts = products
        .filter((product) => product.quantitySold) // only products that have quantitySold defined
        .sort((a, b) => b.quantitySold - a.quantitySold) // highest sold first
        .slice(0, 6); // take top 6

    return (
        <section className="p-2 mx-4 bg-sections rounded-lg border border-classic">
            <header className='flex items-center justify-between'>
                <h2 className="text-2xl font-semibold text-base-1">{title}</h2>
                <div className='hidden items-center lg:flex'>
                    <button
                        onClick={() => scroll('left')}
                        className='p-2 text-base-1 rounded-full cursor-pointer hover:bg-base-1 hover:text-white transtion-all duration-300 ease-in-out'
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className='p-2 text-base-1 rounded-full cursor-pointer hover:bg-base-1 hover:text-white transtion-all duration-300 ease-in-out'
                    >
                        <ChevronRight />
                    </button>
                </div>
            </header>

            <div className="overflow-x-auto scroll-smooth hide-scrollbar" ref={scrollRef}>
                <div className="flex gap-3 w-fit">
                    {topSellingProducts.map((product) => (
                        <ProductCardRectangle key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}