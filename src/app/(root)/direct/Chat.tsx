import React from "react";
import userImg from "../../../../public/assets/user.jpg";
import Image from "next/image";
import {
  InformationCircleIcon,
  PhoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className=" h-[75px] w-full flex justify-between items-center px-4">
      <div className="flex items-center gap-3  ">
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
  );
}

function Footer() {
  return (
    <footer className="w-full ">
      <form className="m-4 ">
        <input
          type="text"
          placeholder="Message..."
          className="bg-transparent rounded-full w-full p-4  border-[1px] border-white h-11  "
        />
      </form>
    </footer>
  );
}

export default function Chat() {
  return (
    <section className="w-full relative">
      <div className="fixed top-0 left-[calc(77px+380px)] right-0">
        <Header />
      </div>
      <div className="fixed bottom-0 left-[calc(77px+380px)] right-0">
        <Footer />
      </div>
    </section>
  );
}
