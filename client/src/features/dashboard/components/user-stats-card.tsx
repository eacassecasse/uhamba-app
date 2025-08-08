import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { EllipsisVertical, Plus } from "lucide-react";
import { PerformanceChartComparison } from "./performance-chart-comparison";

interface ProfileStatsProps {
    user: {
        firstName: string;
        lastName: string;
        avatar: string;
    },
    mentors: {
        name: string;
        avatar: string;
        type: string;
    }[]
}

export function UserProfileCard({ user, mentors }: ProfileStatsProps) {
    return (
        <Card className="px-3 py-4 gap-0">
            <CardHeader className="flex flex-row flex-nowrap justify-between items-center p-0">
                <span className="font-bold">Statistic</span>
                <EllipsisVertical className="text-sm font-extralight" />
            </CardHeader>
            <CardContent className="p-0">
                <div className="flex flex-col justify-center items-center gap-4 p-0">
                    <div className="flex flex-col justify-center items-center gap-3 m-0">
                        <Avatar className="h-24 w-24 rounded-full">
                            <AvatarImage src={user.avatar} alt={`${user.firstName}-${user.lastName}`} />
                            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                        </Avatar>
                        <div className="text-center">
                            <h3 className="font-semibold">Good Morning {user.firstName}</h3>
                            <p className="text-sm text-muted-foreground">Continue your lesson to achieve your goal</p>
                        </div>
                    </div>

                    <div className="w-full">
                        <PerformanceChartComparison />
                    </div>

                    <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-row justify-between items-center">
                            <span className="text-base font-bold">Your Mentor</span>
                            <Button variant="outline" className="rounded-full">
                                <Plus className="text-red-500" />
                            </Button>
                        </div>
                        <Card className="p-0">
                            <CardContent className="px-2 py-3">
                                {mentors.map((mentor, index) => (
                                    <div key={`${mentor.name}-${index}-mentor`} className="flex items-center gap-2 px-2 py-2 text-left text-sm">
                                        <Avatar className="h-12 w-12 rounded-full">
                                            <AvatarImage src={mentor.avatar} alt={`${mentor.name}-img`} />
                                            <AvatarFallback className="rounded-lg">PM</AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-medium">{mentor.name}</span>
                                            <span className="truncate text-xs">{mentor.type}</span>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}