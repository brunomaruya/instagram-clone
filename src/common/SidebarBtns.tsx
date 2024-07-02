import React from "react";
import SidebarBtn from "./SidebarBtn";

import { ISidebarBtn } from "@/interfaces/ISidebarBtn";

export default function SidebarBtns({ items }: { items: ISidebarBtn[] }) {
  return (
    <div>
      {items.map((item: ISidebarBtn) => (
        <SidebarBtn name={item.name} icon={item.icon} />
      ))}
    </div>
  );
}
