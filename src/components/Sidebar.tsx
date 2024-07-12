import InstagramLogo from "../common/InstagramLogo";

import React from "react";
import HomeBtn from "./SidebarBtns/HomeBtn";
import SearchBtn from "./SidebarBtns/SearchBtn";
import ExploreBtn from "./SidebarBtns/ExploreBtn";
import ReelsBtn from "./SidebarBtns/ReelsBtn";
import MessagesBtn from "./SidebarBtns/MessagesBtn";
import NotificationsBtn from "./SidebarBtns/NotificationsBtn";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <div className="mt-2 mb-5">
          <InstagramLogo />
        </div>
        <div>
          <HomeBtn />
          <SearchBtn />
          <ExploreBtn />
          <ReelsBtn />
          <MessagesBtn />
          <NotificationsBtn />
        </div>
      </div>
      <div>{/* bottom */}</div>
    </div>
  );
}
