"use client";
import SidebarBtn from "@/common/SidebarBtn";
import { SidebarIconContext } from "@/contexts/SidebarIconContext";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import { GlobeAltIcon as ActiveHomeIcon } from "@heroicons/react/16/solid";

export default function ExploreBtn() {
  const { icon } = useContext(SidebarIconContext);
  const handleOnClick = () => {
    window.location.href = "/explore";
  };
  return (
    <SidebarBtn
      name="Explore"
      icon={icon == "explore" ? <ActiveHomeIcon /> : <GlobeAltIcon />}
      onClick={handleOnClick}
    />
  );
}
