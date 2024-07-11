import InstagramLogo from "../common/InstagramLogo";

import React from "react";
import HomeBtn from "./SidebarBtns/HomeBtn";
import SearchBtn from "./SidebarBtns/SearchBtn";

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
        </div>
      </div>
      <div>{/* bottom */}</div>
    </div>
  );
}
