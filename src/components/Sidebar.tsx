import InstagramLogo from "../common/InstagramLogo";
import SidebarBtns from "../common/SidebarBtns";
import React from "react";

export default function Sidebar() {
  return (
    <div className="">
      <div>
        <InstagramLogo />
      </div>
      <div>
        <SidebarBtns />
      </div>
    </div>
  );
}
