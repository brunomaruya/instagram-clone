"use client";
import Post from "@/components/Post";
import { DataContext } from "@/contexts/DataContext";
import { IPost } from "@/interfaces/IPost";
import React, { useContext } from "react";

export default function Feed() {
  const { posts, currentUser } = useContext(DataContext);

  const checkIfFollowing = (post: IPost) => {
    const { following, username } = currentUser;
    return (
      post.username === username ||
      (following && following.includes(post.username))
    );
  };

  if (!currentUser) return null;

  return (
    <div>
      {posts.filter(checkIfFollowing).map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}
