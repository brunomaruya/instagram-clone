import React, { createContext, ReactNode, useContext, useState } from "react";
import disableScroll from "disable-scroll";
export const PostModalContext = createContext({} as any);

export default function PostsModalContextProvider({
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
    <PostModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </PostModalContext.Provider>
  );
}
