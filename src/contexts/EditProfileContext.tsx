"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";
import disableScroll from "disable-scroll";
export const EditProfileContext = createContext({} as any);

export default function EditProfileContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    disableScroll.on();
  };
  const closeModal = () => {
    setIsModalOpen(false);
    disableScroll.off();
  };
  return (
    <EditProfileContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </EditProfileContext.Provider>
  );
}
