import { useState } from 'react';
import CategoryScroller from './CategoryScroller';

export default function CategoriesWithDetails({ categories }) {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [lockDisplay, setLockDisplay] = useState(false); // control to persist main on hover

    const currentCategory = categories.find(cat => cat.title === hoveredCategory);

    const handleEnter = () => setLockDisplay(true);
    const handleLeave = () => {
        setLockDisplay(false);
        setHoveredCategory(null);
    };

    return (
        <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <CategoryScroller
                categories={categories}
                onHoverCategory={(title) => {
                    if (title) setHoveredCategory(title);
                }}
            />

            {currentCategory && lockDisplay && (
                <main className="grid gap-6 p-4 bg-main [grid-template-columns:repeat(auto-fit,minmax(150px,150px))]">
                    {currentCategory.subcategories.map(sub => (
                        <section key={sub.title} className="bg-secondary rounded-xl p-4">
                            <h2 className="text-lg font-semibold text-base-1 mb-2">{sub.title}</h2>
                            <ul className="ml-4 list-disc text-base-2 space-y-1">
                                {sub.items.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </main>
            )}
        </div>
    );
}
