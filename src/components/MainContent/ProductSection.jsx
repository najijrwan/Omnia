// PorductSection.jsx
import ProductCard from './ProductCard';
import { products } from '../../data/mainContent/products';

export default function ProductSection({ title }) {
  return (
    <section className="px-4 py-8">
      <h2 className="text-2xl font-semibold text-base-1 mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
