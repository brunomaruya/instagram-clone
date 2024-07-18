"use client";
import React, {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { auth } from "@/app/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";

interface IContext {
  userId: string;
  users: any;
}
interface Users {
  name: string;
  username: string;
}

export const UserContext = createContext({} as IContext);

export default function UserProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserId(uid);
      } else {
        console.log("no one logged");
      }
    });

    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setUsers((oldArray: any) => [...oldArray, doc.data()]);
      });
    };

    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ userId, users }}>
      {children}
    </UserContext.Provider>
  );
}
