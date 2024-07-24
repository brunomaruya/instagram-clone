"use client";
import SidebarBtn from "@/common/SidebarBtn";
import React, { useContext } from "react";

import { UserCircleIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon as Active } from "@heroicons/react/16/solid";
import { SidebarIconContext } from "@/contexts/SidebarIconContext";
import { UserContext } from "@/contexts/UserContext";

export default function Profile() {
  const { icon, setIcon } = useContext(SidebarIconContext);
  const { currentUser } = useContext(UserContext);
  const handleOnClick = () => {
    setIcon("profile");
    window.location.pathname = `/${currentUser.username}`;
  };
  return (
    <SidebarBtn
      name="Profile"
      icon={icon == "profile" ? <Active /> : <UserCircleIcon />}
      onClick={handleOnClick}
    />
  );
}
