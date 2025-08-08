import { AppSidebar } from "@/features/dashboard/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowRightCircle, ChevronLeft, ChevronRight, EllipsisVertical, GalleryVertical, GitGraph, Plus, WandSparkles } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PerformanceChartComparison } from "./components/performance-chart-comparison"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const data = {
    user: {
        firstName: "Bella",
        lastName: "Rose",
        avatar: "https://example.com/avatar.jpg",
    },
    programs: [
        {
            title: "UX/UI Design",
            completedPercentage: 20,
            icon: WandSparkles,
            iconStyle: "bg-red-500/10 text-red-700",
            mentor: {
                name: "Johnson Bakari",
                avatar: "https://example.com/avatar.jpg",
                type: "Coach"
            },
            lessons: [
                {
                    cover: "https://example.com/cover.jpg",
                    title: "Optimizing User Experience with The Best Universal Designs",
                    shortDescription: "short-description-1",
                    completed: 45
                }
            ],
            ongoingProjects: [
                {
                    startDate: "2025-03-17",
                    endDate: "2025-06-17",
                    title: "Redesigning the User Interface",
                }
            ]
        },
        {
            title: "Cybersecurity",
            completedPercentage: 35,
            icon: GitGraph,
            iconStyle: "bg-cyan-500/10 text-cyan-700",
            mentor: {
                name: "Idris Alba",
                avatar: "https://example.com/avatar.jpg",
                type: "Coach"
            },
            lessons: [
                {
                    cover: "https://example.com/cover.jpg",
                    title: "Disaster Recovery and Storage Area Records",
                    shortDescription: "Recovery and Storage",
                    completed: 30
                }
            ],
            ongoingProjects: [
                {
                    startDate: "2025-07-21",
                    endDate: "2025-08-14",
                    title: "Implementing Security Protocols"
                }
            ]
        },
        {
            title: "Data Science",
            completedPercentage: 15,
            icon: GalleryVertical,
            iconStyle: "bg-fuchsia-500/10 text-fuchsia-700",
            mentor: {
                name: "Alice Smith",
                avatar: "https://example.com/avatar.jpg",
                type: "Coach"
            },
            lessons: [
                {
                    cover: "https://example.com/cover.jpg",
                    title: "Data Mining and Algorithm Development",
                    shortDescription: "short-description-2",
                    completed: 79
                }
            ],
            ongoingProjects: [
                {
                    startDate: "2025-08-08",
                    endDate: "2025-08-15",
                    title: "Mining Algorithm"
                }
            ]
        }
    ]
}

export function Dashboard() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="space-y-4 border border-purple-500">
                <header className="sticky top-0 z-10 bg-background flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0 overflow-y-auto">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <Card className="px-3 py-4 gap-0">
                            <CardHeader className="flex flex-row flex-nowrap justify-between items-center p-0">
                                <span className="font-bold">Statistic</span>
                                <EllipsisVertical className="text-sm font-extralight" />
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="flex flex-col justify-center items-center gap-4 p-0">
                                    <div className="flex flex-col justify-center items-center gap-3 m-0">
                                        <Avatar className="h-24 w-24 rounded-full">
                                            <AvatarImage src={data.user.avatar} alt={`${data.user.firstName}-${data.user.lastName}`} />
                                            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                        </Avatar>
                                        <div className="text-center">
                                            <h3 className="font-semibold">Good Morning {data.user.firstName}</h3>
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
                                                {data.programs.map((program, index) => (
                                                    <div key={`${program.title}-${index}-mentor`} className="flex items-center gap-2 px-2 py-2 text-left text-sm">
                                                        <Avatar className="h-12 w-12 rounded-full">
                                                            <AvatarImage src={program.mentor.avatar} alt={`${program.title}-${program.mentor.name}-img`} />
                                                            <AvatarFallback className="rounded-lg">PM</AvatarFallback>
                                                        </Avatar>
                                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                                            <span className="truncate font-medium">{program.mentor.name}</span>
                                                            <span className="truncate text-xs">{program.mentor.type}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <div className="col-span-2 flex flex-col gap-4">
                            <div>
                                <Card>
                                    <CardContent className="flex flex-col gap-4">
                                        <span className="text-xl font-semibold">ONLINE COURSE</span>
                                        <span className="text-4xl font-bold">Broaden Your Skills With Professional Online Courses</span>
                                        <div className="pt-8">
                                            <Button className="rounded-xl" size="lg">
                                                <div className="flex flex-row flex-nowrap justify-between items-center text-white">
                                                    <span className="text-sm font-semibold">Start Learning</span>
                                                    <ArrowRightCircle className="ml-2 h-4 w-4" />
                                                </div>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                {
                                    data.programs.map((program, index) => (
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
                                            data.programs.map((program, _) => (
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
                            <div className="space-y-2 border border-fuchsia-600">
                                <div className="flex flex-row justify-between px-2 items-center">
                                    <span className="text-lg font-bold">Ongoing Projects</span>
                                    <div>
                                        <Button variant="link" className="text-red-500">
                                            View more
                                        </Button>
                                    </div>
                                </div>
                                <Card className="p-0">
                                    <CardContent>
                                        <div>
                                            <Table>
                                                <TableHeader>
                                                    <TableRow className="font-semibold">
                                                        <TableHead>TITLE</TableHead>
                                                        <TableHead>MENTOR</TableHead>
                                                        <TableHead>STARTED AT</TableHead>
                                                        <TableHead>ENDS AT</TableHead>
                                                        <TableHead>TYPE</TableHead>
                                                        <TableHead className="text-right">ACTIONS</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {
                                                        data.programs.map((program, _) => (
                                                            program.ongoingProjects.map((project, index) => (
                                                                <TableRow className="space-x-4 py-4" key={`${program.title}-project-${index}`}>
                                                                    <TableCell className="truncate font-medium border border-amber-500">{project.title}</TableCell>
                                                                    <TableCell className="border border-amber-500">
                                                                        {program.mentor.name}
                                                                    </TableCell>
                                                                    <TableCell className="border border-amber-500">{project.startDate}</TableCell>
                                                                    <TableCell className="border border-amber-500">{project.endDate}</TableCell>
                                                                    <TableCell className="border border-amber-500">
                                                                        <div>
                                                                            <div className={`flex flex-row items-center ${program.iconStyle} rounded-md px-4 py-1 gap-2`}>
                                                                                {program.icon && <program.icon className="h-4 w-4" />}
                                                                                <span className="font-bold">{program.title}</span>
                                                                            </div>
                                                                        </div>
                                                                    </TableCell>
                                                                    <TableCell className="text-right">
                                                                        <div className="flex justify-center items-end">
                                                                            <Button variant="outline">
                                                                                <ChevronRight className="text-red-500 h-4 w-4" />
                                                                            </Button>
                                                                        </div>
                                                                    </TableCell>
                                                                </TableRow>
                                                            ))
                                                        ))
                                                    }
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
