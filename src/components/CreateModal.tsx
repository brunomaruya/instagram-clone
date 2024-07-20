"use client";
import { storage } from "@/app/firebase";
import { PostsContext } from "@/contexts/PostsContext";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useContext, useState } from "react";
import { v4 } from "uuid";

export default function CreateModal() {
  const [imageUpload, setImageUpload] = useState<any>(null);
  const { setImageList } = useContext(PostsContext);
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `posts/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev: any) => [...prev, url]);
      });
    });
  };
  return (
    <div className="hidden w-full h-screen flex justify-center items-center bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)] absolute z-[100000000] ">
      <div className="w-[692px] h-[735px] bg-[#262626] rounded-xl">
        <header className="h-[42px] border-b-[1px] border-[#333333] flex justify-center items-center">
          Criar nova publicação
        </header>
        <main className="flex justify-center items-center flex-col h-full">
          <PhotoIcon className="h-32 w-32" />
          <div>Arraste as fotos e os videos aqui</div>

          <div className=" mt-5">
            <label htmlFor="files" className="form-btn w-fit">
              Selecionar do computador
            </label>
            <input
              onChange={(event) => {
                if (!event.target.files) {
                  return;
                } else {
                  setImageUpload(event.target.files[0]);
                }
              }}
              type="file"
              id="files"
              className="invisible w-0"
            />
            <button onClick={uploadImage}>upload</button>
          </div>
        </main>
      </div>
    </div>
  );
}
