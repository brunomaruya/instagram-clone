"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useMessageContext } from "@/contexts/MessageContext";
import { Header } from "./headers/ChatHeader";
import { Message } from "./Message";
import { toDateTime } from "@/utils/dateUtils";
import { DataContext } from "@/contexts/DataContext";

export default function Chat({ username }: { username: string }) {
  const { messages, sendMessage, setTargetUser, targetUser } =
    useMessageContext();
  const [message, setMessage] = useState("");
  const divRef = useRef<HTMLDivElement>(null);
  const { users, currentUser } = useContext(DataContext);

  useEffect(() => {
    setTargetUser(users.find((user: any) => user.username === username));
  }, [users, username]);

  useEffect(() => {
    scrollToElement();
  }, [messages]);

  const handleSendMessage = async () => {
    await sendMessage(message);
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
          <Header user={targetUser} />

          <div className="absolute bottom-[calc(48px+76px)] md:bottom-[76px] top-[75px] left-0 right-0 overflow-y-scroll">
            {messages
              .sort(
                (a, b) =>
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
                  userImg={targetUser.profilePicture}
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
