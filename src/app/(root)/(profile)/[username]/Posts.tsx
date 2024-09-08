import { db } from "@/app/firebase";
import { RenderPostsSlide } from "@/common/PostsSlides";
import { DataContext } from "@/contexts/DataContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import Image from "next/image";
import { filterObjectsByIds } from "./objArrFilter";
import React, { useContext, useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";

export default function Posts({ username }: { username: string }) {
  const [userPosts, setUserPosts] = useState<any[]>([]);
  const [selectedPostIndex, setSelectedPostIndex] = useState<number>(-1);
  const { posts } = useContext(DataContext);

  useEffect(() => {
    getUserPosts();
  }, []);

  const getUserPosts = async () => {
    try {
      const q = query(
        collection(db, "users"),
        where("username", "==", username)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const filteredPosts = filterObjectsByIds(posts, doc.data().postIds);
        console.log(doc.data().postIds);
        setUserPosts(filteredPosts);
      });
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  return (
    <div className="border-t-grayBg border-t-[1px] w-full flex flex-col items-center">
      <div className="h-[52px] flex items-center">Posts</div>
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        open={selectedPostIndex >= 0}
        index={selectedPostIndex}
        close={() => setSelectedPostIndex(-1)}
        slides={userPosts}
        render={{
          slide: ({ slide }) => <RenderPostsSlide slide={slide} />,
        }}
      />
      {userPosts && userPosts.length > 0 ? (
        <div className="grid grid-cols-3 w-full">
          {userPosts.map((post, index) => (
            <Image
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setSelectedPostIndex(index)}
              alt={`Post ${index}`}
              src={post.url}
              key={index}
              height={500}
              width={500}
            />
          ))}
        </div>
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}
