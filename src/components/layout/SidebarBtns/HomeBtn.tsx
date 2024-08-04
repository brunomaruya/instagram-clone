"use client";
import SidebarBtn from "@/common/SidebarBtn";
import { SidebarIconContext } from "@/contexts/SidebarIconContext";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { HomeIcon as ActiveHomeIcon } from "@heroicons/react/16/solid";

export default function HomeBtn() {
  const { icon } = useContext(SidebarIconContext);
  const handleOnClick = () => {
    window.location.href = "/";
  };
  return (
    <SidebarBtn
      name="Home"
      icon={icon == "home" ? <ActiveHomeIcon /> : <HomeIcon />}
      onClick={handleOnClick}
    />
  );
}
