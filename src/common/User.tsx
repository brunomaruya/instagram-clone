import Image from "next/image";
import React from "react";
import image from "../../public/assets/forest.jpg";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

export default function User({ type }: { type: "suggestion" | "post" }) {
  return (
    <header className="flex items-center gap-2  ">
      <Image
        width={500}
        height={500}
        src={image}
        alt="forest"
        className={` ${
          type == "suggestion" ? "h-12 w-12" : "h-10 w-10"
        } rounded-full cursor-pointer`}
      />
      <div className="flex-1 cursor-pointer">
        <span>Forest</span> {type == "post" && <span>• 2h</span>}
      </div>
      <div className="cursor-pointer">
        {type == "post" ? (
          <EllipsisHorizontalIcon className="h-8 w-8 cursor-pointer" />
        ) : (
          <span className="text-[#0072BD] text-xs">Follow</span>
        )}
      </div>
    </header>
  );
}
