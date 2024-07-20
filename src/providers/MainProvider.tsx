"use client";
import PostsContextProvider from "@/contexts/PostsContext";
import SidebarIconContextProvider from "@/contexts/SidebarIconContext";
import UserProvider from "@/contexts/UserContext";
import React, { ReactNode } from "react";

export default function MainProvider({ children }: { children: ReactNode }) {
  return (
    <div>
      <SidebarIconContextProvider>
        <PostsContextProvider>
          <UserProvider>{children}</UserProvider>
        </PostsContextProvider>
      </SidebarIconContextProvider>
    </div>
  );
}
