import { testimonials } from "../../data/testimonials";
export default function Testimonials() {
    return (
        <section className="px-4 py-12 bg-white text-center">
            <h2 className="text-2xl font-semibold mb-8">What Our Visitors Say</h2>
            <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
                {testimonials.map((t) => (
                    <div
                        key={t.id}
                        className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
                    >
                        <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-16 h-16 rounded-full mx-auto mb-4"
                        />
                        <p className="text-gray-700 italic mb-2">"{t.quote}"</p>
                        <p className="font-medium text-sm text-gray-900">{t.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}