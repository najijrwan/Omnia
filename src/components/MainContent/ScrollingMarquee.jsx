export default function ScrollingMarquee({ title }) {

    return (
        <section className="p-2 mx-2 bg-sections rounded-lg border border-classic">
            <header className='flex items-center justify-between'>
                <h2 className="text-2xl font-semibold text-base-1">{title}</h2>
            </header>

            <div className="overflow-hidden whitespace-nowrap">
                <div className="inline-flex animate-marquee space-x-12">
                    <img src="/brands/addidas.jpg" alt="addidas" className="h-12 opacity-70 hover:opacity-100"/>              
                    <img src="/brands/addidas.jpg" alt="addidas" className="h-12 opacity-70 hover:opacity-100"/>              
                    <img src="/brands/addidas.jpg" alt="addidas" className="h-12 opacity-70 hover:opacity-100"/>              
                    <img src="/brands/addidas.jpg" alt="addidas" className="h-12 opacity-70 hover:opacity-100"/>              
                    <img src="/brands/addidas.jpg" alt="addidas" className="h-12 opacity-70 hover:opacity-100"/>              
                    <img src="/brands/addidas.jpg" alt="addidas" className="h-12 opacity-70 hover:opacity-100"/>              
                    <img src="/brands/addidas.jpg" alt="addidas" className="h-12 opacity-70 hover:opacity-100"/>              
                    <img src="/brands/addidas.jpg" alt="addidas" className="h-12 opacity-70 hover:opacity-100"/>              
                    <img src="/brands/addidas.jpg" alt="addidas" className="h-12 opacity-70 hover:opacity-100"/>              
                    <img src="/brands/addidas.jpg" alt="addidas" className="h-12 opacity-70 hover:opacity-100"/>              
                    <img src="/brands/addidas.jpg" alt="addidas" className="h-12 opacity-70 hover:opacity-100"/>              
                    <img src="/brands/addidas.jpg" alt="addidas" className="h-12 opacity-70 hover:opacity-100"/>              
                    <img src="/brands/addidas.jpg" alt="addidas" className="h-12 opacity-70 hover:opacity-100"/>              
                    <img src="/brands/addidas.jpg" alt="addidas" className="h-12 opacity-70 hover:opacity-100"/>              
                </div>
            </div>
        </section >
    );
}