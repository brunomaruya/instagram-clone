import { HomeIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function SidebarBtn() {
  return (
    <div className="flex items-center gap-3 text-xl p-3 hover:bg-[#1a1a1a] rounded-lg hover:cursor-pointer">
      <div className="size-7">
        <HomeIcon />
      </div>
      <span className="text-base">Pagina inicial</span>
    </div>
  );
}
