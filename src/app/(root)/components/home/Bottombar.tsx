import React from "react";
import { bottomBarBtns } from "@/constants/BottombarBtns";

export default function Bottombar() {
  return (
    <div className="bg-black flex justify-around items-center h-12 border-t-[1px] border-gray-500">
      {bottomBarBtns.map((button, index) => (
        <div key={index} className="h-6 w-6">
          {button.icon}
        </div>
      ))}
    </div>
  );
}
