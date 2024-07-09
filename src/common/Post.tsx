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
import User from "./User";

export default function Post() {
  return (
    <div className="w-[400px] md:w-[470px] mx-auto pb-4 mb-5 border-b-[1px] border-[#333333]">
      {/* HEADER  */}
      <div className="pb-3">
        <User type="post" />
      </div>

      {/* MAIN  */}
      <main>
        <Image
          width={500}
          height={500}
          src={image}
          alt="forest"
          className="md:w-[468px] h-[580px] object-cover rounded-md"
        />
      </main>

      {/* FOOTER  */}
      <footer className="w-full">
        <div className="flex justify-between items-center w-full my-1">
          <div className="flex">
            <HeartIcon className="h-11 w-11 p-2 cursor-pointer" />
            <ChatBubbleOvalLeftIcon className="h-11 w-11 p-2 cursor-pointer" />
            <PaperAirplaneIcon className="h-11 w-11 p-2 cursor-pointer" />
          </div>
          <BookmarkIcon className="h-11 w-11 p-2 cursor-pointer" />
        </div>
        <div>Curtido por aaaaa e outras pessoas</div>
        <div className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          nulla, rem illum dicta porro ipsum soluta aperiam architecto dolorem
          voluptatum quo incidunt dignissimos mollitia optio tenetur fuga non
          nam expedita.
        </div>
        <div className="mt-2">Ver todos os comentários</div>
        <input
          type="text"
          placeholder="Adicione um comentário..."
          className="bg-transparent focus:outline-none mt-2"
        />
      </footer>
    </div>
  );
}
