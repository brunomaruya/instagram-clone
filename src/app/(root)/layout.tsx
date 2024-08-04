import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import MainProvider from "@/providers/MainProvider";
import EditProfileModal from "./(profile)/[user]/EditProfileModal";
import Sidebar from "@/components/layout/Sidebar";
import CreatePostModal from "@/components/layout/CreatePostModal";
import PostsSlides from "@/common/PostsSlides";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instagram",
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
            <div className="w-full ml-0 md:ml-[76px]  xl:ml-[244px] 2xl:ml-[335px]">
              {children}
            </div>
          </div>
        </MainProvider>
      </body>
    </html>
  );
}
