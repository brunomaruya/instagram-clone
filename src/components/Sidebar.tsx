import InstagramLogo from "../common/InstagramLogo";
import SidebarBtns from "../common/SidebarBtns";
import React from "react";
import { sidebarBtnsArr, sidebarBtnsArr2 } from "@/constants/SidebarBtnsArr";

export default function Sidebar() {
  return (
    <div className="lg:w-[244px] xl:w-[335px] h-screen px-3 pt-2 pb-5 flex flex-col justify-between  border-r-[1px] border-[#1a1a1a]">
      <div className="">
        <div className="mt-2 mb-5">
          <InstagramLogo />
        </div>
        <div>
          <SidebarBtns items={sidebarBtnsArr} />
        </div>
      </div>

      <div>
        <SidebarBtns items={sidebarBtnsArr2} />
      </div>
    </div>
  );
}
