"use client";
import SidebarIconContextProvider from "@/contexts/SidebarIconContext";
import React, { ReactNode } from "react";

export default function MainProvider({ children }: { children: ReactNode }) {
  return (
    <div>
      <SidebarIconContextProvider>{children}</SidebarIconContextProvider>
    </div>
  );
}
