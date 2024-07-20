"use client";
import { storage } from "@/app/firebase";
import Post from "@/common/Post";
import { UserContext } from "@/contexts/UserContext";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

export default function Feed() {
  const { users } = useContext(UserContext);
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }
  const imageListRef = ref(storage, "posts/");
  const [imageList, setImageList] = useState<any>([]);
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          console.log(url);
          setImageList((prev: any) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div>
      {imageList.map((image: any, index: any) => (
        <Post key={index} src={image} />
      ))}
    </div>
  );
}
