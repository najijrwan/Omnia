// ProductCard.jsx
import { ShoppingCart, Heart } from "lucide-react";
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
        <div className="border border-classic rounded-xl p-1 ">
            <div className="bg-cards rounded-lg border border-classic">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full cursor-pointer hover:scale-115 hover:-translate-y-5 transition-all duration-500 ease-in-out"
                />
                <div className="flex gap-1 items-center p-1">
                    <button>
                        <ShoppingCart size={20} className="cursor-pointer text-base-1 hover:text-main hover:scale-120 hover:-translate-y-1 transition-all duration-300" />
                    </button>
                    <button>
                        <Heart size={20} className="cursor-pointer text-base-1 hover:text-main hover:scale-120 hover:-translate-y-1 transition-all duration-300" />
                    </button>
                    <p className="text-base-1 text-sm font-bold ml-auto">${product.price}</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-3 mt-3">
                <h3 className="text-sm font-[900] text-black">{product.title}</h3>
                <p className="text-xs font-[300] text-black/80">{product.description}</p>
            </div>
        </div>
    );
}
