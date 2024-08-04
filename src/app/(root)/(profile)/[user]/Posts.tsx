import { db } from "@/app/firebase";
import { isPostSlide, RenderPostsSlide } from "@/common/PostsSlides";
import { DataContext } from "@/contexts/DataContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";

export default function Posts({ username }: { username: string }) {
  const [userPosts, setUserPosts] = useState<any[]>([]);
  const [index, setIndex] = React.useState(-1);

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
    <>
      {userPosts ? (
        <div className="border-t-[#868686] border-t-[1px] w-full flex flex-col  items-center">
          <div className="h-[52px] flex items-center">Posts</div>
          {/* {console.log(userPosts)} */}

          <Lightbox
            styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={userPosts}
            render={{
              slide: ({ slide }) => <RenderPostsSlide slide={slide} />,
            }}
          />

          {userPosts ? (
            <div className="grid grid-cols-3 w-full">
              {userPosts.map((post: any, index) => (
                <Image
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => {
                    setIndex(index);
                  }}
                  alt=""
                  src={post.url}
                  key={index}
                  height={500}
                  width={500}
                />
              ))}
            </div>
          ) : (
            "no posts"
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
