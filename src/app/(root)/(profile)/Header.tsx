"use client";
import Image from "next/image";
import React from "react";
import image from "../../../../public/assets/forest.jpg";
import Btn from "@/common/Btn";
import {
  EllipsisHorizontalIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

export default function Header({ user }: { user: any }) {
  return (
    <div className="pt-[30px] px-[20px] flex">
      <div className="w-[280px] mr-7 flex justify-center items-center">
        <Image
          className="rounded-full h-[150px] w-[150px]"
          src={image}
          width={500}
          height={500}
          alt="forest"
        />
      </div>
      <div className="w-[624px]">
        <div className="flex items-center gap-2 mb-6">
          <div className="text-xl">{user.username}</div>
          <Btn color="blue" text="Follow" />
          <Btn text="Message" />
          <Btn text={<UserPlusIcon className="h-[20px] w-[20px]" />} />
          <EllipsisHorizontalIcon className="h-[30px] w-[30px]" />
        </div>
        <div className="flex gap-3 text-[16px] mb-5">
          <div>xxx posts</div>
          <div>xxx followers</div>
          <div>xxx following</div>
        </div>
        <div>
          <div>{user.name}</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A sapiente
            minima deleniti hic odio dolorem laboriosam vel accusamus nobis? Aut
            modi adipisci ratione. Dolorum, aspernatur pariatur quaerat nemo
            odio accusantium.
          </div>
        </div>
      </div>
    </div>
  );
}
