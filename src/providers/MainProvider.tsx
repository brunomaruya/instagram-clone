"use client";
import DataContextProvider from "@/contexts/DataContext";
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
            <DataContextProvider>
              <UserProvider>{children}</UserProvider>
            </DataContextProvider>
          </PostsModalContextProvider>
        </PostsContextProvider>
      </SidebarIconContextProvider>
    </div>
  );
}
