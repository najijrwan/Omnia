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
                    className="bg-main absolute w-full h-[70vh] rounded-b-3xl flex p-4 gap-3 shadow-2xl overflow-hidden">

                    {/* Subcategories Scroller */}
                    <div className="relative w-[515px] h-full flex justify-start items-center lg:w-[670px] xl:w-[820px] 2xl:w-full!">
                        {currentCategory.subcategories.length > 3 && (
                            <button
                                onClick={() => subScrollRef.current?.scrollBy({ left: -153, behavior: 'smooth' })}
                                className="bg-base-1 border border-gray-600/50 px-px h-[50px] z-30 2xl:hidden"
                            >
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                        )}

                        <div
                            ref={subScrollRef}
                            className="flex overflow-x-auto gap-3 px-2 scroll-smooth hide-scrollbar h-full"
                        >
                            {currentCategory.subcategories.map(sub => (
                                <section key={sub.title} className="p-4 w-[140px] h-full shrink-0">
                                    <h2 className="font-semibold text-base-1 text-[14px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] break-words mb-2">{sub.title}</h2>
                                    <ul className="text-secondary space-y-1">
                                        {sub.items.map(item => (
                                            <li key={item} className='list-disc hover:text-base-1'><a href="#" className='cursor-pointer hover:text-base-1'>{item}</a></li>
                                        ))}
                                    </ul>
                                </section>
                            ))}
                        </div>
                        {currentCategory.subcategories.length > 3 && (
                            <button
                                onClick={() => subScrollRef.current?.scrollBy({ left: 153, behavior: 'smooth' })}
                                className="bg-base-1 border border-gray-600/50 px-px h-[50px] z-30 2xl:hidden"
                            >
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        )}

                    </div>

                    {/* Sidebar */}
                    <aside className='w-[30%] border-secondary border rounded-xl p-4 flex-shrink-0 ml-auto'>
                        <img src={currentCategory.image} alt={currentCategory.title} className="rounded-lg object-cover w-full" />
                        <h1 className="text-2xl font-bold text-base-1 mt-4">{currentCategory.title}</h1>
                        <p className="text-secondary/70 mt-2 text-sm">{currentCategory.description}</p>
                    </aside>
                </main>
            )}
        </nav>
    );
}
