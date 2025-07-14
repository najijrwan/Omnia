// ProductGrid.jsx
import React, { useEffect, useState, useRef } from 'react';
import { ProductCardRectangle } from './ProductCards';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TopSellings({ title }) {
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
        fetch('https://dummyjson.com/products?limit=6')
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

            <div className="overflow-x-auto scroll-smooth hide-scrollbar" ref={scrollRef}>
                <div className="flex gap-3 w-fit">
                    {products.map((product) => (
                        <ProductCardRectangle key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};
