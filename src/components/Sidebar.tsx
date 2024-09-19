"use client";
import InstagramLogo from "@/components/InstagramLogo";
import CreateBtn from "./SidebarBtns/CreateBtn";
import ExploreBtn from "./SidebarBtns/ExploreBtn";
import HomeBtn from "./SidebarBtns/HomeBtn";
import MessagesBtn from "./SidebarBtns/MessagesBtn";
import NotificationsBtn from "./SidebarBtns/NotificationsBtn";
import Profile from "./SidebarBtns/Profile";
import ReelsBtn from "./SidebarBtns/ReelsBtn";
import SearchBtn from "./SidebarBtns/SearchBtn";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const isChatOpen = () => {
    if (pathname.length > 7 && pathname.includes("direct")) {
      return true;
    }
  };
  return (
    <div
      className={`fixed h-screen px-3 pt-2 pb-5 hidden md:flex flex-col justify-between  !border-r-[1px] !border-grayBorder2 ${
        pathname === "/direct" || isChatOpen()
          ? "2xl:min-w-fit  "
          : "2xl:min-w-largeSidebarWidth"
      }`}
    >
      <div>
        <header className="mt-2 mb-5">
          <InstagramLogo />
        </header>
        <div>
          <HomeBtn />
          <SearchBtn />
          <ExploreBtn />
          <ReelsBtn />
          <MessagesBtn />
          <NotificationsBtn />
          <CreateBtn />
          <Profile />
        </div>
      </div>
    </div>
  );
}
