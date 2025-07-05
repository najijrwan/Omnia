export default function ProductCard({ product }) {
    return (
        <div className="relative group cursor-pointer text-center">
            <div className="relative z-10 bg-main/60 backdrop-blur-xl shadow-[inset_0_0_15px_#ffffff30,_0_15px_30px_#00000060] rounded-full transition-transform duration-500 ease-in-out">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover rounded-full hover:scale-110 hover:-translate-y-5 transition-all duration-500 ease-in-out"
                />
            </div>

            {/* Glow ring */}
            <div className="absolute inset-0 z-0 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500 ease-in-out bg-gradient-to-tr from-base-1 to-secondary" />

            <h3 className="mt-3 font-semibold text-secondary tracking-wide drop-shadow-sm">
                {product.name}
            </h3>
        </div>
    );
}
