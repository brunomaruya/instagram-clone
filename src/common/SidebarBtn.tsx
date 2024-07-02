import { ISidebarBtn } from "@/interfaces/ISidebarBtn";
import React from "react";

export default function SidebarBtn({ name, icon }: ISidebarBtn) {
  return (
    <div className="flex items-center gap-3 text-xl p-3 my-1 hover:bg-[#1a1a1a] rounded-lg hover:cursor-pointer">
      <div className="size-7">{icon}</div>
      <span className="text-base">{name}</span>
    </div>
  );
}
