"use client";

import { storage } from "@/app/services/firebase/firebase";
import { PostModalContext } from "@/contexts/PostModalContext";
import { PostsContext } from "@/contexts/PostsContext";
import { DataContext } from "@/contexts/DataContext";
import { ArrowLeftIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { v4 } from "uuid";
import { createPost } from "@/app/services/firebase/firebaseService";
import { uploadAndCreatePost } from "@/app/services/firebase/postServices";

// Componente Principal do Modal de Criação de Post
export default function CreatePostModal() {
  const { isModalOpen, closeModal } = useContext(PostModalContext);
  const { setImageList } = useContext(PostsContext);
  const { currentUser } = useContext(DataContext);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageCaption, setImageCaption] = useState("");

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleImageSubmit = () => {
    if (!selectedImage) return;
    uploadAndCreatePost(
      selectedImage,
      setImageList,
      currentUser,
      imageCaption,
      closeModal
    );
  };

  if (!isModalOpen) return null;

  return (
    <section className="flex w-full fixed z-[10000]">
      <div
        onClick={closeModal}
        className="w-full h-screen bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)]"
      />

      <div className="w-[1032px] h-[735px] flex flex-col items-center bg-grayBg rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ModalHeader
          title="Create new post"
          actionText={selectedImage ? "Share" : null}
          onAction={selectedImage ? handleImageSubmit : null}
          onBack={closeModal}
        />

        {selectedImage ? (
          <UploadedImageSection
            selectedImage={selectedImage}
            currentUser={currentUser}
            setCaption={setImageCaption}
          />
        ) : (
          <UploadPrompt handleFileInputChange={handleFileInputChange} />
        )}
      </div>
    </section>
  );
}

// Componente para o cabeçalho do modal
const ModalHeader = ({
  title,
  actionText,
  onAction,
  onBack,
}: {
  title: string;
  actionText?: string | null;
  onAction?: any;
  onBack?: () => void;
}) => (
  <header className="h-[42px] w-full px-4 flex justify-between border-b-[1px] border-grayBorder items-center">
    {onBack && <ArrowLeftIcon className="h-[30px] w-[30px]" onClick={onBack} />}
    <div>{title}</div>
    {actionText && (
      <div className="text-blue-500 cursor-pointer" onClick={onAction}>
        {actionText}
      </div>
    )}
  </header>
);

// Componente para a exibição da imagem carregada e campo de legenda
const UploadedImageSection = ({
  selectedImage,
  currentUser,
  setCaption,
}: {
  selectedImage: File;
  currentUser: any;
  setCaption: (caption: string) => void;
}) => (
  <div className="flex overflow-hidden w-full">
    <Image
      className="h-[735px-31px] object-cover flex-[2]"
      src={URL.createObjectURL(selectedImage)}
      width={500}
      height={500}
      alt="selectedImage"
    />
    <div className="px-4 flex-[1]">
      <div className="h-[60px] flex items-center">{currentUser.username}</div>
      <textarea
        onChange={(e) => setCaption(e.target.value)}
        className="h-[168px] w-full bg-transparent focus:outline-none"
        placeholder="Write a caption"
      />
    </div>
  </div>
);

// Componente para a área de upload
const UploadPrompt = ({
  handleFileInputChange,
}: {
  handleFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="w-[692px] h-[735px] flex flex-col items-center bg-grayBg rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <header className="h-[42px] w-full border-b-[1px] border-grayBorder flex justify-center items-center">
      Create new post
    </header>
    <main className="flex justify-center items-center flex-col h-full">
      <PhotoIcon className="h-32 w-32" />
      <div>Drag and drop photos and videos here</div>
      <div className="mt-5">
        <label htmlFor="files" className="form-btn w-fit">
          Select from computer
        </label>
        <input
          onChange={handleFileInputChange}
          type="file"
          id="files"
          className="invisible w-0"
        />
      </div>
    </main>
  </div>
);
