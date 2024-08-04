"use client";
import SidebarBtn from "@/common/SidebarBtn";
import { SidebarIconContext } from "@/contexts/SidebarIconContext";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as Active } from "@heroicons/react/16/solid";
import React, { useContext } from "react";

export default function NotificationsBtn() {
  const { icon, setIcon } = useContext(SidebarIconContext);
  const handleOnClick = () => {
    setIcon("notifications");
  };
  return (
    <SidebarBtn
      onClick={handleOnClick}
      name="Notifications"
      icon={icon == "notifications" ? <Active /> : <HeartIcon />}
    />
  );
}
