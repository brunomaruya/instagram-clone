import React, { createContext, useContext, useState, useEffect } from "react";
import {
  sendMessage,
  getMessages,
} from "@/app/services/firebase/messageService";
import { DataContext } from "./DataContext";

interface Message {
  date: any;
  sentUser: string;
  text: string;
}

interface MessageContextType {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  sendMessage: (message: string) => Promise<void>;
  setTargetUser: React.Dispatch<React.SetStateAction<any>>;
  targetUser: any;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [targetUser, setTargetUser] = useState<any>(null);

  // Assume we have user info from some auth context
  const { currentUser } = useContext(DataContext); // Adjust as needed

  useEffect(() => {
    if (currentUser && targetUser) {
      return getMessages(currentUser, targetUser, setMessages);
    }
  }, [currentUser, targetUser]);

  const handleSendMessage = async (message: string) => {
    if (currentUser && targetUser) {
      await sendMessage(currentUser, targetUser, message);
    }
  };

  return (
    <MessageContext.Provider
      value={{
        messages,
        setMessages,
        sendMessage: handleSendMessage,
        setTargetUser,
        targetUser,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageContext = () => {
  const context = useContext(MessageContext);
  if (context === undefined) {
    throw new Error("useMessageContext must be used within a MessageProvider");
  }
  return context;
};
