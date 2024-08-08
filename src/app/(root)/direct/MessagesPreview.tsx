"use client";
import React, { useContext } from "react";
import userImg from "../../../../public/assets/user.jpg";
import Image from "next/image";
import { DataContext } from "@/contexts/DataContext";
import Link from "next/link";

function Preview({ user }: { user: any }) {
  return (
    <Link className="w-full" href={`/direct/${user.username}`}>
      <div className="flex gap-3 py-2 px-6 hover:bg-[#262626] cursor-pointer w-full ">
        <Image
          src={user.profilePicture ? user.profilePicture : userImg}
          alt=""
          width={500}
          height={500}
          className="w-14 h-14 rounded-full"
        />
        <div className=" flex-col justify-between hidden lg:flex">
          <div>{user.username}</div>
          <div className="text-sm text-gray-300">
            {"last message"} • {"10m"}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function MessagesPreview() {
  const { currentUser, users } = useContext(DataContext);

  const followingUsers = () => {
    const result = users.filter((user: { username: string }) => {
      if (currentUser.following) {
        return currentUser.following.includes(user.username);
      } else if (currentUser.followers) {
        return currentUser.followers?.includes(user.username);
      }
    });

    return result;
  };
  return (
    <>
      {currentUser ? (
        <section className=" min-w-[120px] lg:min-w-[380px] border-r-white border-r-[1px]">
          <h1 className="pt-[14px] px-6 pb-[10px] hidden lg:block">Messages</h1>
          <div className="flex flex-col items-center">
            {followingUsers().map((user: any, index: number) => {
              return <Preview user={user} key={index} />;
            })}
          </div>
        </section>
      ) : null}
    </>
  );
}
