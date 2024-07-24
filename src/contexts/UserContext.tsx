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
  currentUser: any;
}
interface Users {
  id: string;
  name: string;
  username: string;
}

export const UserContext = createContext({} as IContext);

export default function UserProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState();

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
        setUsers((oldArray: any) => [...oldArray, doc.data()]);
      });
    };

    getUsers();
  }, []);

  useEffect(() => {
    setCurrentUser(users.find((user) => user.id === userId));
  }, [users]);

  return (
    <UserContext.Provider value={{ userId, users, currentUser }}>
      {children}
    </UserContext.Provider>
  );
}
