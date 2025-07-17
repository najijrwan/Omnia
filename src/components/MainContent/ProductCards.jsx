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

            <h3 className="mt-3 font-semibold text-base-1 tracking-wide drop-shadow-sm text-[12px]">
                {product.name}
            </h3>
        </div>
    );
}

export function ProductCardSquared({ product }) {
    return (
        <div className="border border-classic rounded-xl p-1 w-50 mt-6">
            <div className="bg-cards rounded-lg border border-classic">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full cursor-pointer hover:scale-120  hover:-translate-y-5 transition-all duration-500 ease-in-out"
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
            <div className="flex flex-col justify-center items-start gap-1 mt-1 p-1">
                <h3 className="text-sm font-[900] text-base-1">{product.title}</h3>
                <p className="text-xs font-[300] text-black/70 ">{product.description}</p>
            </div>
        </div>
    );
}

export function PorductCardRectangled({ product }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="w-60 h-40 rounded-xl ml-2">
                <img
                    src={product.image}
                    className="w-full h-[inherit] rounded-[inherit] cursor-pointer hover:scale-95 transition-all duration-300 ease-linear " />
            </div>
            <p className="font-[600] text-black ml-2 text-center">{product.title}</p>
        </div>
    );
}