"use client";
import { storage } from "@/app/firebase";
import Post from "@/common/Post";
import { PostsContext } from "@/contexts/PostsContext";
import { UserContext } from "@/contexts/UserContext";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

export default function Feed() {
  const { imageList } = useContext(PostsContext);

  return (
    <div>
      {imageList.map((image: any, index: any) => (
        <Post key={index} src={image} />
      ))}
    </div>
  );
}
