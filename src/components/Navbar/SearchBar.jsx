import { Search } from 'lucide-react';
export default function SearchBar() {
    return (
        <div className="
  relative w-full h-[54px] md:max-w-[400px] mx-auto xl:mx-0 xl:w-[178px]
  rounded-2xl backdrop-blur-md bg-base-1/20 border border-base-1/20
  shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-200
  hover:bg-base-1/15
">
            <Search
                className="absolute top-1/2 left-3 -translate-y-1/2 size-5 text-base-1/80 drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]"
                strokeWidth={2.5}
            />
            <input
                type="text"
                placeholder="Search"
                onClick={(e) => e.stopPropagation()}
                className="
      w-full h-[54px] pl-10 pr-3 rounded-[inherit]
      bg-transparent text-base-1/90 placeholder-base-1/60
      focus:outline-none focus:ring-2 focus:ring-base-1/30
      focus:placeholder-transparent transition-all duration-200 ease-in-out
    "
            />
        </div>

    );
}
