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
        <header className="">
            <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white to-transparent px-2 h-full">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6" /></svg>
            </button>

            <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-base-1 to-transparent px-2 h-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6" /></svg>
            </button>

            <nav ref={scrollRef} className="flex overflow-x-auto whitespace-nowrap hide-scrollbar scroll-smooth mx-9">
                {categories.map((category) => (
                    <button
                        key={category.title}
                        onMouseEnter={() => onHoverCategory(category.title)}
                        onMouseLeave={() => onHoverCategory(null)}
                        className={`text-sm font-bold border-b-[4px] cursor-pointer transition py-2 px-4
    ${activeCategory === category.title ? 'text-base-1 border-b-base-1' : 'text-secondary border-transparent hover:text-base-1 hover:border-b-base-1'}
  `}
                    >
                        {category.title}
                    </button>

                ))}
            </nav>
        </header>
    );
}
