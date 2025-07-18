import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { maximiseYourSavings } from "../../data/mainContent/products";
import { PorductCardRectangled } from "./ProductCards";
export default function MaximiseYourSavings({ title }) {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 750;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };
    return (
        <section className="py-2 mx-4 bg-sections rounded-lg border border-classic">
            <header className='flex items-center justify-between mb-6 mx-2'>
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
            <div className="flex gap-3 overflow-x-auto scroll-smooth hide-scrollbar mb-6" ref={scrollRef}>
                {maximiseYourSavings.map(product => (
                    <PorductCardRectangled key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}