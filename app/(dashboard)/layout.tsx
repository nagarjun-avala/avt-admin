"use client"
import React, { useEffect } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppNavbar from "@/components/app-navbar";
import { refreshToken, setCookieTest, getCookieTest } from '@/redux/actions/authAction'
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(refreshToken())
  })

  const settingCookie = () => {
    dispatch(setCookieTest())
  }

  const gettingCookie = () => {
    dispatch(getCookieTest())
  }
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div>
            <button className="text-white bg-black rounded hover:bg-orange-500 px-3 py-2 mx-3 my-2" onClick={settingCookie}>Set Coolie</button>
            <button className="text-white bg-black rounded hover:bg-orange-500 px-3 py-2 mx-3 my-2" onClick={gettingCookie}>Get Coolie</button>
          </div>
          <AppNavbar />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default Layout;
