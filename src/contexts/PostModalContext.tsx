import React, { createContext, ReactNode, useContext, useState } from "react";

export const PostModalContext = createContext({} as any);

export default function PostsModalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <PostModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </PostModalContext.Provider>
  );
}
