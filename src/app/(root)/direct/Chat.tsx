import React from "react";
import userImg from "../../../../public/assets/user.jpg";
import Image from "next/image";
import {
  InformationCircleIcon,
  PhoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

export default function Chat() {
  return (
    <section className="w-full">
      <header className="flex justify-between h-[75px] items-center">
        <div className="flex items-center gap-3">
          <Image
            src={userImg}
            alt=""
            width={500}
            height={500}
            className="w-14 h-14 rounded-full"
          />
          <div className="font-bold">{"Name"}</div>
        </div>
        <div className="flex">
          <div className="p-2">
            <PhoneIcon className="size-6 " />
          </div>
          <div className="p-2">
            <VideoCameraIcon className="size-6 " />
          </div>
          <div className="p-2">
            <InformationCircleIcon className="size-6 " />
          </div>
        </div>
      </header>
    </section>
  );
}
