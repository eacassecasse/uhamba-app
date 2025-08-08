import { PurposeCard } from "@/features/landing-page/components/purpose-card";
import { Home, Lightbulb, UserPlus } from "lucide-react";

const proposedValues = [
  {
    icon: <UserPlus />,
    title: "Mentorship That Walks With You",
    description: "Every student is paired with someone who’s been there — a mentor who listens, understands, and helps them make sense of where they’re headed. It’s not distant advice; it’s shared direction."
  },
  {
    icon: <Lightbulb />,
    title: "Learning That Feels Real",
    description: "No jargon. No lectures without purpose. Just practical, clear content that connects to real life — from starting a project to making decisions about the future."
  },
  {
    icon: <Home />,
    title: "A Platform Built for Belonging",
    description: "Uhambá was created for students who rarely see themselves in the system. It speaks their language, fits their context, and respects the path they’re on."
  }
];


export function OurPurpose() {
  return (
    <section className="space-y-6 px-12 py-6 text-center">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-6xl border-b border-cyan-600 py-2">Our Purpose</h2>
        <p className="text-2xl">Uhamba gives students what school alone often can&apos;t: direction, confidence, and meaningful support. It’s built to help them grow, not just graduate — and to carry that growth into life.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {
          proposedValues.map((value, index) => (
            <PurposeCard key={index + 1} id={(index + 1).toString()} icon={value.icon} title={value.title} description={value.description} />
          ))
        }
      </div>
    </section>
  )
}