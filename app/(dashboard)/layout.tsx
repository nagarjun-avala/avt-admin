"use client"
import React, { useEffect } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppNavbar from "@/components/app-navbar";
import { refreshToken } from '@/redux/actions/authAction'
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
    dispatch(refreshToken())
  })
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <AppNavbar />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default Layout;
