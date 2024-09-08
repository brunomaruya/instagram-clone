"use client";
import SidebarBtn from "@/components/SidebarBtn";
import { SidebarIconContext } from "@/contexts/SidebarIconContext";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import { ChatBubbleOvalLeftEllipsisIcon as Active } from "@heroicons/react/16/solid";

export default function MessagesBtn() {
  const { icon } = useContext(SidebarIconContext);
  const handleOnClick = () => {
    window.location.href = "/direct";
  };
  return (
    <SidebarBtn
      name="Messages"
      icon={
        icon == "messages" ? <Active /> : <ChatBubbleOvalLeftEllipsisIcon />
      }
      onClick={handleOnClick}
    />
  );
}
