import { Search } from 'lucide-react';
export default function SearchBar({ searchOpen, setSearchOpen }) {
    return (
        <div className={`
      fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-10 rounded-lg flex flex-grow z-20
      sm:block sm:static sm:top-0 sm:right-0 sm:translate-0 sm:w-full 
      ${searchOpen ? 'block' : 'hidden'}`}
        >
            <input
                type="text"
                placeholder="What do you wish to find?"
                onClick={e => e.stopPropagation()}
                className="
                    w-full h-10 pl-10 rounded-[inherit] border border-base-1 bg-secondary placeholder-main focus:placeholder-transparent focus:outline-none
                    sm:bg-main sm:text-secondary sm:placeholder-secondary"
            />
            <Search className="absolute top-1.5 left-1.5 text-base-1" strokeWidth={3} />
            <button className="text-secondary bg-base-1 absolute right-0 h-full px-5 rounded-tr-[inherit] rounded-br-[inherit] sm:hidden">
                Find
            </button>
        </div>
    );
}
