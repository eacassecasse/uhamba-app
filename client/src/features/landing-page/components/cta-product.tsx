import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";


interface CTAProductProps extends React.ComponentProps<"div"> {
    message: string;
    description: string;
}

export function CTAProduct({ message, description, className, ...props }: CTAProductProps) {
    return (
        <Card className={cn("h-full bg-slate-900 border-slate-900 text-white group hover:bg-gray-50 hover:border-cyan-500 hover:text-primary", className)} {...props}>
            <CardHeader>
                <div className="flex flex-col justify-between items-center space-y-2">
                    <Button className="rounded-full size-10 text-primary group-hover:bg-cyan-500 group-hover:text-white" variant="outline">
                        <MoveRight />
                    </Button>
                    <h2 className="text-xl font-semibold border-b-2 border-white group-hover:border-primary">{message}</h2>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col justify-between items-center">
                    <p className="text-sm">{description}</p>
                </div>
            </CardContent>
        </Card>
    )
}