import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PracticeHubFeatureProps extends React.ComponentProps<"div"> {
    title: string;
    description: string;
}

export function PracticeHubFeature({ title, description, className, id, ...props }: PracticeHubFeatureProps) {
    return (
        <Card className={cn("", className)} {...props}>
            <CardHeader className="flex justify-center items-center">
                <div className="flex items-center justify-center rounded-full bg-cyan-500 text-white size-10 group-hover:bg-white group-hover:text-cyan-500 group-hover:border">
                    <p className="text-xl">{id}</p>
                </div>
            </CardHeader>
            <CardContent className="px-3">
                <div className="grid grid-rows-2 space-y-4">
                    <h2 className="font-semibold">{title}</h2>
                    <p className="text-sm">{description}</p>
                </div>
            </CardContent>
        </Card>
    );
}