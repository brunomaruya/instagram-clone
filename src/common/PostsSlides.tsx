"use client";
import * as React from "react";
import "yet-another-react-lightbox/styles.css";

import Lightbox, {
  Slide,
  PostsSlide,
  useLightboxState,
} from "yet-another-react-lightbox";

declare module "yet-another-react-lightbox" {
  export interface PostsSlide {
    type: "posts-slide";
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
export const slides: PostsSlide[] = [
  {
    type: "posts-slide",
    username: "string",
    profilePicture: "string",
    caption: "string",
    isFollowing: false,
    isLiked: false,
    isSaved: false,
    usersWhoLiked: "string",
  },
  {
    type: "posts-slide",
    username: "string",
    profilePicture: "string",
    caption: "string",
    isFollowing: false,
    isLiked: false,
    isSaved: false,
    usersWhoLiked: "string",
  },
];

export function RenderPostsSlide({ slide }: { slide: any }) {
  const index = slides.findIndex((el) => el === slide);

  return <div>{slide.username}</div>;
}

export default function PostsSlides() {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(-1);

  return (
    <div>
      <h1>PostsSlides</h1>
      <Lightbox
        className=""
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        render={{
          slide: ({ slide }) =>
            isPostSlide(slide) ? <RenderPostsSlide slide={slide} /> : null,
        }}
        carousel={{ preload: 1, padding: 0 }}
      />
      <button onClick={() => setOpen(true)}>Open Lightbox</button>
    </div>
  );
}
