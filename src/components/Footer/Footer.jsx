import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";
import FooterNewsletter from "./FooterNewsletter";
import FooterInfo from "./FooterInfo";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6 px-6 mt-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                <FooterNewsletter />
                <FooterLinks />
                <FooterSocials />
                <FooterInfo />
            </div>

            <div className="text-center text-gray-400 text-xs mt-10">
                © {new Date().getFullYear()} DemoShop. Built for practice and learning.
            </div>
        </footer>
    );
}
