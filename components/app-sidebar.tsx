"use client"

import * as React from "react"
import {
  ClipboardPenLine,
  Frame,
  GalleryVerticalEnd,
  Map,
  Network,
  PieChart,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { Admin } from "@/lib/types"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const auth = useSelector((state: RootState) => state.auth) as {
    admin?: Admin;
  };
  const data = {
    user: {
      name: auth?.admin?.fullname|| "",
      role: auth?.admin?.role?.short|| "",
      email: auth?.admin?.email|| "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    team: {
      name: "AV Traders",
      logo: GalleryVerticalEnd,
      plan: "Admin",
    },
    navMain: [
      {
        title: "Inventory",
        url: "#",
        icon: ClipboardPenLine,
        isActive: true,
        items: [
          { title: "All Products", url: "#" },
          { title: "Create Product", url: "#" },
        ],
      },
      {
        title: "Category",
        url: "#",
        icon: Network,
        items: [
          { title: "All Categories", url: "#" },
          { title: "Create Category", url: "#" },
        ],
      },
    ],
    projects: [
      { name: "Design Engineering", url: "#", icon: Frame },
      { name: "Sales & Marketing", url: "#", icon: PieChart },
      { name: "Travel", url: "#", icon: Map },
    ],
  }
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher team={data.team} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
