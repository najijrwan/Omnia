import { useState, useRef } from 'react';
import CategoryScroller from './CategoryScroller';

export default function CategoriesWithDetails({ categories }) {
    const [hoveredCategory, setHoveredCategory] = useState("Electronics"); // default category
    const [lockDisplay, setLockDisplay] = useState(true); // control to persist main on hover
    const subScrollRef = useRef();


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
                    className="bg-main absolute w-full h-[50vh] rounded-b-3xl flex p-4 gap-3 shadow-2xl overflow-hidden">

                    {/* Subcategories Scroller */}
                    <div className="relative w-full">
                        <button
                            onClick={() => subScrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-base-1 to-transparent px-2 h-full z-30"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>

                        <button
                            onClick={() => subScrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-base-1 to-transparent px-2 h-full z-30"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6" /></svg>
                        </button>

                        <div
                            ref={subScrollRef}
                            className="flex overflow-x-auto  gap-3 px-8 scroll-smooth hide-scrollbar h-full"
                        >
                            {currentCategory.subcategories.map(sub => (
                                <section key={sub.title} className="bg-base-2 rounded-xl p-4 w-[150px] shrink-0">
                                    <h2 className="text-lg font-semibold text-secondary mb-2">{sub.title}</h2>
                                    <ul className="ml-4 list-disc text-main space-y-1">
                                        {sub.items.map(item => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </section>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className='bg-base-1 w-[300px] rounded-xl p-4 flex-shrink-0'>
                        <img src={currentCategory.image} alt={currentCategory.title} className="rounded-lg object-cover w-full h-32" />
                        <h1 className="text-2xl font-bold text-secondary mt-4">{currentCategory.title}</h1>
                        <p className="text-secondary/70 mt-2 text-sm">{currentCategory.description}</p>
                    </aside>
                </main>
            )}
        </nav>
    );
}
