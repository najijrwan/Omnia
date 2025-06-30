//Sidebar.jsx
import { ChevronDown, X } from 'lucide-react';
export default function Sidebar({ categories, menuOpen, activeCategory, setActiveCategory, setMenuOpen }) {
    const handleClick = (title) => {
        setActiveCategory((prev) => (prev === title ? null : title));
    };

    return (
        <div className={`fixed top-0 left-0 h-full w-[70vw] bg-secondary transition-all duration-300 ease-in-out z-30 overflow-y-scroll ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <button onClick={() => setMenuOpen(false)} className='absolute right-2 top-2'>
                <X className='text-main' />
            </button>
            <ul className="flex flex-col p-4 gap-4 mt-6">
                {categories.map((category) => (

                    <li key={category.title}>
                        <button className="flex w-full items-center justify-between" onClick={() => handleClick(category.title)}>
                            <p className="font-semibold text-base-1">{category.title}</p>
                            <ChevronDown className={`transition-transform text-base-1 ${activeCategory === category.title ? "rotate-180 text-base-2" : ""}`} />
                        </button>

                        {activeCategory === category.title && (
                            <div className="mt-2 pl-4 flex flex-col gap-3">
                                <aside className='border-base-1 w-[70%] border rounded-lg flex-shrink-0 '>
                                    <div className='border-b border-b-base-1'>
                                        <img src={category.image} alt={category.title} className="rounded-tr-lg rounded-tl-lg object-cover size-full" />
                                    </div>
                                    <p className="text-secondary bg-main rounded-br-[inherit] rounded-bl-[inherit] text-sm p-2">{category.description}</p>
                                </aside>
                                {category.subcategories.map((sub) => (
                                    <div key={sub.title}>
                                        <p className="font-[300] text-main">{sub.title}</p>
                                        <ul className="list-disc pl-5 text-base-2">
                                            {sub.items.map((item) => (
                                                <li key={item} className="underline">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
