//Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/navBar/categories";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import CategoriesWithDetails from './CategoriesWithDetails';
import { ShoppingCart, CircleUserRound, Bookmark, Search } from 'lucide-react';

import { Menu } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <>
      <header className="
      relative bg-main py-3 px-2 2xl:px-40 flex flex-row justify-between items-center md:gap-5 text-white transition-all ease-in-out duration-500">

        <Link to="/" className="font-bold text-xl text-base-1 hover:opacity-70">
          <i>Omnia</i>
        </Link>

        {/* <div className="xl:mr-auto flex items-center gap-5">
          <Link to="/" className="font-bold text-xl text-base-1 hover:opacity-70"><i>Omnia</i></Link>

          <button className="hidden xl:block font-bold text-xl text-base-1 hover:opacity-70 cursor-pointer"><span>Categories</span></button>
        </div> */}

        <ul className="hidden lg:flex h-full absolute items-center gap-7 text-base-1 font-extrabold">
          <li className="flex items-center cursor-pointer hover:border-b-base-1 hover:border-b-2 box-border"><span>About</span></li>
          <li className="flex items-center cursor-pointer hover:border-b-base-1 hover:border-b-2 box-border"><span>Support</span></li>
          <li className="flex items-center cursor-pointer hover:border-b-base-1 hover:border-b-2 box-border"><span>Follow Us</span></li>
          <li className="flex items-center cursor-pointer hover:border-b-base-1 hover:border-b-2 box-border"><span>Copmany</span></li>
        </ul>

        <ul className="flex items-center justify-center gap-2 py-1.5 px-2.5 rounded-2xl backdrop-blur-3xl bg-base-1/20 border border-base-1/20 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <li className="lg:hidden ">
            <button className="py-2 px-3 size-fit rounded-xl bg-base-1/5 hover:bg-base-1/15 active:scale-90 transition-all duration-200 ease-in-out shadow-[0_0_3px_rgba(0,0,0,0.2)] cursor-pointer">
              <Search className="size-6 text-base-1/90 drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]" />
            </button>
          </li>
          <li className="flex items-center">
            <button className="py-2 px-3 rounded-xl bg-base-1/5 hover:bg-base-1/15 active:scale-90 transition-all duration-200 ease-in-out shadow-[0_0_3px_rgba(0,0,0,0.2)] cursor-pointer">
              <Bookmark className="size-6 text-base-1/90 drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]" />
            </button>
          </li>
          <li className="flex items-center">
            <button className="py-2 px-3 rounded-xl bg-base-1/5 hover:bg-base-1/15 active:scale-90 transition-all duration-200 ease-in-out shadow-[0_0_3px_rgba(0,0,0,0.2)] cursor-pointer">
              <ShoppingCart className="size-6 text-base-1/90 drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]" />
            </button>
          </li>
          <li className="flex items-center">
            <button className="py-2 px-3 rounded-xl bg-base-1/5 hover:bg-base-1/15 active:scale-90 transition-all duration-200 ease-in-out shadow-[0_0_3px_rgba(0,0,0,0.2)] cursor-pointer">
              <CircleUserRound className="size-6 text-base-1/90 drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]" />
            </button>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden flex items-center justify-center
            size-auto p-[13px] rounded-[16px] 
            text-base-1 bg-base-1/20 border border-base-1/30
            backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.15)]
            transition-all duration-200 ease-in-out
            hover:bg-base-1/20 hover:shadow-[0_0_12px_rgba(0,0,0,0.25)]
            active:scale-95 active:shadow-inner"
        >
          <Menu className="size-6 transition-transform duration-300 ease-in-out" />
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
