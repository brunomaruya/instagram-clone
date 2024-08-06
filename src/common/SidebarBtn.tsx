"use client";
import { ISidebarBtn } from "@/interfaces/ISidebarBtn";
import { usePathname } from "next/navigation";
import React from "react";

export default function SidebarBtn({ name, icon, onClick }: ISidebarBtn) {
  const pathname = usePathname();

  const isChatOpen = () => {
    if (pathname.length > 7 && pathname.includes("direct")) {
      return true;
    }
  };

  return (
    <div className="sidebarBtn" onClick={onClick}>
      <div className="size-7">{icon}</div>

      <span
        className={`text-base hidden 2xl:block ${
          pathname === "/direct" || isChatOpen() ? "2xl:hidden" : ""
        }`}
      >
        {name}
      </span>
    </div>
  );
}
