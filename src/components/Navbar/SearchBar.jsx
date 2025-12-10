import { Search } from 'lucide-react';
export default function SearchBar() {
    return (
        <div className="
            hidden 2xl:flex relative gap-3 w-[140px] h-[40px] md:max-w-[400px] mx-auto xl:mx-0 xl:w-[178px]
            rounded-full backdrop-blur-md bg-secondary/40 border border-base-1/20
            shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-200
            hover:bg-base-1/5"
        >
            <button className='h-full bg-secondary/10 hover:bg-secondary/30 text-base-1/80 px-2 rounded-full active:scale-90 transition-all duration-200 ease-in-out shadow-[0_0_3px_rgba(255,255,255,0.2)] cursor-pointer'>
                <Search
                    className="size-6 rounded-[inherit] drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]"
                    strokeWidth={2}
                />
            </button>
            <input
                type="text"
                placeholder="Search"
                onClick={(e) => e.stopPropagation()}
                className="
                    size-full
                    bg-transparent text-base-1/90 placeholder-base-1/60
                    hover:bg-base-1/5 focus:outline-none focus:placeholder-transparent transition-all duration-200 ease-in-out"
            />
        </div>

    );
}
