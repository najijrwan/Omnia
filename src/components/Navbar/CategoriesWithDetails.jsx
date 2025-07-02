import { useState, useRef, useEffect } from 'react';
import CategoryScroller from './CategoryScroller';
import { Link } from 'lucide-react';

export default function CategoriesWithDetails({ categories, overlayVisible, setOverlayVisible }) {
    const [hoveredCategory, setHoveredCategory] = useState("Electronics"); // default category
    const [lockDisplay, setLockDisplay] = useState(true); // control to persist main on hover
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
    }, [lockDisplay, currentCategory]); // ✅ correct: no trailing comma


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
                    className="bg-secondary border-b border-b-base-1 absolute w-full h-[70vh] rounded-b-3xl p-4 flex gap-10 shadow-2xl overflow-hidden">

                    {/* Subcategories Scroller */}
                    <div className="relative w-[515px] h-full flex justify-start items-start flex-grow lg:w-[670px] xl:w-[820px] 2xl:w-full!">
                        {currentCategory.subcategories.length > 3 && (
                            <button
                                onClick={() => subScrollRef.current?.scrollBy({ left: -153, behavior: 'smooth' })}
                                className="bg-base-1 mr-5 rounded-full p-1 z-30 cursor-pointer hover:bg-base-1/70"
                            >
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
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
                                className="bg-base-1 ml-5 rounded-full p-1 z-30 cursor-pointer hover:bg-base-1/70"
                            >
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        )}

                    </div>

                    {/* Sidebar */}
                    <aside className='flex flex-col ml-auto w-[300px] gap-1'>
                        <img src={currentCategory.image} alt={currentCategory.title} className="rounded-xl max-w-[300px] w-full" />
                        <h1 className="text-2xl font-bold text-base-1 ml-1">{currentCategory.title}</h1>
                        <p className="text-secondary/70 text-sm ml-1">{currentCategory.description}</p>
                    </aside>
                </main>
            )}
        </nav>
    );
}
