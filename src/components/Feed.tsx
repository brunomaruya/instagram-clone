"use client";
import Post from "@/components/Post";
import { DataContext } from "@/contexts/DataContext";
import { IPost } from "@/interfaces/IPost";
import { isFollowingOrOwnPost } from "@/utils/userUtils";
import React, { useContext } from "react";

export default function Feed() {
  const { posts, currentUser } = useContext(DataContext);

  if (!currentUser) return null;

  return (
    <div>
      {posts
        .filter((post) => isFollowingOrOwnPost(post, currentUser))
        .map((post, index) => (
          <Post key={index} post={post} />
        ))}
    </div>
  );
}
