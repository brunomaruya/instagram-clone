"use client";
import Post from "@/components/Post";
import { DataContext } from "@/contexts/DataContext";
import React, { useContext } from "react";

export default function Feed() {
  const { posts, currentUser } = useContext(DataContext);

  const checkIfFollowing = (post: { username: string }) => {
    if (currentUser.following) {
      if (currentUser.following.includes(post.username)) {
        return true;
      } else if (post.username === currentUser.username) {
        return true;
      }
    } else if (post.username === currentUser.username) {
      return true;
    }
    return false;
  };

  return (
    <div>
      {currentUser ? (
        <>
          {posts.map((post: any, index: any) => {
            if (checkIfFollowing(post)) return <Post key={index} post={post} />;
          })}
        </>
      ) : null}
    </div>
  );
}
