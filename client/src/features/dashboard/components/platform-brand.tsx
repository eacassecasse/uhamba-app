import * as React from "react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function PlatformBrand({
  brand,
}: {
  brand: {
    name: string
    logo: React.ElementType
  }
}) {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="flex items-center"
        >
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <brand.logo className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-3xl leading-tight">
            <span className="truncate font-semibold mt-2">{brand.name}<span className="dot-green">.</span></span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
