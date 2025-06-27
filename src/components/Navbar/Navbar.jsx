import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/categories";
import SearchBar from "./SearchBar";
import CategoryScroller from "./CategoryScroller";
import Sidebar from "./Sidebar";
import { CircleUserRound, Search, Menu, ShoppingCart, Heart } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <>
      <nav className="bg-secondary px-4 py-3 flex items-center sm:justify-around sm:gap-10 text-white z-10">
        <div className='relative mr-15 md:mr-6 flex'>
          <img src="/Omnia.png" alt="Omnia" className='size-11 top-0 left-0' />
          <Link to="/" className="font-bold text-xl flex justify-start items-center text-base-1"><i>Omnia</i></Link>
        </div>

        <SearchBar searchOpen={searchOpen} setSearchOpen={setSearchOpen} />

        <div className="flex items-center gap-4 ml-auto sm:ml-0">
          {/* Insert IconButton here or inline svg as needed */}
          <button onClick={() => setSearchOpen(!searchOpen)} className="sm:hidden">
            {/* search icon svg */}
            <Search className="text-base-1"/>
          </button>
          {/* cart, heart, user, menu icons */}
          <button>
            <ShoppingCart className="text-base-1" />
          </button>
          <button>
            <Heart className="text-base-1" />
          </button>
          <button>
            <CircleUserRound className="text-base-1" />
          </button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {/* menu icon svg */}
            <Menu className="text-base-1" />
          </button>
        </div>
      </nav>

      <CategoryScroller categories={categories} />

      {(menuOpen || searchOpen) && (
        <div className="fixed top-0 left-0 w-full h-full bg-black z-10 opacity-50" onClick={() => {
          setMenuOpen(false);
          setSearchOpen(false);
        }} />
      )}

      <Sidebar
        categories={categories}
        menuOpen={menuOpen}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setMenuOpen={setMenuOpen}
      />
    </>
  );
}
