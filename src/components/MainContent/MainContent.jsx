// MainContent.jsx
import Hero from "./Hero";
import NewArrivals from "./NewArrivals";
import PromotionBanner from "./PromotionBanner";
import TopSellings from "./TopSellings";
import RecommendedForYou from "./RecommendedForYou";
import FeaturedBrands from "./FeaturedBrands";
import MaximiseYourSavings from "./MaximiseYourSavings";
import Electronics from "./Electronics";
import MensFashion from "./MensFashion"
import NewsletterSignup from "./NewsletterSignup";
import Testimonials from "./Testimonials";

export default function MainContent() {
    return (
        <main className="flex flex-col gap-5">
            <Hero />
            <NewArrivals title="New Arrivals" />
            <PromotionBanner />
            <TopSellings title="Top Sellings" />
            <RecommendedForYou title="Recommended For Youa" />
            <FeaturedBrands title="Featured Brands"/>
            <MaximiseYourSavings title="MaximiseYourSavings" />
            <Electronics title="Electronics" />
            <MensFashion title="Men's Fashion" />
            <Testimonials />
            <NewsletterSignup />
        </main>
    );
}
