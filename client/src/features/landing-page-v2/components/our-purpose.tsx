import { PurposeCard } from "@/features/landing-page-v2/components/purpose-card";
import { Home, Lightbulb, UserPlus } from "lucide-react";

const proposedValues = [
  {
    icon: <UserPlus />,
    title: "Start With the Learner",
    description: "We meet learners where they are, not where the system expects them to be. We believe in local realities, flexible learning, and trust-based guidance."
  },
  {
    icon: <Lightbulb />,
    title: "Build With Purpose",
    description: "Uhamba isn't just about skills—it's about values, vision, and growth. We equip learners to act with intention in their communities and careers."
  },
  {
    icon: <Home />,
    title: "Grow Through Mentorship",
    description: "Guidance unlocks growth. Uhamba connects learners with real people and real stories—mentors, facilitators, and alumni who've walked the path."
  }
];


export function OurPurpose() {
  return (
    <section className="section space-y-6 px-12 py-6 text-center">
      <div className="content">
        <div className="flex flex-col items-center gap-6">
          <h2 className="heading--center">Why Uhamba Exists</h2>
          <p className="text-2xl">Uhamba is a mission-driven platform bridging the gap between education and opportunity. We empower underserved learners with the practical tools, mentorship, and mindset needed to thrive in real-world careers or ventures—whether they finish school or not.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          {
            proposedValues.map((value, index) => (
              <PurposeCard key={index + 1} id={(index + 1).toString()} icon={value.icon} title={value.title} description={value.description} />
            ))
          }
        </div>
      </div>
    </section>
  )
}