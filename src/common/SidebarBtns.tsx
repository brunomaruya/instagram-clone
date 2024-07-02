import React from "react";
import SidebarBtn from "./SidebarBtn";

export default function SidebarBtns({ items }: { items: any }) {
  return (
    <div>
      {items.map((item: any) => (
        <SidebarBtn name={item.name} icon={item.icon} />
      ))}
    </div>
  );
}
