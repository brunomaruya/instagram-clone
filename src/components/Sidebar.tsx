import InstagramLogo from "../common/InstagramLogo";
import SidebarBtns from "../common/SidebarBtns";
import React from "react";

export default function Sidebar() {
  return (
    <div className="w-[244px] h-screen px-3 pt-2 pb-5  border-r-[1px] border-[#1a1a1a]">
      <div className="mb-5">
        <InstagramLogo />
      </div>
      <div>
        <SidebarBtns />
      </div>
    </div>
  );
}
