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
    <header className=" h-[75px] w-full flex justify-between items-center px-4 border-b-[1px] border-white">
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
    <footer className="w-full  ">
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

function Message({
  sentUser,
  text,
}: {
  sentUser: "me" | "friend";
  text: string;
}) {
  return (
    <div className={`w-full mb-2`}>
      <div
        className={`flex gap-2 items-center  mx-4  ${
          sentUser === "me" ? "justify-end" : ""
        }`}
      >
        <Image
          className={`w-7 h-7 rounded-2xl ${sentUser === "me" ? "hidden" : ""}`}
          src={userImg}
          alt=""
          width={500}
          height={50}
        />
        <div
          className={`${
            sentUser === "me" ? "bg-[#3797F0] " : "bg-[#262626]"
          } py-[7px] px-3 w-fit rounded-full `}
        >
          <div> {text}</div>
        </div>
      </div>
    </div>
  );
}

export default function Chat() {
  return (
    <section className="w-full relative">
      <div className="fixed top-0 left-[120px]  md:left-[calc(77px+120px)]  lg:left-[calc(77px+380px)] right-0">
        <Header />
      </div>

      <div className="absolute bottom-[48px+76px] md:bottom-[76px] left-0 right-0 ">
        <Message sentUser="friend" text="Hello" />
        <Message sentUser="me" text="Hello" />
      </div>

      <div className="fixed bottom-12  md:bottom-0 left-[120px] md:left-[calc(77px+120px)] lg:left-[calc(77px+380px)] right-0">
        <Footer />
      </div>
    </section>
  );
}
