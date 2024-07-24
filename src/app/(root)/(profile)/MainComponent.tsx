"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import Header from "./Header";
import Posts from "./Posts";

export default function MainComponent({ username }: { username: string }) {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const docRef = doc(db, "users", username);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUser(docSnap.data());
    } else {
      console.log("No such document");
    }
  };

  return (
    <div className="w-full flex justify-center">
      {user ? (
        <div className="w-[975px] flex items-center  flex-col">
          <Header user={user} />
          <Posts />
        </div>
      ) : (
        <div className="text-center">
          <h1 className="mt-10 text-2xl">Sorry, this page isn't available.</h1>
          <p className="mt-6">
            The link you followed may be broken, or the page may have been
            removed. Go back to Instagram.
          </p>
        </div>
      )}
    </div>
  );
}
