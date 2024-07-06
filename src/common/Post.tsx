import Image from "next/image";
import React from "react";
import image from "../../public/assets/forest.jpg";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChatBubbleOvalLeftIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  PaperAirplaneIcon,
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

      {/* FOOTER  */}
      <footer className="w-full">
        <div className="flex justify-between items-center w-full my-1">
          <div className="flex">
            <HeartIcon className="h-11 w-11 p-2" />
            <ChatBubbleOvalLeftIcon className="h-11 w-11 p-2" />
            <PaperAirplaneIcon className="h-11 w-11 p-2" />
          </div>
          <BookmarkIcon className="h-11 w-11 p-2" />
        </div>
      </footer>
    </div>
  );
}
