import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import image from "../../public/assets/user.jpg";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { getDateDiff } from "@/utils/dateUtils";
import { follow, logout } from "@/app/services/firebase/firebaseService";
import { DataContext } from "@/contexts/DataContext";
import Link from "next/link";

interface IUser {
  username: string;
  profilePicture?: string;
}

const containsUsername = (
  currentUser: { following: string[] },
  followingUser: string
) => {
  return currentUser.following.includes(followingUser);
};

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

  useEffect(() => {
    if (currentUser && user) {
      if (currentUser.hasOwnProperty("following")) {
        setIsFollowing(containsUsername(currentUser, user.username));
      }
    }
  }, [currentUser, user]);

  const dateElement = date ? <span> • {getDateDiff(date)}</span> : null;

  const postCaseElement = (
    <EllipsisHorizontalIcon className="h-8 w-8 cursor-pointer" />
  );

  const currentUserCaseElement = (
    <button onClick={logout} className="text-blueText text-xs">
      Log out
    </button>
  );

  const suggestionCaseElement = user && (
    <span
      className="text-blueText text-xs cursor-pointer"
      onClick={(e) => {
        follow(currentUser.username, user.username);
        e.preventDefault();
        setIsFollowing(true);
      }}
    >
      {isFollowing || currentUser.username === user.username ? "" : "Follow"}
    </span>
  );

  const handleBlockClick = () => {
    // Navegação programática usando o Next.js
    window.location.href = `/${user.username}`;
  };

  return (
    <>
      {currentUser && user ? (
        <div
          onClick={handleBlockClick}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Image
            width={500}
            height={500}
            src={user.profilePicture ? user.profilePicture : image}
            alt="User profile picture"
            className={`${
              type === "suggestion" ? "h-12 w-12" : "h-10 w-10"
            } rounded-full object-cover`}
          />
          <div className="flex-1">
            <span>{user.username}</span> {type === "post" && dateElement}
          </div>
          <div>
            {type === "post"
              ? postCaseElement
              : type === "currentUser"
              ? currentUserCaseElement
              : suggestionCaseElement}
          </div>
        </div>
      ) : null}
    </>
  );
}
