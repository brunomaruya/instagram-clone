"use client";
import { storage } from "@/app/services/firebase/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { createContext, ReactNode, useEffect, useState } from "react";

export const PostsContext = createContext({} as any);

export default function PostsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const imageListRef = ref(storage, "posts/");
  const [imageList, setImageList] = useState<any>([]);
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev: any) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <PostsContext.Provider value={{ imageList, setImageList }}>
      {children}
    </PostsContext.Provider>
  );
}
