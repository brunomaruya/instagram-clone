import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import image from "../../public/assets/user.jpg";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { getDateDiff } from "@/functions/getDateDiff";
import { follow } from "@/functions/firebaseFunctions";
import { DataContext } from "@/contexts/DataContext";
import Link from "next/link";

export default function User({
  type,
  user,
  date,
}: {
  type: "suggestion" | "post" | "currentUser";
  user: any;
  date?: string;
}) {
  const { currentUser } = useContext(DataContext);
  const [isFollowing, setIsFollowing] = useState(false);

  function containsObject(obj: any, list: any[]) {
    var i;

    for (i = 0; i < list.length; i++) {
      if (list[i].username === obj?.username) {
        return true;
      }
    }

    return false;
  }

  useEffect(() => {
    if (currentUser) {
      if (currentUser.hasOwnProperty("following")) {
        setIsFollowing(containsObject(user, currentUser.following));
      }
    }
  }, [currentUser]);

  return (
    <>
      {user ? (
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
                  <span>{user.username}</span>{" "}
                  {type == "post" && (
                    <span> {date ? "• " + getDateDiff(date) : ""}</span>
                  )}
                </div>
                <div className="cursor-pointer">
                  {type == "post" ? (
                    <EllipsisHorizontalIcon className="h-8 w-8 cursor-pointer" />
                  ) : (
                    <>
                      {type === "currentUser" ? (
                        ""
                      ) : (
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
                  )}
                </div>
              </header>
            </Link>
          ) : (
            ""
          )}
        </>
      ) : null}
    </>
  );
}
