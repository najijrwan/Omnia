import { features } from "../../data/mainContent/features";
export default function WhyChooseUs() {
    return (
        <section className="bg-gray-50 px-4 py-12">
            <h2 className="text-2xl font-semibold text-center mb-8">Why Choose Us?</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
                {features.map((item) => (
                    <div
                        key={item.id}
                        className="text-center border p-6 rounded-lg hover:shadow transition"
                    >
                        <div className="text-4xl mb-3">{item.icon}</div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}