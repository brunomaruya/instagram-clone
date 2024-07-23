"use client";
import SidebarBtn from "@/common/SidebarBtn";
import React, { useContext } from "react";

import { UserCircleIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon as Active } from "@heroicons/react/16/solid";
import { SidebarIconContext } from "@/contexts/SidebarIconContext";

export default function Profile() {
  const { icon, setIcon } = useContext(SidebarIconContext);
  const handleOnClick = () => {
    setIcon("profile");
  };
  return (
    <SidebarBtn
      name="Profile"
      icon={icon == "profile" ? <Active /> : <UserCircleIcon />}
      onClick={handleOnClick}
    />
  );
}
