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
        <nav
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="
                relative hidden md:block bg-main border-b border-b-secondary/30">

            <CategoryScroller
                categories={categories}
                onHoverCategory={(title) => {
                    if (title) setHoveredCategory(title);
                }}
            />

            {currentCategory && lockDisplay && (
                <main
                    className="
                        grid gap-1 p-4 bg-main [grid-template-columns:repeat(auto-fit,minmax(150px,150px))] justify-center items-center 
                        absolute w-full h-[60vh]">
                    {currentCategory.subcategories.map(sub => (
                        <section key={sub.title} className="bg-base-2 rounded-xl p-4">
                            <h2 className="text-lg font-semibold text-secondary mb-2">{sub.title}</h2>
                            <ul className="ml-4 list-disc text-main space-y-1">
                                {sub.items.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </main>
            )}
        </nav>
    );
}
