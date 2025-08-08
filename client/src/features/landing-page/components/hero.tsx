import { Button } from "@/components/ui/button";
import { ChevronRightCircle } from "lucide-react";

export function Hero() {
    return (
        <div className="grid grid-cols-5 space-x-8 px-12 py-12">
            <div className="col-span-3 flex flex-col space-y-4 py-6 border border-emerald-700">
                <h1 className="text-[64px] leading-[1.1] font-bold border border-red-500">
                    Reclaiming Education for the <span className="text-cyan-500">Forgotten</span> Majority
                </h1>
                <h3 className="text-3xl pr-12">
                    A platform guiding students from overlooked to unstoppable — through mentorship, real-world learning, and human support.
                </h3>
                <div className="grid grid-cols-2 w-1/2 items-center space-x-2 border border-purple-900">
                    <Button>
                        <div className="flex flex-row gap-1">
                            <h2>Join as Mentor</h2>
                            <ChevronRightCircle />
                        </div>
                    </Button>
                    <Button variant="outline">See How It Works</Button>
                </div>
            </div>
            <div className="col-span-2 border border-emerald-700">
                2
            </div>
        </div>
    )
}