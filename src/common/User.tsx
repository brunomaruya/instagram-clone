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

  function containsUsername(
    currentUser: { following: string[] },
    followingUser: string
  ) {
    const result = currentUser.following.includes(followingUser);
    return result;
  }

  useEffect(() => {
    if (currentUser && user) {
      if (currentUser.hasOwnProperty("following")) {
        setIsFollowing(containsUsername(currentUser, user.username));
      }
    }
  }, [currentUser]);

  const dateElement = <span> {date ? "• " + getDateDiff(date) : ""}</span>;
  const postCaseElement = (
    <EllipsisHorizontalIcon className="h-8 w-8 cursor-pointer" />
  );

  const currentUserCaseElement = (
    <Link href="/auth/login" className="text-blueText text-xs">
      Log out
    </Link>
  );

  const suggestionCaseElement = user && (
    <span
      className="text-blueText text-xs"
      onClick={(e) => {
        follow(currentUser.username, user.username);
        e.preventDefault();
        setIsFollowing(true);
      }}
    >
      {isFollowing || currentUser.username === user.username ? "" : "Follow"}
    </span>
  );
  return (
    <>
      {currentUser && user ? (
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
              {type == "post"
                ? postCaseElement
                : type === "currentUser"
                ? currentUserCaseElement
                : suggestionCaseElement}
            </div>
          </header>
        </Link>
      ) : null}
    </>
  );
}
