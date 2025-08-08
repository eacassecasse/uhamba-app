import { Card, CardContent } from "@/components/ui/card";
import { type LucideIcon, EllipsisVertical } from "lucide-react";

interface ProgramProps {
    programs: {
        title: string;
        completedPercentage: number;
        icon: LucideIcon;
        iconStyle: string;
    }[]
}

export function HighlightedPrograms({ programs }: ProgramProps) {
    return (
        <div className="grid md:grid-cols-3 gap-3">
            {
                programs.map((program, index) => (
                    <Card key={index} className="items-center justify-center px-0 py-2">
                        <CardContent className="w-full p-0">
                            <div className="flex flex-row items-center justify-between pl-2">
                                <div className="flex flex-row items-center gap-2">
                                    <div className={`flex items-center justify-center w-12 h-12 p-3 rounded-full ${program.iconStyle}`}>
                                        {program.icon && <program.icon className="h-6 w-6" />}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs text-muted-foreground">{program.completedPercentage}% Watched</span>
                                        <span className="text-lg font-semibold">{program.title}</span>
                                    </div>
                                </div>
                                <div>
                                    <EllipsisVertical />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )).slice(0, 3)
            }
        </div>
    )
}