//CategoryScroller.jsx
import { useRef } from 'react';

export default function CategoryScroller({ categories, onHoverCategory, activeCategory }) {
    const scrollRef = useRef();

    const scroll = (dir) => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
    };

    return (
        <header className="px-2 bg-black/20">
            <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 h-fit p-2 bg-base-1/20 hover:bg-base-1/15 active:scale-90 transition-all duration-200 ease-in-out shadow-[0_0_3px_rgba(0,0,0,0.2)] cursor-pointer">
                <svg className="size-6 text-base-1 drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6" /></svg>
            </button>

            <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 px-2 h-full cursor-pointer">
                <svg className="size-6 text-base-1 drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6" /></svg>
            </button>

            <nav ref={scrollRef} className="flex overflow-x-auto whitespace-nowrap hide-scrollbar scroll-smooth mx-9">
                {categories.map((category) => (
                    <button
                        key={category.title}
                        onMouseEnter={() => onHoverCategory(category.title)}
                        onMouseLeave={() => onHoverCategory(null)}
                        className={`
                            text-sm text-center font-bold cursor-pointer transition py-2 px-4 
                            ${activeCategory === category.title ? 'text-base-1' : 'text-white'}`}
                    >
                        {category.title}
                    </button>

                ))}
            </nav>
        </header>
    );
}
