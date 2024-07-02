import React from "react";
import SidebarBtn from "./SidebarBtn";
import { SidebarBtnArr } from "@/constants/SidebarBtnsArr";

export default function SidebarBtns() {
  return (
    <div>
      {SidebarBtnArr.map((item) => (
        <SidebarBtn name={item.name} icon={item.icon} />
      ))}
    </div>
  );
}
