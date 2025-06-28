export default function FooterNewsletter() {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
            <p className="text-gray-400 mb-4">
                Get the latest updates, offers, and demo-only deals.
            </p>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-2"
            >
                <input
                    type="email"
                    placeholder="Your email"
                    className="px-3 py-2 rounded text-black w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                    type="submit"
                    className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-300 transition"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
}
