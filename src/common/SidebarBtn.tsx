import { ISidebarBtn } from "@/interfaces/ISidebarBtn";
import React from "react";

export default function SidebarBtn({ name, icon }: ISidebarBtn) {
  return (
    <div className="sidebarBtn">
      <div className="size-7">{icon}</div>
      <span className="text-base hidden 2xl:block">{name}</span>
    </div>
  );
}
