import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

interface FeatureCardProps extends React.ComponentProps<"div"> {
    feature: {
        icon: React.ReactNode;
        title: string;
        description: string;
    }
}

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
    return (
        <Card className={cn("", className)} {...props}>
            <CardHeader className="flex justify-center items-center">
                <div className="p-2 flex items-center justify-center rounded-full bg-cyan-500 text-white">
                    {feature.icon}
                </div>
            </CardHeader>
            <CardContent className="px-4">
                <div className="flex flex-col justify-between text-left space-y-12">
                    <h2 className="text-xl font-semibold border-b-2 border-primary">{feature.title}</h2>
                    <p className="text-base">{feature.description}</p>
                </div>
            </CardContent>
            <CardFooter className="flex self-end">
                <Button className="self-end rounded-full size-10 group-hover:bg-cyan-500 group-hover:text-white" variant="outline">
                    <Plus />
                </Button>
            </CardFooter>
        </Card>
    )
}