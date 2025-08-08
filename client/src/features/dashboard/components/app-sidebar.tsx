import * as React from "react"
import {
  AudioWaveform,
  Book,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  LogOut,
  Mail,
  Map,
  PieChart,
  Settings,
  SwatchBook,
  Users2,
} from "lucide-react"

import { NavMain } from "@/features/dashboard/components/nav-main"
import { NavFriends } from "@/features/dashboard/components/nav-friends"
import { PlatformBrand } from "@/features/dashboard/components/platform-brand"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavFooter } from "./nav-footer"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  brand: {
    name: "Uhamba",
    logo: Bot,
    plan: "Pro",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Message",
      url: "#",
      icon: Mail,
    },
    {
      title: "Lesson",
      url: "#",
      icon: SwatchBook,
    },
    {
      title: "Assignment",
      url: "#",
      icon: Book,
    },
    {
      title: "Group",
      url: "#",
      icon: Users2,
    },
  ],
  friends: [
    {
      name: "Sandra Davies",
      url: "#",
      icon: Frame,
      avatar: "/avatars/sandra.jpg",
    },
    {
      name: "Johnson Gbadebo",
      url: "#",
      icon: PieChart,
      avatar: "/avatars/johnson.jpg",
    },
    {
      name: "Oluwafemi Daniel",
      url: "#",
      icon: Map,
      avatar: "/avatars/oluwafemi.jpg",
    },
  ],
  navFooter: [
    {
      title: "Settings",
      url: "#",
      icon: Settings
    },
    {
      title: "Log Out",
      url: "#",
      icon: LogOut,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <PlatformBrand brand={data.brand} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavFriends friends={data.friends} />
      </SidebarContent>
      <SidebarFooter>
        <NavFooter items={data.navFooter} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
