//Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/navBar/categories";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import CategoriesWithDetails from './CategoriesWithDetails';
import { ShoppingCart, CircleUserRound, Bookmark } from 'lucide-react';

import { Menu } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <>
      <header className="
      relative h-[65px] bg-main py-3 px-2 2xl:px-40 flex flex-row justify-center items-center gap-7 md:gap-5 lg:gap-0 text-white border-b border-base-2/50 transition-all ease-in-out duration-500">

        <Link to="/" className="font-bold text-xl text-base-1 hover:opacity-70 mr-auto md:ml-3"><i>Omnia</i></Link>
<SearchBar />
        <ul className="hidden h-full lg:flex absolute items-center gap-7 text-base-1 font-extrabold">
          <li className="flex items-center cursor-pointer hover:border-b-base-1 hover:border-b-2 box-border"><span>About</span></li>
          <li>Support</li>
          <li>Follow Us</li>
          <li>Company</li>
        </ul>

        

        <ul className='hidden md:flex ml-2  text-base-1 font-extrabold'>
          <li><button className="p-1.5 rounded-full hover:bg-base-1/30 cursor-pointer transition-all ease-in-out duration-150"><Bookmark className='inline size-7' /></button></li>
          <li><button className="p-1.5 rounded-full hover:bg-base-1/30 cursor-pointer transition-all ease-in-out duration-150"><ShoppingCart className='inline size-7' /></button></li>
          <li><button className="p-1.5 rounded-full hover:bg-base-1/30 cursor-pointer transition-all ease-in-out duration-150"><CircleUserRound className='inline size-7' /></button></li>
        </ul>

        <button className="lg:hidden md:mr-3" onClick={() => setMenuOpen(!menuOpen)}>
          {/* menu icon svg */}
          <Menu className="text-base-1 size-7" />
        </button>

      </header>

      <CategoriesWithDetails
        categories={categories}
        overlayVisible={overlayVisible}
        setOverlayVisible={setOverlayVisible} />

      {(menuOpen) && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-white/10 z-20 backdrop-blur-[7px]"
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
