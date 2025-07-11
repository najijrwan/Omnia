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
        <div className="border border-classic rounded-xl cursor-pointer mt-6 p-1 ">
            <div className="bg-cards rounded-lg border border-classic">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full hover:scale-115 hover:-translate-y-5 transition-all duration-500 ease-in-out"
                />
                <div>
                    <button>
                        <ShoppingCart className="cursor-pointer text-base-1 hover:text-main transition-colors duration-300" />
                    </button>
                    <button>
                        <Heart className="cursor-pointer text-base-1 hover:text-main transition-colors duration-300" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-3 mt-3">
                <h3 className="text-sm font-[900] text-black">{product.title}</h3>
                <p className="text-xs font-[300] text-black/80">{product.description}</p>
                <p className="text-black font-bold mt-1">{product.price}</p>
            </div>
        </div>
    );
}
