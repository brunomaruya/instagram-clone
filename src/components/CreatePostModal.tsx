"use client";
import { db, storage } from "@/app/firebase";

import { PostModalContext } from "@/contexts/PostModalContext";
import { PostsContext } from "@/contexts/PostsContext";
import { DataContext } from "@/contexts/DataContext";
import { ArrowLeftIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { v4 } from "uuid";
import { createPost } from "@/functions/firebaseFunctions";

export default function CreatePostModal() {
  const { isModalOpen, closeModal } = useContext(PostModalContext);
  const { setImageList } = useContext(PostsContext);
  const { currentUser, currentUserPosts } = useContext(DataContext);

  const [uploadedImage, setUploadedImage] = useState<any>(null);
  const [caption, setCaption] = useState("");

  const showImage = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedImage(e.target.files[0]);
    }
  };

  const uploadImage = () => {
    if (uploadImage == null) return;
    closeModal();

    const postPath = `posts/${uploadedImage.name + v4()}`;
    const imageRef = ref(storage, postPath);

    uploadBytes(imageRef, uploadedImage).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev: any) => [...prev, url]);

        getDownloadURL(ref(storage, postPath))
          .then((url) => {
            const date = new Date();
            createPost(currentUser.username, url, caption, date.toString());
            // updateUserPosts(currentUser.username, currentUserPosts);
            alert("image upload");
            window.location.reload();
          })
          .catch((e) => {
            console.log(e);
          });
      });
    });
  };

  return (
    <>
      {currentUserPosts ? (
        <div
          className={`${
            isModalOpen ? "flex " : "hidden"
          }  w-full  fixed z-[10000] `}
        >
          <div
            onClick={closeModal}
            className="w-full h-screen  justify-center items-center bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)]"
          ></div>

          {uploadedImage ? (
            <>
              <div className="w-[1032px] h-[735px] flex flex-col items-center bg-[#262626] rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <header className="h-[42px] w-full px-4 flex justify-between border-b-[1px] border-[#333333] items-center">
                  <ArrowLeftIcon className="h-[30px] w-[30px]" />
                  <div>Create new post</div>
                  <div
                    className="text-blue-500 cursor-pointer"
                    onClick={uploadImage}
                  >
                    Share
                  </div>
                </header>
                <div className="flex overflow-hidden w-full ">
                  <Image
                    className=" h-[735px-31px] object-cover flex-[2] "
                    src={URL.createObjectURL(uploadedImage)}
                    width={500}
                    height={500}
                    alt="uploadedImage"
                  />
                  <div className=" px-4 flex-[1]">
                    <div className="h-[60px] flex items-center">
                      {currentUser.username}
                    </div>
                    <textarea
                      onChange={(e) => setCaption(e.target.value)}
                      className=" h-[168px] w-full bg-transparent focus:outline-none"
                      placeholder="Write a caption"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-[692px] h-[735px] flex flex-col items-center bg-[#262626] rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <header className="h-[42px] w-full border-b-[1px] border-[#333333] flex justify-center items-center">
                  Create new post
                </header>
                <main className="flex justify-center items-center flex-col h-full">
                  <PhotoIcon className="h-32 w-32" />
                  <div>Arraste as fotos e os videos aqui</div>

                  <div className=" mt-5">
                    <label htmlFor="files" className="form-btn w-fit">
                      Selecionar do computador
                    </label>
                    <input
                      onChange={showImage}
                      type="file"
                      id="files"
                      className="invisible w-0"
                    />
                  </div>
                </main>
              </div>
            </>
          )}
        </div>
      ) : (
        currentUserPosts
      )}
    </>
  );
}
