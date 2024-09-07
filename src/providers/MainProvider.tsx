"use client";
import EditProfileContextProvider from "@/contexts/EditProfileContext";
import DataContextProvider from "@/contexts/DataContext";
import PostsModalContextProvider from "@/contexts/PostModalContext";
import PostsContextProvider from "@/contexts/PostsContext";
import SidebarIconContextProvider from "@/contexts/SidebarIconContext";

import React, { ReactNode } from "react";

export default function MainProvider({ children }: { children: ReactNode }) {
  return (
    <div>
      <SidebarIconContextProvider>
        <PostsContextProvider>
          <PostsModalContextProvider>
            <EditProfileContextProvider>
              <DataContextProvider>{children}</DataContextProvider>
            </EditProfileContextProvider>
          </PostsModalContextProvider>
        </PostsContextProvider>
      </SidebarIconContextProvider>
    </div>
  );
}
