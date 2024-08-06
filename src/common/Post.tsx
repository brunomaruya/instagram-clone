import Image from "next/image";
import React, { useContext } from "react";
import image from "../../public/assets/forest.jpg";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import User from "./User";
import { DataContext } from "@/contexts/DataContext";

export default function Post({ post }: any) {
  const { users } = useContext(DataContext);

  const postUser = () => {
    const obj = users.find(
      (user: { username: string }) => user.username === post.username
    );
    return obj;
  };

  return (
    <div className="w-full sm:w-[470px] mx-auto pb-4 mb-5 border-b-[1px] border-[#333333]">
      <header className="pb-3">
        <User user={postUser()} type="post" date={post.date} />
      </header>

      <main>
        <Image
          width={500}
          height={500}
          src={post.url.toString()}
          alt="forest"
          className="w-full sm:w-[468px] h-[580px] object-contain rounded-md"
        />
      </main>

      <footer className="w-full px-4 md:px-0 text-[14px] ">
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
          {post.username}
          <span> {post.caption}</span>
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
