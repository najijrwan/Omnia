// MainContent.jsx
import Hero from "./Hero";
import NewArrivals from "./NewArrivals";
import PromotionBanner from "./PromotionBanner";
import TopSellings from "./TopSellings";
import NewsletterSignup from "./NewsletterSignup";
import HorizontalProductScroller from "./HorizontalProductScroller";
import Testimonials from "./Testimonials";

export default function MainContent() {
    return (
        <main className="flex flex-col gap-2">
            <Hero />
            <NewArrivals title="New Arrivals" />
            <PromotionBanner />
            <TopSellings title="Top Sellers" />
            <HorizontalProductScroller title="Recommended for You" />
            <Testimonials />
            <NewsletterSignup />
        </main>
    );
}
