export default function ProductCard({ product }) {
    return (
        <div className="relative group cursor-pointer text-center mt-6">
            <div className="relative flex items-center justify-center size-25 z-10 bg-base-1/10 border border-black/10 rounded-full transition-transform duration-500 ease-in-out">
                <img
                    src={product.image}
                    alt={product.name}
                    className="size-20 rounded-full hover:scale-130 hover:-translate-y-5 transition-all duration-500 ease-in-out"
                />
            </div>

            {/* Glow ring */}

            <h3 className="mt-3 font-semibold text-secondary tracking-wide drop-shadow-sm text-[12px]">
                {product.name}
            </h3>
        </div>
    );
}
