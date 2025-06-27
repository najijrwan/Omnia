// CategoriesWithDetails.jsx
import { useState } from 'react';
import CategoryScroller from './CategoryScroller';

export default function CategoriesWithDetails({ categories }) {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const currentCategory = categories.find(cat => cat.title === hoveredCategory);

    return (
        <div>
            <CategoryScroller categories={categories} onHoverCategory={setHoveredCategory} />

            <main className="p-4">
                {currentCategory?.subcategories.map(sub => (
                    <section key={sub.title} className="mb-6">
                        <h2 className="text-lg font-semibold text-base-1">{sub.title}</h2>
                        <ul className="ml-4 list-disc text-base-2">
                            {sub.items.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>
                ))}
            </main>
        </div>
    );
}
