import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

interface PathwayFeatureCardProps extends React.ComponentProps<"div"> {
    title: string;
    description: string;
}

export function PathwayFeatureCard({ title, className, ...props }: PathwayFeatureCardProps) {
    return (
        <Card className={cn("", className)} {...props}>
            <CardContent className="px-4">
                <div className="flex flex-col justify-between text-left space-y-12">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <Button className="self-end rounded-full size-10 group-hover:bg-cyan-500 group-hover:text-white" variant="outline">
                        <Plus />
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}