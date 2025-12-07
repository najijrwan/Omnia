//Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/navBar/categories";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import CategoriesWithDetails from './CategoriesWithDetails';

import { Menu } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <>
      <header className="relative bg-main px-4 py-3 flex items-center sm:justify-around sm:gap-10 text-white border-b border-base-2/50 z-30">
        <div className="flex items-center gap-2">
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {/* menu icon svg */}
            <Menu className="text-base-1" />
          </button>
          <div className='relative flex items-center h-11'>
            <Link to="/" className="font-bold text-xl text-base-1 block"><i>Omnia</i></Link>
          </div>
        </div>

        <SearchBar />

      </header>

      <CategoriesWithDetails
        categories={categories}
        overlayVisible={overlayVisible}
        setOverlayVisible={setOverlayVisible} />

      {(menuOpen || overlayVisible) && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-white/10 z-10 backdrop-blur-[6px]"
          onClick={() => {
            setMenuOpen(false);
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
