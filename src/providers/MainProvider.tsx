"use client";
import SidebarIconContextProvider from "@/contexts/SidebarIconContext";
import UserProvider from "@/contexts/UserContext";
import React, { ReactNode } from "react";

export default function MainProvider({ children }: { children: ReactNode }) {
  return (
    <div>
      <SidebarIconContextProvider>
        <UserProvider>{children}</UserProvider>
      </SidebarIconContextProvider>
    </div>
  );
}
