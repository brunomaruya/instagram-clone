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

  return (
    <div>
      {currentUser ? (
        <>
          {posts.map((post: any, index: any) => {
            if (currentUser) return <Post key={index} post={post} />;
          })}
        </>
      ) : null}
    </div>
  );
}
