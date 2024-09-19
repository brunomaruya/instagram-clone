import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import MainProvider from "@/providers/MainProvider";
import EditProfileModal from "../../components/modals/EditProfileModal";

import Bottombar from "@/components/Bottombar";
import Sidebar from "../../components/Sidebar";
import CreatePostModal from "../../components/modals/CreatePostModal";

export const metadata: Metadata = {
  title: {
    template: "Instagram-clone | %s  ",
    default: "Instagram-clone",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainProvider>
          <CreatePostModal />
          <EditProfileModal />
          <div className="flex justify-between scroll-p-0 ">
            <Sidebar />
            <div className="w-full   ">{children}</div>
            <div className="fixed bottom-0 w-full md:hidden ">
              <Bottombar />
            </div>
          </div>
        </MainProvider>
      </body>
    </html>
  );
}
