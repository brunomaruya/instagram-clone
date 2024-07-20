"use client";
import PostsModalContextProvider from "@/contexts/PostModalContext";
import PostsContextProvider from "@/contexts/PostsContext";
import SidebarIconContextProvider from "@/contexts/SidebarIconContext";
import UserProvider from "@/contexts/UserContext";
import React, { ReactNode } from "react";

export default function MainProvider({ children }: { children: ReactNode }) {
  return (
    <div>
      <SidebarIconContextProvider>
        <PostsContextProvider>
          <PostsModalContextProvider>
            <UserProvider>{children}</UserProvider>
          </PostsModalContextProvider>
        </PostsContextProvider>
      </SidebarIconContextProvider>
    </div>
  );
}
