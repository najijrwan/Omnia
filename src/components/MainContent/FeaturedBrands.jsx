export default function FeaturedBrands({ title }) {

    return (
        <section className="py-2 mx-2 bg-sections rounded-lg border border-classic">
            <header className='flex items-center justify-between mx-2'>
                <h2 className="text-2xl font-semibold text-base-1">{title}</h2>
                <button className="text-main bg-base-1 py-1 px-3 rounded-lg hover:text-base-1 hover:bg-main cursor-pointer transiton-all duration-300 ease-in-out">
                    <span>Explore By Brand</span>
                </button>
            </header>

            <div className="group mt-6 overflow-hidden mb-6">
                <div className="flex brand-track animate-marquee space-x-8 w-max">
                    <img src="/brands/addidas.jpg" alt="addidas" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/chanel.jpeg" alt="chanel" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/dior.JPG" alt="dior" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/gucci.png" alt="gucci" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/louis-vuitton.png" alt="louis-vuitton" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/nike.jpg" alt="nike" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/prada.png" alt="prada" className="h-30 cursor-pointer rounded-xl bg-white hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/zara.jpg" alt="zara" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/apple.jpeg" alt="apple" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/lenovo.webp" alt="lenovo" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/oneplus.webp" alt="oneplus" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/oppo.avif" alt="oppo" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/realme.webp" alt="realme" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/samsung.jpg" alt="samsung" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/xiaomi.jpeg" alt="xiaomi" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />

                    <img src="/brands/addidas.jpg" alt="addidas" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/chanel.jpeg" alt="chanel" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/dior.JPG" alt="dior" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/gucci.png" alt="gucci" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/louis-vuitton.png" alt="louis-vuitton" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/nike.jpg" alt="nike" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/prada.png" alt="prada" className="h-30 cursor-pointer rounded-xl bg-white hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/zara.jpg" alt="zara" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/apple.jpeg" alt="apple" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/lenovo.webp" alt="lenovo" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/oneplus.webp" alt="oneplus" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/oppo.avif" alt="oppo" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/realme.webp" alt="realme" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/samsung.jpg" alt="samsung" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                    <img src="/brands/xiaomi.jpeg" alt="xiaomi" className="h-30 cursor-pointer rounded-xl bg-black hover:scale-90 transition-all duration-300 ease-in-out" />
                </div>
            </div>
        </section >
    );
}