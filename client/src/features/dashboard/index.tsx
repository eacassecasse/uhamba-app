import { AppSidebar } from "@/features/dashboard/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRightCircle, ChevronRight, GalleryVertical, GitGraph, WandSparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserProfileCard } from "./components/user-stats-card"
import { HighlightedPrograms } from "./components/highlighted-programs"
import { Learning } from "./components/continue-learning"

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
                        <UserProfileCard user={data.user} mentors={data.programs.map(program => program.mentor)} />
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
                            <HighlightedPrograms programs={data.programs} />
                            <Learning programs={data.programs} />
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
                                                                <TableRow className="space-x-4 [&>td]:py-4" key={`${program.title}-project-${index}`} style={{ borderSpacing: '0 16px'}}>
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
