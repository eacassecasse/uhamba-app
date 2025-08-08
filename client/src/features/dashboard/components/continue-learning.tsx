import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { type LucideIcon, ChevronLeft, ChevronRight } from "lucide-react";

interface DataProps {
    programs: {
        title: string;
        completedPercentage: number;
        icon: LucideIcon;
        iconStyle: string;
        mentor: {
            name: string;
            avatar: string;
            type: string
        },
        lessons:
        {
            cover: string;
            title: string;
            shortDescription: string;
            completed: number;
        }[]
    }[]
}

export function Learning({ programs }: DataProps) {
    return (
        <div className="space-y-2">
            <div className="flex flex-row justify-between px-2 items-center">
                <span className="text-lg font-bold">Continue Learning</span>
                <div>
                    <Button variant="outline" className="rounded-full">
                        <ChevronLeft className="text-red-500" />
                    </Button>
                    <Button variant="outline" className="rounded-full">
                        <ChevronRight className="text-red-500" />
                    </Button>
                </div>
            </div>
            <ScrollArea className="w-full">
                <div className="flex flex-row w-max gap-1">
                    {
                        programs.map((program, _) => (
                            program.lessons.map((lesson, index) => (
                                <Card key={`${lesson.shortDescription}-${index}`} className="w-80 p-0 gap-2">
                                    <CardHeader className="px-3 pt-4">
                                        <div className="overflow-hidden rounded-lg border">
                                            <img src={lesson.cover} alt={`${program.title}-${lesson.title}-cover`} className="aspect-[5/4] w-fit h-fit object-cover" />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="px-3">
                                        <div className="flex flex-col gap-4">
                                            <div className="pr-20">
                                                <div className={`flex flex-row items-center ${program.iconStyle} rounded-md px-4 py-3 gap-2`}>
                                                    {program.icon && <program.icon className="h-4 w-4" />}
                                                    <span className="font-bold">{program.title}</span>
                                                </div>
                                            </div>
                                            <span className="font-semibold">{lesson.title}</span>
                                            <Progress value={lesson.completed} />
                                        </div>
                                    </CardContent>
                                    <CardFooter className="px-3 py-3">
                                        <div key={`${program.title}-${index}-mentor`} className="flex items-center gap-2 text-left text-sm">
                                            <Avatar className="h-16 w-16 rounded-full">
                                                <AvatarImage src={program.mentor.avatar} alt={`${program.title}-${program.mentor.name}-img`} />
                                                <AvatarFallback className="rounded-lg">PM</AvatarFallback>
                                            </Avatar>
                                            <div className="grid flex-1 text-left text-sm leading-tight">
                                                <span className="truncate font-semibold">{program.mentor.name}</span>
                                                <span className="truncate text-xs">{program.mentor.type}</span>
                                            </div>
                                        </div>
                                    </CardFooter>
                                </Card>
                            ))
                        ))
                    }
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    )
}