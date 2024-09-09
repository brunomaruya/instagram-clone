"use client";
import { DataContext } from "@/contexts/DataContext";
import Image from "next/image";
import React, { useContext } from "react";

export default function page() {
  const { posts } = useContext(DataContext);
  return (
    <div className="ml-[335px] mt-10  ">
      <div className="grid grid-cols-3 gap-2 w-[967px] mx-auto  ">
        {posts &&
          posts.map((post: any) => (
            <Image
              src={post.url}
              width={500}
              height={500}
              alt="image"
              className="object-cover w-full h-full"
            />
          ))}
      </div>
    </div>
  );
}
