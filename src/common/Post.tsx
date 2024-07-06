import Image from "next/image";
import React from "react";
import image from "../../public/assets/forest.jpg";
import {
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

export default function Post() {
  return (
    <div className="w-[470px] mx-auto">
      {/* HEADER  */}
      <header className="flex items-center gap-2 pb-3 ">
        <div>
          <Image
            width={500}
            height={500}
            src={image}
            alt="forest"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <div className="flex-1">
          <span>Forest</span> <span>• 2h</span>
        </div>
        <div>
          <EllipsisHorizontalIcon className="h-8 w-8" />
        </div>
      </header>

      {/* MAIN  */}
      <main>
        <Image
          width={500}
          height={500}
          src={image}
          alt="forest"
          className="w-[468px] h-[580px] object-cover rounded-md"
        />
      </main>

      <footer></footer>
    </div>
  );
}
