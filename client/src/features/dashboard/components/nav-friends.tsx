import { type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function NavFriends({
  friends,
}: {
  friends: {
    name: string
    url: string
    avatar: string
    icon?: LucideIcon
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="font-semibold">FRIENDS</SidebarGroupLabel>
      <SidebarMenu>
        {friends.map((friend) => (
          <SidebarMenuItem key={friend.name}>
            <SidebarMenuButton size="lg">
              <Avatar className="h-8 w-8 rounded-full border border-amber-500">
                <AvatarImage src={friend.avatar} alt={friend.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{friend.name}</span>
                <span className="truncate text-xs">FRIEND</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
