import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import image from "../../public/assets/user.jpg";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { getDateDiff } from "@/functions/getDateDiff";
import { follow } from "@/functions/firebaseFunctions";
import { DataContext } from "@/contexts/DataContext";
import Link from "next/link";

interface IUser {
  username: string;
  profilePicture?: string;
}

export default function User({
  type,
  user,

  date,
}: {
  type: "suggestion" | "post" | "currentUser";
  user: IUser;
  date?: string;
}) {
  const { currentUser } = useContext(DataContext);
  const [isFollowing, setIsFollowing] = useState(false);

  // function containsObject(obj: any, list: any[]) {
  //   var i;
  //   for (i = 0; i < list.length; i++) {
  //     if (list[i].username === obj?.username) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // useEffect(() => {
  //   if (currentUser) {
  //     if (currentUser.hasOwnProperty("following")) {
  //       setIsFollowing(containsObject(username, currentUser.following));
  //     }
  //   }
  // }, [currentUser]);

  const dateElement = <span> {date ? "• " + getDateDiff(date) : ""}</span>;
  const postCaseElement = (
    <EllipsisHorizontalIcon className="h-8 w-8 cursor-pointer" />
  );
  const notCurrentUserCaseElement = (
    <>
      {type === "currentUser" ? null : (
        <span
          className="text-[#0072BD] text-xs"
          onClick={() => {
            follow(currentUser.username, user.username);
            setIsFollowing(true);
          }}
        >
          {isFollowing || currentUser.username === user.username
            ? ""
            : "Follow"}
        </span>
      )}
    </>
  );
  return (
    <>
      {currentUser ? (
        <Link href={`/${user.username}`}>
          <header className="flex items-center gap-2  ">
            <Image
              width={500}
              height={500}
              src={user.profilePicture ? user.profilePicture : image}
              alt="forest"
              className={` ${
                type == "suggestion" ? "h-12 w-12" : "h-10 w-10"
              } rounded-full cursor-pointer object-cover`}
            />
            <div className="flex-1 cursor-pointer">
              <span>{user.username}</span> {type == "post" && dateElement}
            </div>
            <div className="cursor-pointer">
              {type == "post" ? postCaseElement : notCurrentUserCaseElement}
            </div>
          </header>
        </Link>
      ) : null}
    </>
  );
}
