"use client";
import React from "react";
import SidebarBtn from "./SidebarBtn";
import { ISidebarBtn } from "@/interfaces/ISidebarBtn";
import { usePathname } from "next/navigation";
import { ISidebarBtnsArr } from "@/interfaces/ISidebarBtnsArr";

//Check active links: https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating

export default function SidebarBtns({ items }: { items: ISidebarBtnsArr[] }) {
  const pathname = usePathname();
  return (
    <div>
      {items.map((item: ISidebarBtnsArr) => (
        <div onClick={item.function}>
          <SidebarBtn name={item.name} icon={item.icon} />
        </div>
      ))}
    </div>
  );
}
