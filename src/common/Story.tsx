import Image from "next/image";
import React from "react";
import image from "../../public/assets/forest.jpg";
//  link: https://www.youtube.com/watch?v=v74SZBVMPa0

export default function Story() {
  return (
    <div className="flex flex-col items-center space-y-1 ">
      <div className="flex justify-center items-center bg-gradient-to-tr from-yellow-400 to-fuchsia-700  rounded-full p-[2.3px]">
        <div className="flex justify-center items-center bg-black p-[2px] rounded-full">
          <Image
            width={500}
            height={500}
            src={image}
            alt="forest"
            className="w-14 h-14 rounded-full"
          />
        </div>
      </div>
      <span>Forest</span>
    </div>
  );
}
