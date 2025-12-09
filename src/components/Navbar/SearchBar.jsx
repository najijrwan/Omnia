import { Search } from 'lucide-react';
export default function SearchBar() {
    return (
        <div className='
        relative w-full md:max-w-[400px] mx-auto lg:mx-0! lg:w-[120px] rounded-lg
        '
        >
            <input
                type="text"
                placeholder="Search"
                onClick={e => e.stopPropagation()}
                className="
                    w-full h-10 pl-10 rounded-[inherit] border text-secondary border-base-1 bg-main placeholder-secondary focus:placeholder-transparent focus:outline-none
                    hover:bg-base-1/10 transition-all ease-in-out duration-150"
            />
            <Search className="absolute top-1.5 left-1.5 text-base-1" strokeWidth={3} />
        </div>
    );
}
