import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    "Electronics",
    "Men's Fashion",
    "Women's Fashion",
    "Kid's Fashion",
    "Home & Kitchen",
    "Beauty & Fragrance",
    "Baby",
    "Toys",
    "Sports & Outdoors",
    "Health & Nutrition",
    "Automatice",
    "Stationary",
    "Books & Media",
    "food",
  ];

  return (
    <>
      <nav className="relative bg-[#84C7D0] px-4 py-3 flex items-center justify-center text-[#343330]">
        <Link to="/" className="font-bold text-xl absolute left-5">Omnia</Link>
        <div className="flex justify-end items-center gap-4 w-full">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search-icon lucide-search text-white">
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu-icon lucide-menu text-white">
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`
          fixed top-0 right-0 h-full w-[70vw] bg-red-900 
          transition-all duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='absolute right-2 top-2'>
          <svg xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-x-icon lucide-x text-white">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <div>
          <ul className="flex flex-col p-4 gap-4">
            <li><Link to="/registration">Sign Up</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
          </ul>
        </div>
        <div className="w-full h-px bg-black"></div>
        <div>{/* Additional links can go here */}</div>
      </div>

      <nav className="hidden bg-[#75DDDD] text-white md:flex justify-center items-center gap-5 py-2">
        {/* Main desktop links can go here */}
      </nav>
    </>
  );
}
