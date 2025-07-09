// ProductCard.jsx
export function ProductCardRounded({ product }) {
    return (
        <div className="relative group cursor-pointer text-center mt-6">
            <div className="relative flex items-center justify-center size-25 z-10 bg-cards border border-classic rounded-full transition-transform duration-500 ease-in-out">
                <img
                    src={product.image}
                    alt={product.name}
                    className="size-20 rounded-full hover:scale-130 hover:-translate-y-5 transition-all duration-500 ease-in-out"
                />
            </div>

            <h3 className="mt-3 font-semibold text-secondary tracking-wide drop-shadow-sm text-[12px]">
                {product.name}
            </h3>
        </div>
    );
}

export function ProductCardRectangle({ product }) {
    return (
        <div className="border rounded-lg shadow-md hover:shadow-xl transition p-3 bg-white">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-3">
                <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
                <p className="text-main font-bold mt-1">{product.price}</p>
            </div>
        </div>
    );
}
