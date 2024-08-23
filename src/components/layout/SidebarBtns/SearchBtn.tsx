"use client";
import SidebarBtn from "@/common/SidebarBtn";
import { SidebarIconContext } from "@/contexts/SidebarIconContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon as ActiveMagnifyingGlassIcon } from "@heroicons/react/16/solid";
import React, { useContext } from "react";

export default function SearchBtn() {
  const { icon, setIcon } = useContext(SidebarIconContext);
  const handleOnClick = () => {
    setIcon("search");
  };
  return (
    <SidebarBtn
      onClick={handleOnClick}
      name="Search"
      notAllowed={true}
      icon={
        icon == "search" ? (
          <ActiveMagnifyingGlassIcon />
        ) : (
          <MagnifyingGlassIcon />
        )
      }
    />
  );
}
