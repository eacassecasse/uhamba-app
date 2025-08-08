import { Card, CardContent } from "@/components/ui/card"
import { PathwayFeatureCard } from "@/features/landing-page/components/pathway-feature"
import { PracticeHubFeature } from "@/features/landing-page/components/practice-hub-feature";
import { CTAProduct } from "@/features/landing-page/components/cta-product";

const learnerHubFeatures = [
    {
        title: "Goal & Pathway Planning",
        description: "Students set meaningful goals and map personalized paths toward learning and career development.",
    },
    {
        title: "Skill Portfolio Builder",
        description: "Learners document their growth through reflections, achievements, and micro-credentials.",
    },
    {
        title: "Mentor Match & Check-Ins",
        description: "Each student is paired with a mentor to provide encouragement, challenge, and shared accountability.",
    },
    {
        title: "Growth Reflections",
        description: "Guided reflection prompts support self-awareness and alignment with each learner’s evolving goals.",
    }
];


const practiceLabFeatures = [
    {
        title: "Real-Life Challenges",
        description: "Weekly prompts simulate practical, personal, or entrepreneurial scenarios students can act on."
    },
    {
        title: "Guided Mini-Projects",
        description: "Learners work through templates to turn ideas into action — with room for creativity and iteration."
    },
    {
        title: "Self-Paced Discovery Tracks",
        description: "Flexible modules help learners dive deeper into themes like digital skills, business, or mindset."
    },
    {
        title: "Peer Collaboration Spaces",
        description: "Group features make it easy to co-create, share feedback, and learn with others on similar journeys."
    },
    {
        title: "Mentor & AI Feedback",
        description: "Each submission invites reflection and feedback from real mentors or the platform’s smart assistant."
    }
];

export function Products() {
    return (
        <section className="space-y-6 px-12 py-6 text-center">
            <div className="flex justify-center items-center">
                <h2 className="text-6xl border-b border-cyan-600 py-2">What we offer</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 p-8">
                <div className="col-span-2 border border-amber-500">1</div>
                <div className="col-span-3 space-y-4">
                    <div>
                        <h2 className="text-4xl py-2 font-semibold">Learner Pathway Hub</h2>
                    </div>
                    <div className="grid grid-cols-subgrid grid-rows-2 gap-4">
                        {learnerHubFeatures.map((feature, index) => (
                            <PathwayFeatureCard
                                className="bg-gray-50 group hover:border-cyan-500"
                                key={index}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                        <CTAProduct
                            className="row-start-1 row-span-2 col-start-3"
                            message="Explore the Hub"
                            description="Get started today — Give students a structured space to define goals, connect with mentors, and reflect on growth—building clarity, confidence, and direction with every step."
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 lg:grid-rows-2 gap-6 p-8">
                <div className="col-span-2 border border-amber-500">1</div>
                <div className="col-span-2 flex flex-col justify-between space-y-4">
                    <h2 className="text-4xl py-2 font-semibold">Practice & Exploration</h2>
                    <Card className="px-3 py-8 bg-gray-50 hover:px-4 hover:py-10">
                        <CardContent className="text-justify">
                            <p>Uhambá’s Practice Lab gives students a hands-on space to apply what they learn. Built for relevance and creativity, it helps learners explore new ideas, solve real problems, and build confidence — step by step.</p>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <CTAProduct
                        className="row-start-2 row-span-2 col-start-3 gap-2"
                        message="Enter the Lab"
                        description="Get started in minutes — Real projects, creative challenges, and teamwork experiences designed to turn curiosity into confidence."
                    />
                </div>
                {practiceLabFeatures.map((feature, index) => (
                    <PracticeHubFeature key={index} id={(index + 1).toString()} className="h-full py-8 group bg-gray-50 hover:border-cyan-500" title={feature.title} description={feature.description} />
                ))}
            </div>
        </section>
    )
}