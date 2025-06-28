export default function Hero() {
    return (
        <section className="w-full bg-gradient-to-r from-base-1 via-secondary to-base-2 text-white py-16 px-8 flex flex-col items-center text-center rounded-lg shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to DemoShop
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-xl">
                Discover the best deals on electronics, fashion, and more. Everything is demo — but it looks real!
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
                Shop Now
            </button>
        </section>
    );
}
