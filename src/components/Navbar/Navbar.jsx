//Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/navBar/categories";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import CategoriesWithDetails from './CategoriesWithDetails';

import { CircleUserRound, Search, Menu, ShoppingCart, Heart } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <>
      <header className="relative bg-secondary px-4 py-3 flex items-center sm:justify-around sm:gap-10 text-white z-30">
        <div className="flex items-center gap-5">
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {/* menu icon svg */}
            <Menu className="text-base-1" />
          </button>
          <div className='relative flex items-center h-11'>
            <Link to="/" className="font-bold text-xl text-base-1 block"><i>Omnia</i></Link>
          </div>
        </div>

        <SearchBar searchOpen={searchOpen} setSearchOpen={setSearchOpen} />

        <div className="flex items-center gap-4 ml-auto sm:ml-0">
          {/* Insert IconButton here or inline svg as needed */}
          <button onClick={() => setSearchOpen(!searchOpen)} className="sm:hidden">
            {/* search icon svg */}
            <Search className="text-base-1" />
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
        </div>
      </header>

      <CategoriesWithDetails
        categories={categories}
        overlayVisible={overlayVisible}
        setOverlayVisible={setOverlayVisible} />

      {(menuOpen || searchOpen || overlayVisible) && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-white/10 z-10 backdrop-blur-[6px]"
          onClick={() => {
            setMenuOpen(false);
            setSearchOpen(false);
            setOverlayVisible(false);
          }}
        />
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
