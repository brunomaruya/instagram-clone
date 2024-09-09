"use client";
import { RenderPostsSlide } from "@/components/PostsSlides";
import { DataContext } from "@/contexts/DataContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import Lightbox from "yet-another-react-lightbox";

export default function page() {
  const [selectedPostIndex, setSelectedPostIndex] = useState<number>(-1);
  const { posts } = useContext(DataContext);
  if (posts) {
    console.log(posts);
    return (
      <div className="ml-[335px] mt-10  ">
        <div className="grid grid-cols-3 gap-2 w-[967px] mx-auto  ">
          {posts.map((post: any, index: number) => (
            <Image
              onClick={() => setSelectedPostIndex(index)}
              src={post.url}
              width={500}
              height={500}
              alt="image"
              className="object-cover w-full h-full cursor-pointer"
            />
          ))}
        </div>
        <Lightbox
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
          open={selectedPostIndex >= 0}
          index={selectedPostIndex}
          close={() => setSelectedPostIndex(-1)}
          slides={posts}
          render={{
            slide: ({ slide }) => <RenderPostsSlide slide={slide} />,
          }}
        />
      </div>
    );
  }
}
