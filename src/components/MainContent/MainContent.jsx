// MainContent.jsx
import ProductSection from "./ProductSection"
import Hero from "./Hero";
import NewsletterSignup from "./NewsletterSignup";
import PromotionBanner from "./PromotionBanner";
import HorizontalProductScroller from "./HorizontalProductScroller";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

export default function MainContent() {
    return (
        <main className="flex flex-col gap-8">
            <Hero />
            <ProductSection title="demo title" />
            <PromotionBanner />
            <HorizontalProductScroller title="Recommended for You" />
            <WhyChooseUs />
            <Testimonials />
            <NewsletterSignup />
        </main>
    );
}
