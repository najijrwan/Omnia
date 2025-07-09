import { products } from "../../data/mainContent/products";
import { ProductCardRounded } from "./ProductCard";

export default function HorizontalProductScroller({ title = "Recommended for You" }) {
    return (
        <section className="px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <div className="overflow-x-auto">
                <div className="flex gap-4 w-max">
                    {products.map((product) => (
                        <div key={product.id} className="w-60 flex-shrink-0">
                            <ProductCardRounded product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
