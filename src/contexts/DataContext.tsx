import { auth, db } from "@/app/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDocs, collection, doc, setDoc } from "firebase/firestore";

import React, { createContext, ReactNode, useEffect, useState } from "react";

export const DataContext = createContext({} as any);

const createUserDb = async ({
  user,
  data,
}: {
  user: { uid: string };
  data: { name: string; username: string };
}) => {
  try {
    await setDoc(doc(db, "users", data.username), {
      id: user.uid,
      name: data.name,
      username: data.username,
    });
    window.location.href = "/";
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export function createUser(data: any) {
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
      createUserDb({ user, data });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export function signIn(data: any) {
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location.href = "/";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export default function DataContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentUserId, setCurrentUserId] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState();
  const [posts, setPosts] = useState();

  const checkAuth = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setCurrentUserId(uid);
      } else {
        console.log("no one logged");
      }
    });
  };

  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      setUsers((oldArray: any) => [...oldArray, doc.data()]);
    });
  };

  useEffect(() => {
    checkAuth();
    getUsers();
  }, []);

  useEffect(() => {
    setCurrentUser(users.find((user) => user.id === currentUserId));
  }, [users]);

  return (
    <DataContext.Provider value={{ createUser }}>
      {children}
    </DataContext.Provider>
  );
}
