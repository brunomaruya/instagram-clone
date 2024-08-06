"use client";
import * as React from "react";
import "yet-another-react-lightbox/styles.css";

import { Slide, PostsSlide } from "yet-another-react-lightbox";
import Image from "next/image";
import User from "./User";
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import { getDateDiff } from "@/functions/getDateDiff";

declare module "yet-another-react-lightbox" {
  export interface PostsSlide {
    type: "posts-slide";
    url: string;
    username: string;
    profilePicture?: string;
    caption?: string;
    isFollowing: boolean;
    isLiked: boolean;
    isSaved: boolean;
    usersWhoLiked: string;
  }
  interface SlideTypes {
    "posts-slide": PostsSlide;
  }
}

export function isPostSlide(slide: Slide): slide is PostsSlide {
  return slide.type === "posts-slide";
}

export function RenderPostsSlide({ slide }: { slide: any }) {
  const [comment, setComment] = React.useState("");

  return (
    <>
      {slide ? (
        <div className="flex h-[90%] bg-black ">
          <Image
            className="object-contain"
            src={slide.url}
            width={500}
            height={500}
            alt="post"
          />
          <div className="w-[500px] relative">
            <div className="p-4 border-b-white border-b-[1px]">
              <User user={slide.user} type="post" />
            </div>
            <div className="p-4">{slide.caption}</div>

            <div className="absolute bottom-0 w-full  ">
              <div className="border-white border-t-[1px] border-b-[1px] px-4 py-2">
                <div className="flex justify-between items-center w-full my-1 ">
                  <div className="flex">
                    <HeartIcon className="h-11 w-11 p-2 cursor-pointer" />
                    <ChatBubbleOvalLeftIcon className="h-11 w-11 p-2 cursor-pointer" />
                    <PaperAirplaneIcon className="h-11 w-11 p-2 cursor-pointer" />
                  </div>
                  <BookmarkIcon className="h-11 w-11 p-2 cursor-pointer" />
                </div>
                <div>Liked by ... and others</div>
                <div className="text-sm">
                  {" "}
                  {getDateDiff(slide.date) + " ago"}
                </div>
              </div>
              <div className="flex p-4">
                <input
                  onChange={(e) => setComment(e.target.value)}
                  type="text"
                  placeholder="Add a comment"
                  className="bg-transparent w-full focus:outline-none"
                />
                <button
                  className={`${
                    comment.length > 0 ? "text-blue-500" : "text-blue-950"
                  }`}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
