export default function ScrollingMarquee({ title }) {

    return (
        <section className="p-2 mx-2 bg-sections rounded-lg border border-classic">
            <header className='flex items-center justify-between'>
                <h2 className="text-2xl font-semibold text-base-1">{title}</h2>
            </header>

            <div className="relative overflow-hidden whitespace-nowrap mt-6">
                <div className="flex animate-marquee space-x-12 w-[200%]">
                    <img src="/brands/addidas.jpg" alt="addidas" className="h-12" />
                    <img src="/brands/chanel.jpeg" alt="chanel" className="h-12" />
                    <img src="/brands/dior.JPG" alt="dior" className="h-12" />
                    <img src="/brands/gucci.png" alt="gucci" className="h-12" />
                    <img src="/brands/louis-vuitton.png" alt="louis-vuitton" className="h-12" />
                    <img src="/brands/nike.jpg" alt="nike" className="h-12" />
                    <img src="/brands/prada.png" alt="prada" className="h-12" />
                    <img src="/brands/zara.jpg" alt="zara" className="h-12" />
                    <img src="/brands/apple.jpeg" alt="apple" className="h-12" />
                    <img src="/brands/lenovo.webp" alt="lenovo" className="h-12" />
                    <img src="/brands/oneplus.webp" alt="oneplus" className="h-12" />
                    <img src="/brands/oppo.avif" alt="oppo" className="h-12" />
                    <img src="/brands/realme.webp" alt="realme" className="h-12" />
                    <img src="/brands/samsung.jpg" alt="samsung" className="h-12" />
                    <img src="/brands/xiaomi.jpeg" alt="xiaomi" className="h-12" />

                    <img src="/brands/addidas.jpg" alt="addidas" className="h-12" />
                    <img src="/brands/chanel.jpeg" alt="chanel" className="h-12" />
                    <img src="/brands/dior.JPG" alt="dior" className="h-12" />
                    <img src="/brands/gucci.png" alt="gucci" className="h-12" />
                    <img src="/brands/louis-vuitton.png" alt="louis-vuitton" className="h-12" />
                    <img src="/brands/nike.jpg" alt="nike" className="h-12" />
                    <img src="/brands/prada.png" alt="prada" className="h-12" />
                    <img src="/brands/zara.jpg" alt="zara" className="h-12" />
                    <img src="/brands/apple.jpeg" alt="apple" className="h-12" />
                    <img src="/brands/lenovo.webp" alt="lenovo" className="h-12" />
                    <img src="/brands/oneplus.webp" alt="oneplus" className="h-12" />
                    <img src="/brands/oppo.avif" alt="oppo" className="h-12" />
                    <img src="/brands/realme.webp" alt="realme" className="h-12" />
                    <img src="/brands/samsung.jpg" alt="samsung" className="h-12" />
                    <img src="/brands/xiaomi.jpeg" alt="xiaomi" className="h-12" />
                </div>
            </div>
        </section >
    );
}