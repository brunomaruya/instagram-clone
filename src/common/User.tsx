import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import image from "../../public/assets/forest.jpg";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { getDateDiff } from "@/functions/getDateDiff";
import { follow } from "@/functions/firebaseFunctions";
import { DataContext } from "@/contexts/DataContext";
import { db } from "@/app/firebase";
import { query, collection, where, getDocs } from "firebase/firestore";

export default function User({
  type,
  name,
  date,
}: {
  type: "suggestion" | "post";
  name: string;
  date?: string;
}) {
  const { currentUser } = useContext(DataContext);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (currentUser) {
      if (currentUser.hasOwnProperty("following")) {
        setIsFollowing(currentUser.following.includes(name.toString()));
      }
    }
  }, [currentUser]);

  return (
    <>
      {currentUser ? (
        <header className="flex items-center gap-2  ">
          <Image
            width={500}
            height={500}
            src={image}
            alt="forest"
            className={` ${
              type == "suggestion" ? "h-12 w-12" : "h-10 w-10"
            } rounded-full cursor-pointer`}
          />
          <div className="flex-1 cursor-pointer">
            <span onClick={() => (window.location.href = `/${name}`)}>
              {name}
            </span>{" "}
            {type == "post" && (
              <span> {date ? "•" + getDateDiff(date) : ""}</span>
            )}
          </div>
          <div className="cursor-pointer">
            {type == "post" ? (
              <EllipsisHorizontalIcon className="h-8 w-8 cursor-pointer" />
            ) : (
              <span
                className="text-[#0072BD] text-xs"
                onClick={() => {
                  follow(currentUser.username, name);
                  setIsFollowing(true);
                }}
              >
                {isFollowing || currentUser.username === name ? "" : "• Follow"}
              </span>
            )}
          </div>
        </header>
      ) : (
        ""
      )}
    </>
  );
}
