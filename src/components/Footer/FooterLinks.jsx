import { linksData } from "../../data/footer/linksData";
export default function FooterLinks() {
    return (
        <div className="grid grid-cols-3 gap-6">
            {linksData.map((section) => (
                <div key={section.title}>
                    <h4 className="text-lg font-semibold mb-3">{section.title}</h4>
                    <ul className="space-y-2 text-gray-400">
                        {section.links.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="hover:underline">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}