"use client";
import SidebarBtn from "@/common/SidebarBtn";
import { PostModalContext } from "@/contexts/PostModalContext";

import { PlusCircleIcon } from "@heroicons/react/24/outline";

import React, { useContext } from "react";

export default function CreateBtn() {
  const { setIsModalOpen } = useContext(PostModalContext);
  const handleOnClick: any = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <SidebarBtn
        onClick={handleOnClick}
        name="Create"
        icon={<PlusCircleIcon />}
      />
    </>
  );
}
