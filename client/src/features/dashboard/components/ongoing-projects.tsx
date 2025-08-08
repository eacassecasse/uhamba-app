import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Table, ChevronRight, type LucideIcon } from "lucide-react";

interface ProjectsProps {
    programs:
    {
        title: string;
        completedPercentage: number
        icon: LucideIcon,
        iconStyle: string;
        mentor: {
            name: string;
            avatar: string;
            type: string;
        },
        ongoingProjects:
        {
            startDate: string;
            endDate: string;
            title: string;
        }[]
    }[]
}

export function OngoingProjects({ programs }: ProjectsProps) {
    return (
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
                                    programs.map((program, _) => (
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
    );
}