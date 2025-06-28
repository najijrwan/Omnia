export default function NewsletterSignup() {
    return (
        <section className="px-4 py-12 bg-gray-100 rounded-lg text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Stay in the Loop
            </h2>
            <p className="text-gray-700 mb-6">
                Subscribe to our demo newsletter and get updates on fake sales and new arrivals.
            </p>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded border w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                >
                    Subscribe
                </button>
            </form>
        </section>
    );
}
