"use client";
import SidebarBtn from "@/components/SidebarBtn";
import { SidebarIconContext } from "@/contexts/SidebarIconContext";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import { PlayCircleIcon as Active } from "@heroicons/react/16/solid";

export default function ReelsBtn() {
  const { icon } = useContext(SidebarIconContext);
  const handleOnClick = () => {
    window.location.href = "/reels";
  };
  return (
    <SidebarBtn
      name="Reels"
      icon={icon == "reels" ? <Active /> : <PlayCircleIcon />}
      onClick={handleOnClick}
    />
  );
}
