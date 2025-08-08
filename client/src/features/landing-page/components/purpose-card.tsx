import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PurposeCardProps extends React.ComponentProps<"div"> {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export function PurposeCard({ className, id, title, description, icon, ...props }: PurposeCardProps) {
    return (
        <Card className={cn("bg-gray-50", className)} {...props}>
            <CardHeader className="flex justify-center items-center">
                <div className="p-2 flex items-center justify-center rounded-full bg-cyan-500 text-white">
                    {icon}
                </div>
            </CardHeader>
            <CardContent className="px-6">
                <div className="text-sm text-left space-y-4">
                    <h2 className="font-semibold">{id}. {title}</h2>
                    <p>{description}</p>
                </div>
            </CardContent>
        </Card>
    )
}