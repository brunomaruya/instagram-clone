"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { updateUser } from "@/functions/firebaseFunctions";
import { storage } from "@/app/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

import userImg from "@/../public/assets/user.jpg";
import { DataContext } from "@/contexts/DataContext";
import { EditProfileContext } from "@/contexts/EditProfileContext";

export default function EditProfileModal() {
  const { isModalOpen, closeModal } = useContext(EditProfileContext);
  const [uploadedImage, setUploadedImage] = useState<any>(null);
  const { currentUser } = useContext(DataContext);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  const showImage = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedImage(e.target.files[0]);
    }
  };

  const update = (e: any) => {
    closeModal();
    if (uploadedImage) {
      const postPath = `profilePicture/${uploadedImage.name + v4()}`;
      const imageRef = ref(storage, postPath);

      uploadBytes(imageRef, uploadedImage).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          getDownloadURL(ref(storage, postPath))
            .then((url) => {
              updateUser(currentUser.username, {
                name: name,
                profilePicture: url,
                about: about,
              });
            })
            .catch((e) => {
              console.error("update: ", e);
            });
        });
      });
    } else {
      updateUser(currentUser.username, { name: name, about: about });
    }
  };

  return (
    <div
      className={`${
        isModalOpen ? "flex " : "hidden"
      }  w-full  fixed z-[10000] `}
    >
      <div
        onClick={closeModal}
        className="w-full h-screen  justify-center items-center bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)]"
      ></div>

      <div className="w-[692px] h-fit flex flex-col items-center bg-grayBg rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form className="flex w-full  my-5 gap-6 ">
          <div className="flex-1 flex flex-col gap-3 px-3">
            <h1>Photo</h1>
            {uploadedImage ? (
              <Image
                className="rounded-full h-[155px] w-[155px] object-center object-cover  "
                height={500}
                width={500}
                alt="profile picture"
                src={URL.createObjectURL(uploadedImage)}
              />
            ) : (
              <Image
                className="rounded-full"
                height={500}
                width={500}
                alt="profile picture"
                src={userImg}
              />
            )}

            <label
              htmlFor="profilePicture"
              className="form-btn w-full text-center"
            >
              Change Photo
            </label>
            <input
              onChange={showImage}
              type="file"
              id="profilePicture"
              className="invisible w-0"
            />
          </div>

          <div className="w-full flex-[3] flex flex-col items-end gap-3 px-3">
            <div className="w-full flex justify-between">
              <label htmlFor="name">Name: </label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                className="w-[400px] text-black px-2"
                placeholder="Your name"
              />
            </div>

            <div className="flex w-full justify-between">
              <label htmlFor="about">About: </label>
              <textarea
                onChange={(e) => setAbout(e.target.value)}
                className="w-[400px] text-black px-2"
                rows={3}
                placeholder="Write a little about you"
              />
            </div>

            <div onClick={update} className="form-btn w-fit">
              Save
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
