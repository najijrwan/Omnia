//Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/navBar/categories";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import CategoriesWithDetails from './CategoriesWithDetails';
import { Search, Bookmark, ShoppingCart, CircleUserRound, ArrowRightFromLine } from 'lucide-react';

import { Menu } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <>
      <header className="
      relative 
      flex flex-row-reverse lg:flex-row justify-between items-center lg:justify- 
      py-3 px-2 xs:px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-24! 
      text-white bg-main 
      transition-all ease-in-out duration-500"
      >

        <div className="
          flex flex-row-reverse items-center gap-3
          font-bold text-base-1 text-xl"
        >
          <ul className="
          flex flex-row-reverse items-center justify-center 
          gap-2 py-1.5 px-2.5 
          rounded-2xl backdrop-blur-3xl bg-base-1/20
          border border-base-1/20 shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
          >
            <li className="">
              <SearchBar />
              <button className="2xl:hidden py-2 px-3 rounded-xl bg-base-1/5 hover:bg-base-1/15 active:scale-90 transition-all duration-200 ease-in-out shadow-[0_0_3px_rgba(0,0,0,0.2)] cursor-pointer">
                <Search className="size-5 text-base-1/90 drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]" />
              </button>
            </li>
            <li className="">
              <button className="py-2 px-3 rounded-xl bg-base-1/5 hover:bg-base-1/15 active:scale-90 transition-all duration-200 ease-in-out shadow-[0_0_3px_rgba(0,0,0,0.2)] cursor-pointer">
                <Bookmark className="size-5 text-base-1/90 drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]" />
              </button>
            </li>
            <li className="">
              <button className="py-2 px-3 rounded-xl bg-base-1/5 hover:bg-base-1/15 active:scale-90 transition-all duration-200 ease-in-out shadow-[0_0_3px_rgba(0,0,0,0.2)] cursor-pointer">
                <ShoppingCart className="size-5 text-base-1/90 drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]" />
              </button>
            </li>
            <li className="">
              <button className="py-2 px-3 rounded-xl bg-base-1/5 hover:bg-base-1/15 active:scale-90 transition-all duration-200 ease-in-out shadow-[0_0_3px_rgba(0,0,0,0.2)] cursor-pointer">
                <CircleUserRound className="size-5 text-base-1/90 drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]" />
              </button>
            </li>
          </ul>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
            flex items-center justify-center
            size-auto py-2.5 px-3.5 rounded-2xl 
            text-base-1 bg-base-1/20 border border-base-1/30
            backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.15)]
            transition-all duration-200 ease-in-out
            hover:bg-base-1/20 hover:shadow-[0_0_12px_rgba(0,0,0,0.25)]
            active:scale-95 active:shadow-inner"
          >
            <ArrowRightFromLine className="size-6 transition-transform duration-300 ease-in-out drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]" />
          </button>
        </div>

        <ul className="hidden absolute left-1/2 -translate-x-1/2 lg:flex h-full items-center justify-center gap-7 text-base-1 font-extrabold">
          <li className="flex items-center cursor-pointer hover:border-b-base-1 hover:border-b-2 box-border"><span>About</span></li>
          <li className="flex items-center cursor-pointer hover:border-b-base-1 hover:border-b-2 box-border"><span>Support</span></li>
          <li className="flex items-center cursor-pointer hover:border-b-base-1 hover:border-b-2 box-border"><span>Follow Us</span></li>
          <li className="flex items-center cursor-pointer hover:border-b-base-1 hover:border-b-2 box-border"><span>Copmany</span></li>
        </ul>

        <Link
          to="/"
          className="font-bold text-base-1 text-xl hover:opacity-70">
          <i>Omnia</i>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden flex items-center justify-center
            size-auto py-2.5 px-3.5 rounded-2xl 
            text-base-1 bg-base-1/20 border border-base-1/30
            backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.15)]
            transition-all duration-200 ease-in-out
            hover:bg-base-1/20 hover:shadow-[0_0_12px_rgba(0,0,0,0.25)]
            active:scale-95 active:shadow-inner"
        >
          <Menu className="size-6 transition-transform duration-300 ease-in-out drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]" />
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
