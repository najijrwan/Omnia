import { socialLinks } from "../../data/footer/socialLinks";
export default function FooterSocials() {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <ul className="space-y-3 text-gray-400">
                {socialLinks.map((social) => (
                    <li key={social.name}>
                        <a href={social.href} className="flex items-center gap-2 hover:underline">
                            <span className="text-2xl">{social.icon}</span>
                            {social.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}