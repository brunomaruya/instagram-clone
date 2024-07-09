import { HeartIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between px-4 h-[60px]  border-b-[1px] border-gray-500">
      <div className="logo  p-0">Instagram</div>
      <div className="flex space-x-2">
        <PlusCircleIcon className="h-7 w-7" />
        <HeartIcon className="h-7 w-7" />
      </div>
    </div>
  );
}
