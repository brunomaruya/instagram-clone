"use client";
import Image from "next/image";
import React, { useContext } from "react";
import image from "../../../../../public/assets/forest.jpg";
import Btn from "@/common/Btn";
import {
  Cog6ToothIcon,
  EllipsisHorizontalIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import userImg from "../../../../../public/assets/user.jpg";

import { DataContext } from "@/contexts/DataContext";
import { EditProfileContext } from "./EditProfileContext";

export default function Header({ user }: { user: any }) {
  const { currentUser } = useContext(DataContext);
  const { openModal } = useContext(EditProfileContext);
  return (
    <>
      {currentUser ? (
        <div className="pt-[30px] px-[20px] flex mb-20">
          <div className="xl:w-[280px] mr-7 flex justify-center items-center">
            {currentUser.profilePicture ? (
              <Image
                className="rounded-full h-[100px] w-[100px] xl:h-[150px] xl:w-[150px] object-cover object-center"
                src={currentUser.profilePicture}
                width={500}
                height={500}
                alt="forest"
              />
            ) : (
              <Image
                className="rounded-full h-[100px] w-[100px]  h-[150px] w-[150px]"
                src={userImg}
                width={500}
                height={500}
                alt="forest"
              />
            )}
          </div>
          <div className="xl:w-[624px]">
            <div className="flex items-center gap-2 mb-6">
              {currentUser && currentUser.username === user.username ? (
                <div className="flex flex-col md:flex-row">
                  <div className="text-xl mr-6">{user.username}</div>
                  <div className="flex gap-1 flex-col sm:flex-row">
                    <div>
                      <Btn
                        onClick={() => {
                          openModal();
                          console.log("clicked");
                        }}
                        text="Edit profile"
                      />
                      <Btn text="View archive" />
                    </div>

                    <Cog6ToothIcon className="h-[30px] w-[30px]" />
                  </div>
                </div>
              ) : (
                <>
                  <div className="text-xl">{user.username}</div>
                  <Btn color="blue" text="Follow" />
                  <Btn text="Message" />
                  <Btn text={<UserPlusIcon className="h-[20px] w-[20px]" />} />
                  <EllipsisHorizontalIcon className="h-[30px] w-[30px]" />
                </>
              )}
            </div>
            <div className="flex gap-3 text-[16px] mb-5">
              <div>
                {currentUser.posts ? currentUser.posts.length : 0} posts
              </div>
              <div>
                {currentUser.followers ? currentUser.followers.length : 0}{" "}
                followers
              </div>
              <div>
                {currentUser.following ? currentUser.following.length : 0}{" "}
                following
              </div>
            </div>
            <div>
              <div>{user.name}</div>
              <div>{user.about}</div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
