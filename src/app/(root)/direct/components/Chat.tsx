"use client";
import React, { useContext, useEffect, useRef, useState } from "react";

import { DataContext } from "@/contexts/DataContext";
import {
  addDoc,
  and,
  collection,
  onSnapshot,
  or,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/app/services/firebase/firebase";

import { toDateTime } from "@/utils/dateUtils";

import { Header } from "./Header";
import { Message } from "./Message";

export default function Chat({ username }: { username: string }) {
  const { users, currentUser } = useContext(DataContext);
  const [targetUser, setTargetUser] = useState<any>();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  const divRef = useRef<any>();

  const scrollToElement: any = () => {
    const { current } = divRef;
    if (current) {
      setTimeout(function () {
        divRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  async function sendMessage() {
    const date = new Date();

    const docRef = await addDoc(collection(db, "messages"), {
      sentUser: currentUser.username,
      targetUser: targetUser?.username,
      date: date,
      text: message,
    });

    scrollToElement();
  }

  async function getMessages() {
    if (currentUser && targetUser) {
      const q = query(
        collection(db, "messages"),
        or(
          and(
            where("targetUser", "==", currentUser?.username),
            where("sentUser", "==", targetUser?.username)
          ),
          and(
            where("targetUser", "==", targetUser?.username),
            where("sentUser", "==", currentUser?.username)
          )
        )
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            setMessages((prev) => [...prev, change.doc.data()]);
          }
        });
      });
    }
  }

  useEffect(() => {
    setTargetUser((prev: any) => {
      const result = users.find(
        (user: { username: string }) => user.username === username
      );
      return result;
    });
  }, [users]);

  useEffect(() => {
    if (users.length > 0) getMessages();
    scrollToElement();
  }, [targetUser]);

  return (
    <>
      {targetUser && (
        <section className="w-full relative">
          <div className="fixed top-0 left-[120px]  md:left-[calc(77px+120px)]  lg:left-[calc(77px+380px)] right-0">
            <Header user={targetUser} />
          </div>

          <div className="absolute bottom-[calc(48px+76px)] md:bottom-[76px] top-[75px] left-0 right-0 overflow-y-scroll">
            {messages
              .sort((a: any, b: any) => {
                const first: any = new Date(toDateTime(a.date.seconds));
                const second: any = new Date(toDateTime(b.date.seconds));
                const result = first - second;
                return result;
              })
              .map((message, index) => {
                return (
                  <Message
                    date={message.date}
                    key={index}
                    sentUser={
                      message.sentUser === currentUser.username
                        ? "me"
                        : "friend"
                    }
                    text={message.text}
                  />
                );
              })}
            <div ref={divRef}></div>
          </div>
          <div className="fixed bottom-12  md:bottom-0 left-[120px] md:left-[calc(77px+120px)] lg:left-[calc(77px+380px)] right-0">
            <footer className="w-full  ">
              <div className="m-4">
                <input
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setMessage("");
                      sendMessage();
                    }
                  }}
                  type="text"
                  placeholder="Message..."
                  className="bg-transparent rounded-full w-full p-4  border-[1px] border-white h-11  "
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
