"use client";
import React, { useEffect, useState } from "react";
import SidebarBtn from "./SidebarBtn";
import { ISidebarBtn } from "@/interfaces/ISidebarBtn";
import { usePathname } from "next/navigation";
import { ISidebarBtnsArr } from "@/interfaces/ISidebarBtnsArr";

//Check active links: https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating

export default function SidebarBtns({ items }: { items: ISidebarBtnsArr[] }) {
  const pathname = usePathname();
  const [currentIcon, setCurrentIcon] = useState(pathname);

  useEffect(() => {
    setCurrentIcon(pathname);
  }, []);

  return (
    <div>
      {items.map((item: ISidebarBtnsArr) => (
        <div
          onClick={() => {
            item.function;
            setCurrentIcon(item.pathname);
          }}
        >
          <SidebarBtn
            name={item.name}
            icon={currentIcon == item.pathname ? item.activeIcon : item.icon}
          />
        </div>
      ))}
    </div>
  );
}
