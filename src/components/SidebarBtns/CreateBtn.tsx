"use client";
import SidebarBtn from "@/common/SidebarBtn";

import { PlusCircleIcon } from "@heroicons/react/24/outline";

import React from "react";

export default function CreateBtn() {
  const handleOnClick = () => {};
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
