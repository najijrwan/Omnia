import { Search } from 'lucide-react';
export default function SearchBar() {
    return (
        <div className='
        relative w-full ml-10 max-w-md rounded-lg 
        '
        >
            <input
                type="text"
                placeholder="What do you wish to find?"
                onClick={e => e.stopPropagation()}
                className="
                    w-full h-10 pl-10 rounded-[inherit] border border-secondary bg-main placeholder-secondary focus:placeholder-transparent focus:outline-none"
            />
            <Search className="absolute top-1.5 left-1.5 text-base-1" strokeWidth={3} />
        </div>
    );
}
