"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "@/contexts/DataContext";
import {
  sendMessage,
  getMessages,
} from "@/app/services/firebase/messageService";
import { Header } from "./Header";
import { Message } from "./Message";
import { toDateTime } from "@/utils/dateUtils";

export default function Chat({ username }: { username: string }) {
  const { users, currentUser } = useContext(DataContext);
  const [targetUser, setTargetUser] = useState<any>();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (users.length > 0) {
      const foundUser = users.find(
        (user: { username: string }) => user.username === username
      );
      setTargetUser(foundUser);
    }
  }, [users, username]);

  useEffect(() => {
    if (targetUser) {
      return getMessages(currentUser, targetUser, setMessages);
    }
  }, [targetUser]);

  useEffect(() => {
    scrollToElement();
  }, [messages]);

  const handleSendMessage = async () => {
    await sendMessage(currentUser, targetUser, message);
    setMessage("");
  };

  const scrollToElement = () => {
    setTimeout(() => {
      if (divRef.current) {
        divRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }, 100);
  };

  return (
    <>
      {targetUser && (
        <section className="w-full relative">
          <div className="fixed top-0 left-[120px] md:left-[calc(77px+120px)] lg:left-[calc(77px+380px)] right-0">
            <Header user={targetUser} />
          </div>

          <div className="absolute bottom-[calc(48px+76px)] md:bottom-[76px] top-[75px] left-0 right-0 overflow-y-scroll">
            {messages
              .sort(
                (a: any, b: any) =>
                  new Date(toDateTime(a.date.seconds)).getTime() -
                  new Date(toDateTime(b.date.seconds)).getTime()
              )
              .map((message, index) => (
                <Message
                  date={message.date}
                  key={index}
                  sentUser={
                    message.sentUser === currentUser.username ? "me" : "friend"
                  }
                  text={message.text}
                />
              ))}
            <div ref={divRef} />
          </div>
          <div className="fixed bottom-12 md:bottom-0 left-[120px] md:left-[calc(77px+120px)] lg:left-[calc(77px+380px)] right-0">
            <footer className="w-full">
              <div className="m-4">
                <input
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                  type="text"
                  placeholder="Message..."
                  className="bg-transparent rounded-full w-full p-4 border-[1px] border-white h-11"
                  value={message}
                />
              </div>
            </footer>
          </div>
        </section>
      )}
    </>
  );
}
