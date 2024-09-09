import React, { createContext, ReactNode } from "react";

export const ChatContext = createContext({} as any);

export default function ChatProvider({ children }: { children: ReactNode }) {
  return <ChatContext.Provider value={{}}>{children}</ChatContext.Provider>;
}
