"use client";
import EditProfileContextProvider from "@/contexts/EditProfileContext";
import DataContextProvider from "@/contexts/DataContext";
import PostsModalContextProvider from "@/contexts/PostModalContext";
import PostsContextProvider from "@/contexts/PostsContext";
import SidebarIconContextProvider from "@/contexts/SidebarIconContext";

import React, { ReactNode } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { MessageProvider } from "@/contexts/MessageContext";

export default function MainProvider({ children }: { children: ReactNode }) {
  return (
    <div>
      <DataContextProvider>
        <AuthProvider>
          <SidebarIconContextProvider>
            <PostsContextProvider>
              <PostsModalContextProvider>
                <EditProfileContextProvider>
                  <MessageProvider>{children}</MessageProvider>
                </EditProfileContextProvider>
              </PostsModalContextProvider>
            </PostsContextProvider>
          </SidebarIconContextProvider>
        </AuthProvider>
      </DataContextProvider>
    </div>
  );
}
