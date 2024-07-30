import { DataContext } from "@/contexts/DataContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

export default function Posts({ username }: { username: string }) {
  const { posts } = useContext(DataContext);
  const [userPosts, setUserPosts] = useState<any[]>([]);
  console.log(posts);

  useEffect(() => {
    posts.forEach((post: any) => {
      if (post.username.toString() === username.toString()) {
        setUserPosts((oldArray: any) => [...oldArray, post]);
      }
    });
  }, []);

  return (
    <div className="border-t-[#868686] border-t-[1px] w-full flex flex-col  items-center">
      <div className="h-[52px] flex items-center">Posts</div>

      {userPosts ? (
        <div>
          {userPosts.map((post: any) => (
            <Image alt="" src={post.url} height={500} width={500} />
          ))}
        </div>
      ) : (
        "no posts"
      )}
    </div>
  );
}
