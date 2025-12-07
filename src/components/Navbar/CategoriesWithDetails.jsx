import { useState, useRef, useEffect } from 'react';
import CategoryScroller from './CategoryScroller';
import { Link } from 'lucide-react';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategoriesWithDetails({ categories, overlayVisible, setOverlayVisible }) {
    const [hoveredCategory, setHoveredCategory] = useState("Electronics");
    const [lockDisplay, setLockDisplay] = useState(true);
    const subScrollRef = useRef();


    const currentCategory = categories.find(cat => cat.title === hoveredCategory);

    const handleEnter = () => setLockDisplay(true);
    const handleLeave = () => {
        setLockDisplay(false);
        setHoveredCategory(null);
    };

    useEffect(() => {
        if (lockDisplay && currentCategory) {
            setOverlayVisible(true);
        } else {
            setOverlayVisible(false);
        }
    }, [lockDisplay, currentCategory]);


    return (
        <nav
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="
                relative hidden md:block bg-main border-b border-b-secondary/30 z-20">

            <CategoryScroller
                categories={categories}
                onHoverCategory={(title) => {
                    if (title) setHoveredCategory(title);
                }}
                activeCategory={hoveredCategory}
            />

            {currentCategory && lockDisplay && (
                <main
                    className="bg-main absolute w-full h-[70vh] rounded-b-3xl p-4 flex gap-10 shadow-2xl overflow-hidden">

                    {/* Subcategories Scroller */}
                    <div className="relative w-[515px] h-full flex justify-start items-start flex-grow lg:w-[670px] xl:w-[820px] 2xl:w-full!">
                        {currentCategory.subcategories.length > 3 && (
                            <button
                                onClick={() => subScrollRef.current?.scrollBy({ left: -153, behavior: 'smooth' })}
                                className="text-base-1 ml-5 rounded-full p-2 z-30 cursor-pointer hover:bg-base-1 hover:text-main transition-all duration-300 ease-in-out"
                            >
                                <ChevronLeft />
                            </button>
                        )}

                        <div
                            ref={subScrollRef}
                            className="flex overflow-x-auto gap-3 scroll-smooth hide-scrollbar h-full"
                        >
                            {currentCategory.subcategories.map(sub => (
                                <section key={sub.title} className="px-2 h-full shrink-0">
                                    <h2 className="font-semibold text-base-1 text-[14px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] break-words mb-2">{sub.title}</h2>
                                    <ul className="text-main space-y-1">
                                        {sub.items.map(item => (
                                            <li key={item}>
                                                <a href="#" className='cursor-pointer hover:text-base-1 flex items-center gap-1'>
                                                    <Link size={15} />
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            ))}
                        </div>
                        {currentCategory.subcategories.length > 3 && (
                            <button
                                onClick={() => subScrollRef.current?.scrollBy({ left: 153, behavior: 'smooth' })}
                                className="text-base-1 ml-5 rounded-full p-2 z-30 cursor-pointer hover:bg-base-1 hover:text-main transition-all duration-300 ease-in-out"
                            >
                                <ChevronRight />
                            </button>
                        )}

                    </div>

                    {/* Sidebar */}
                    <aside className='text-center '>
                        <img src={currentCategory.image} alt={currentCategory.title} className="rounded-xl max-h-[300px]" />
                        <h1 className="text-2xl font-bold text-base-1 mt-2">{currentCategory.title}</h1>
                    </aside>
                </main>
            )}
        </nav>
    );
}
