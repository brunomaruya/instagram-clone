import React, { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "@/app/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";

interface IContext {
  userId: string;
}

export const UserContext = createContext({} as IContext);

export default function UserProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUserId(uid);
      console.log(uid);
    } else {
      console.log("no one logged");
    }
  });

  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  getUsers();

  return (
    <UserContext.Provider value={{ userId }}>{children}</UserContext.Provider>
  );
}
