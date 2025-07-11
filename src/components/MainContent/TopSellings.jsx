// ProductGrid.jsx
import React, { useEffect, useState } from 'react';
import { ProductCardRectangle } from './ProductCards';

export default function TopSellings({ title }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=6')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, []);

    return (
        <section className="p-2 mx-4 bg-sections rounded-lg border border-classic">
            <header className='flex items-center justify-between'>
                <h2 className="text-2xl font-semibold text-base-1 mb-5">{title}</h2>
            </header>
            <div className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {products.map((product) => (
                    <ProductCardRectangle key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};
