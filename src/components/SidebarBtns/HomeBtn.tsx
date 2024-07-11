"use client";
import SidebarBtn from "@/common/SidebarBtn";
import { HomeIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function HomeBtn() {
  const handleOnClick = () => {
    window.location.href = "/";
  };
  return (
    <div onClick={handleOnClick}>
      <SidebarBtn name="home" icon={<HomeIcon />} />
    </div>
  );
}
