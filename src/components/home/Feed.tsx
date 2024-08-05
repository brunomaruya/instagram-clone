"use client";
import { storage } from "@/app/firebase";
import Post from "@/common/Post";
import { DataContext } from "@/contexts/DataContext";
import { PostsContext } from "@/contexts/PostsContext";

import { getDownloadURL, listAll, ref } from "firebase/storage";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

export default function Feed() {
  const { posts, currentUser } = useContext(DataContext);

  function containsObject(obj: any, list: any[]) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].username === obj.username) {
        return true;
      }
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
