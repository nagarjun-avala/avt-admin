"use client"

import * as React from "react"
import {
  BadgeIndianRupee,
  Barcode,
  BookUser,
  ClipboardPenLine,
  CornerDownLeft,
  Flag,
  GalleryVerticalEnd,
  ListOrdered,
  Logs,
  Map,
  MapPinned,
  Network,
  PieChart,
  ServerCog,
  UserRoundCog,
  UsersRound,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { AdministratorNavigation } from "@/components/nav-admin-access"
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
  const auth = useSelector((state: RootState) => state.auth) as unknown as {
    admin?: Admin;
  };
  const data = {
    user: {
      name: auth?.admin?.fullname || "",
      role: auth?.admin?.role?.short || "",
      email: auth?.admin?.email || "m@example.com",
      avatar: auth?.admin?.avatar || "/avatars/shadcn.jpg",
    },
    team: {
      name: "AV Traders",
      logo: GalleryVerticalEnd,
      plan: "Admin Dashboard",
    },
    navMain: [
      {
        title: "Inventory",
        url: "#",
        icon: ClipboardPenLine,
        isActive: true,
        items: [
          { title: "All Products", url: "/products" },
          { title: "Transactions", url: "/inventory-transactions" },
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
    adminAccess: [
      { name: "Admins", isAcive: true, url: "/admins", icon: UserRoundCog },
      { name: "Roles", isAcive: false, url: "/roles", icon: ServerCog },
      { name: "Categories", isAcive: false, url: "/categories", icon: Network },
      { name: "Barcodes", isAcive: false, url: "/barcodes", icon: Barcode },
      { name: "Uers", isAcive: false, url: "/uers", icon: UsersRound },
      { name: "Suppliers", isAcive: false, url: "/suppliers", icon: BookUser },
      { name: "Discounts", isAcive: false, url: "/discounts", icon: BadgeIndianRupee },
      { name: "Orders", isAcive: false, url: "/orders", icon: ListOrdered },
      { name: "Return Orders", isAcive: false, url: "/returns", icon: CornerDownLeft },
      { name: "Countries", isAcive: false, url: "/countries", icon: Flag },
      { name: "States", isAcive: false, url: "/states", icon: Map },
      { name: "Cities", isAcive: false, url: "/cities", icon: MapPinned },
      { name: "Sales & Marketing", isAcive: false, url: "#", icon: PieChart },
      { name: "Audit Logs", isAcive: false, url: "/audit-logs", icon: Logs },
    ],
  }
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher team={data.team} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <AdministratorNavigation adminAccess={data.adminAccess} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
