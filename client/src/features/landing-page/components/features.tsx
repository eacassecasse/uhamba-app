import { Compass, MessageCircleHeart, Sprout } from "lucide-react";
import { FeatureCard } from "./feature-card";

const features = [
    {
        icon: <Compass />,
        title: "Guided Learning",
        description: "Every learner follows a dynamic path tailored to their goals and pace. Milestones, feedback, and mentor touchpoints make the experience personal, relevant, and progress-driven."
    },
    {
        icon: <Sprout />,
        title: "Built-In Growth",
        description: "Students pause to reflect, track their mindset, and assess progress through guided prompts and check-ins — strengthening self-awareness alongside skill development."
    },
    {
        icon: <MessageCircleHeart />,
        title: "Always-On Support",
        description: "Real mentors and AI guidance work together to support learners 24/7 — from tackling challenges to exploring new paths, students are never navigating alone."
    }
];


export function Features() {
    return (
        <section className="space-y-6 px-12 py-6 text-center border border-emerald-500">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 p-8">
                <div className="col-span-2 border border-amber-500">1</div>
                <div className="col-span-3 space-y-4">
                    <div>
                        <h2 className="text-4xl py-2 font-semibold">Where Tech Meets Real Impact</h2>
                    </div>
                    <div className="grid grid-cols-3 space-x-4">
                        {features.map((feature, index) => (
                            <FeatureCard className="group bg-gray-50 hover:border-cyan-500" key={index} feature={feature} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}