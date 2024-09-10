"use client";
import { RenderPostsSlide } from "@/components/PostsSlides";
import { DataContext } from "@/contexts/DataContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Lightbox, { PostsSlide } from "yet-another-react-lightbox";
import { getUserPostsByUsername } from "@/app/services/firebase/postServices";
import { IPost } from "@/interfaces/IPost";

export default function Posts({ username }: { username: string }) {
  const [userPosts, setUserPosts] = useState<PostsSlide[]>([]);
  const [selectedPostIndex, setSelectedPostIndex] = useState<number>(-1);
  const { posts } = useContext(DataContext);

  useEffect(() => {
    getUserPostsByUsername(username, posts, setUserPosts);
  }, []);

  return (
    <section className="border-t-grayBg border-t-[1px] w-full flex flex-col items-center">
      <header className="h-[52px] flex items-center">Posts</header>
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        open={selectedPostIndex >= 0}
        index={selectedPostIndex}
        close={() => setSelectedPostIndex(-1)}
        slides={userPosts}
        render={{
          slide: ({ slide }) => <RenderPostsSlide slide={slide} />,
        }}
      />
      {userPosts && userPosts.length > 0 ? (
        <ul className="grid grid-cols-3 w-full">
          {userPosts.map((post, index) => (
            <Image
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setSelectedPostIndex(index)}
              alt={`Post ${index}`}
              src={post.url}
              key={index}
              height={500}
              width={500}
            />
          ))}
        </ul>
      ) : (
        <p>No posts available</p>
      )}
    </section>
  );
}
