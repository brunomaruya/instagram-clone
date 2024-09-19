import React from "react";
import { bottomBarBtns } from "@/constants/BottombarBtns";
import HomeBtn from "./SidebarBtns/HomeBtn";
import SearchBtn from "./SidebarBtns/SearchBtn";
import CreateBtn from "./SidebarBtns/CreateBtn";
import MessagesBtn from "./SidebarBtns/MessagesBtn";
import Profile from "./SidebarBtns/Profile";

export default function Bottombar() {
  return (
    <section className="bg-black flex justify-around items-center h-12 border-t-[1px] border-gray-500">
      <HomeBtn />
      <SearchBtn />
      <CreateBtn />
      <MessagesBtn />
      <Profile />
    </section>
  );
}
