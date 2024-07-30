import { DataContext } from "@/contexts/DataContext";
import Image from "next/image";
import React, { useContext } from "react";

export default function Posts({ username }: { username: string }) {
  const { currentUserPosts } = useContext(DataContext);
  console.log(currentUserPosts);
  return (
    <div className="border-t-[#868686] border-t-[1px] w-full flex flex-col  items-center">
      <div className="h-[52px] flex items-center">Posts</div>

      {currentUserPosts ? (
        <div>
          {currentUserPosts.map((post: any) => (
            <Image alt="" src={post.url} height={500} width={500} />
          ))}
        </div>
      ) : (
        "no posts"
      )}
    </div>
  );
}
