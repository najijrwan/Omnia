// MainContent.jsx
import ProductSection from "./ProductSection"
import Hero from "./Hero";
import NewsletterSignup from "./NewsletterSignup";
import PromotionBanner from "./PromotionBanner";
import HorizontalProductScroller from "./HorizontalProductScroller";
import Testimonials from "./Testimonials";

export default function MainContent() {
    return (
        <main className="flex flex-col">
            <Hero />
            <ProductSection title="demo title" />
            <PromotionBanner />
            <HorizontalProductScroller title="Recommended for You" />
            <Testimonials />
            <NewsletterSignup />
        </main>
    );
}
