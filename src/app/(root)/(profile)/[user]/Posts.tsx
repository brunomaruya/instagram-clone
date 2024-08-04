import { db } from "@/app/firebase";
import { DataContext } from "@/contexts/DataContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

export default function Posts({ username }: { username: string }) {
  const [userPosts, setUserPosts] = useState<any[]>([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const q = query(collection(db, "users"), where("username", "==", username));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUserPosts(doc.data().posts);
    });
  };

  return (
    <div className="border-t-[#868686] border-t-[1px] w-full flex flex-col  items-center">
      <div className="h-[52px] flex items-center">Posts</div>

      {userPosts ? (
        <div className="grid grid-cols-3 w-full">
          {userPosts.map((post: any, index) => (
            <Image alt="" src={post.url} key={index} height={500} width={500} />
          ))}
        </div>
      ) : (
        "no posts"
      )}
    </div>
  );
}
