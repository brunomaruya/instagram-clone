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
    return (
      <section className="ml-0 md:ml-mediumSidebarWidth 2xl:ml-largeSidebarWidth">
        <div className="mt-10 max-w-5xl w-full mx-auto ">
          <ul className="grid grid-cols-3 gap-2  mx-auto  ">
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
          </ul>
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
      </section>
    );
  }
}
