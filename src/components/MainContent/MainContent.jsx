// MainContent.jsx
import Hero from "./Hero";
import NewArrivals from "./NewArrivals";
import PromotionBanner from "./PromotionBanner";
import TopSellings from "./TopSellings";
import FeaturedBrands from "./FeaturedBrands";
import MaximiseYourSavings from "./MaximiseYourSavings";
import NewsletterSignup from "./NewsletterSignup";
import HorizontalProductScroller from "./HorizontalProductScroller";
import Testimonials from "./Testimonials";

export default function MainContent() {
    return (
        <main className="flex flex-col gap-2">
            <Hero />
            <NewArrivals title="New Arrivals" />
            <PromotionBanner />
            <TopSellings title="Top Sellings" />
            <FeaturedBrands title="Featured Brands"/>
            <MaximiseYourSavings title="MaximiseYourSavings" />
            <HorizontalProductScroller title="Recommended for You" />
            <Testimonials />
            <NewsletterSignup />
        </main>
    );
}
