import Image from "next/image";
import React from "react";
import image from "../../public/assets/forest.jpg";
//  link: https://www.youtube.com/watch?v=v74SZBVMPa0

export default function Story() {
  return (
    <div className="flex flex-col items-center space-y-1 hover:cursor-pointer ">
      <div className="flex justify-center items-center bg-gradient-to-tr from-yellow-400 to-fuchsia-700  rounded-full p-[2.5px]">
        <div className="flex justify-center items-center bg-black p-[3px] rounded-full">
          <Image
            width={500}
            height={500}
            src={image}
            alt="forest"
            className="min-w-[56px] h-[56px] rounded-full"
          />
        </div>
      </div>
      <span className="text-xs">Forest</span>
    </div>
  );
}
