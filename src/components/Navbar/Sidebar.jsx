//Sidebar.jsx
import { ChevronDown, X, ShoppingCart, CircleUserRound, Bookmark } from 'lucide-react';
import InstagramIcon from '../../assets/instagram.svg?react';
import FacebookIcon from '../../assets/facebook.svg?react';
import XIcon from '../../assets/x.svg?react';
import WhatsappIcon from '../../assets/whatsapp.svg?react';
export default function Sidebar({ categories, menuOpen, activeCategory, setActiveCategory, setMenuOpen }) {
    const handleClick = (title) => {
        setActiveCategory((prev) => (prev === title ? null : title));
    };

    return (
        <div className={`fixed top-0 left-0 h-full w-[70vw] bg-main transition-all duration-300 ease-in-out z-30 overflow-y-scroll ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <button onClick={() => setMenuOpen(false)} className='absolute left-4 top-3 size-12'>
                <X className='text-base-1 size-7' />
            </button>
            <ul className='flex gap-3 flex-row-reverse py-5 px-4 text-base-1'>
                <li><Bookmark className='inline mr-2 size-7' /></li>
                <li><ShoppingCart className='inline mr-2 size-7' /></li>
                <li><CircleUserRound className='inline mr-2 size-7' /></li>
            </ul>
            <div className='w-full h-px bg-secondary/30'></div>
            <ul className="flex flex-col">
                {categories.map((category) => (

                    <li key={category.title} className={`p-2.5 not-last:border-b border-secondary/10 ${activeCategory === category.title ? "bg-gray-50" : ""}`}>
                        <button className="flex w-full items-center justify-between " onClick={() => handleClick(category.title)}>
                            <p className="font-semibold text-base-1">{category.title}</p>
                            <ChevronDown className={`transition-transform text-base-1 ${activeCategory === category.title ? "rotate-180 text-secondary" : ""}`} />
                        </button>

                        {activeCategory === category.title && (
                            <div className="mt-2 pl-4 flex flex-col gap-3">
                                {category.subcategories.map((sub) => (
                                    <div key={sub.title}>
                                        <p className="font-[300] text-secondary">{sub.title}</p>
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

            <div className='w-full h-px bg-secondary/30 mx-auto'></div>

            <ul className='flex flex-row items-center justify-center p-4 gap-7 text-base-1 font-extrabold'>
                <InstagramIcon className="w-6 h-6 fill-pink-600" />
                <FacebookIcon className="w-6 h-6 fill-blue-500" />
                <XIcon className="w-6 h-6 fill-black" />
                <WhatsappIcon className="w-6 h-6 fill-[#25D366]" />
            </ul>

            <div className='w-[80%] h-px bg-secondary/30 mx-auto'></div>

        </div>
    );
}
