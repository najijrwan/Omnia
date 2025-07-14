import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function ScrollingMarquee({ title }) {
    const [products, setProducts] = useState([]);
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 200;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=12')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, []);
    return (
        <section className="p-2 mx-2 bg-sections rounded-lg border border-classic">
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

            <div className="overflow-hidden whitespace-nowrap">
                <div className="inline-flex animate-marquee space-x-12">
                    {products.map((product) => (
                        <div key={product.id}>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="h-12 opacity-70 hover:opacity-100"
                            />
                            <p>{product.title}</p>
                        </div>
                    ))}
                    
                </div>
            </div>
        </section >
    );
}