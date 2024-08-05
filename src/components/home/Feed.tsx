"use client";
import Post from "@/common/Post";
import { DataContext } from "@/contexts/DataContext";
import React, { useContext } from "react";

export default function Feed() {
  const { posts, currentUser } = useContext(DataContext);

  function containsObject(obj: any, list: any[]) {
    var i;

    if (list) {
      for (i = 0; i < list.length; i++) {
        console.timeLog(list[i].username);
        if (list[i].username === obj.username) {
          return true;
        }
      }
    } else if (obj.username === currentUser.username) {
      return true;
    }

    return false;
  }

  return (
    <div>
      {currentUser ? (
        <>
          {posts.map((post: any, index: any) => {
            if (containsObject(post.user, currentUser.following))
              return <Post key={index} post={post} />;
          })}
        </>
      ) : null}
    </div>
  );
}
