import { Header } from "@/features/landing-page/components/header";
import { Hero } from "@/features/landing-page/components/hero";
import { OurPurpose } from "@/features/landing-page/components/our-purpose";
import { Products } from "@/features/landing-page/components/products";
import { Footer } from "@/features/landing-page/components/footer";
import { Features } from "./components/features";

export function LandingPage() {
    return (
        <>
            <div>
                <Header />
                <Hero />
            </div>
            <main>
                <OurPurpose />
                <Products />
                <Features />
            </main>
            <div>
                <Footer />
            </div>
        </>
    );
}