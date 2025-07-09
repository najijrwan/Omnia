// MainContent.jsx
import NewArrivals from "./NewArrivals"
import Hero from "./Hero";
import TopSellers from "./TopSellers";
import NewsletterSignup from "./NewsletterSignup";
import PromotionBanner from "./PromotionBanner";
import HorizontalProductScroller from "./HorizontalProductScroller";
import Testimonials from "./Testimonials";

export default function MainContent() {
    return (
        <main className="flex flex-col gap-2">
            <Hero />
            <NewArrivals title="New Arrivals" />
            <PromotionBanner />
            <TopSellers title="Top Sellers"/>
            <HorizontalProductScroller title="Recommended for You" />
            <Testimonials />
            <NewsletterSignup />
        </main>
    );
}
