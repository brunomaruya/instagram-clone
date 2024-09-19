"use client";
import SidebarBtn from "@/components/SidebarBtn";
import { PostModalContext } from "@/contexts/PostModalContext";

import { PlusCircleIcon } from "@heroicons/react/24/outline";

import React, { useContext } from "react";

export default function CreateBtn() {
  const { setIsModalOpen, openModal } = useContext(PostModalContext);
  const handleOnClick: any = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <SidebarBtn onClick={openModal} name="Create" icon={<PlusCircleIcon />} />
    </>
  );
}
