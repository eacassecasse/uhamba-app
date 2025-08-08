import { Header } from "@/features/landing-page-v2/components/header";
import { Hero } from "@/features/landing-page-v2/components/hero";
import { Pathways } from "@/features/landing-page-v2/components/pathways";
import { Skills } from "@/features/landing-page-v2/components/skills";
import { PartnerWithUs } from "@/features/landing-page-v2/components/partner-with-us";
import { Footer } from "@/features/landing-page-v2/components/footer";
import { OurPurpose } from "@/features/landing-page-v2/components/our-purpose";

export function LandingPage() {
    return (
        <div>
            <Header />
            <Hero />
            <OurPurpose />
            <Pathways />
            <Skills />
            <PartnerWithUs />
            <Footer />
        </div>
    );
}