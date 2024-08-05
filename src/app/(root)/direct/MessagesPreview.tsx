import React from "react";
import userImg from "../../../../public/assets/user.jpg";
import Image from "next/image";

function Preview() {
  return (
    <div className="flex gap-3 py-2 px-6 hover:bg-[#262626] cursor-pointer ">
      <Image
        src={userImg}
        alt=""
        width={500}
        height={500}
        className="w-14 h-14 rounded-full"
      />
      <div className=" flex-col justify-between hidden lg:flex">
        <div>{"Name"}</div>
        <div className="text-sm text-gray-300">
          {"last message"} • {"10m"}
        </div>
      </div>
    </div>
  );
}

export default function MessagesPreview() {
  return (
    <section className="min-w-[120px] lg:min-w-[380px] border-r-white border-r-[1px]">
      <h1 className="pt-[14px] px-6 pb-[10px] hidden lg:block">Messages</h1>
      <div className="flex flex-col items-center">
        <Preview />
        <Preview />
        <Preview />
      </div>
    </section>
  );
}
