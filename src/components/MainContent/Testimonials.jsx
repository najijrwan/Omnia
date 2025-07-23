import { testimonials } from "../../data/mainContent/testimonials";
export default function Testimonials({ title }) {
    return (
        <section className="p-2 mx-4 bg-sections rounded-lg border border-classic">
            <header className='flex items-center justify-between'>
                <h2 className="text-2xl font-semibold text-base-1">{title}</h2>
            </header>
            <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto my-6">
                {testimonials.map((t) => (
                    <div
                        key={t.id}
                        className="p-6 border border-classic rounded-lg shadow-xl hover:shadow-md transition"
                    >
                        <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-16 h-16 rounded-full mx-auto mb-4"
                        />
                        <p className="text-gray-700 italic mb-2">"{t.quote}"</p>
                        <p className="font-medium text-sm text-black">{t.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}