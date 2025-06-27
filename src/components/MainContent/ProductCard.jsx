//ProductsCard.jsx
export default function ProductCard({ product }) {
    return (
        <div className="border p-4 rounded-lg hover:shadow-lg transition bg-main">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <h3 className="mt-2 font-medium">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-2 bg-black text-white px-4 py-1 rounded hover:bg-gray-800">
                Add to Cart
            </button>
        </div>
    );
}
