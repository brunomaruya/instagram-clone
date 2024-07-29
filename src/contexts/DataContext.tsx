import { auth, db } from "@/app/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getDocs,
  collection,
  doc,
  setDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { child, getDatabase, push, ref, update } from "firebase/database";

import React, { createContext, ReactNode, useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { getDateDiff } from "@/functions/getDateDiff";

export const DataContext = createContext({} as any);

const createUserDb = async ({
  user,
  data,
}: {
  user: { uid: string };
  data: { name: string; username: string; email: string };
}) => {
  try {
    await setDoc(doc(db, "users", data.username), {
      authId: user.uid,
      name: data.name,
      username: data.username,
      email: data.email,
    });
    window.location.href = "/";
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const createPost = async (
  username: string,
  url: string,
  caption: string,
  date: string
) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      username: username,
      url: url,
      caption: caption,
      date: date,
    });
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

export async function updateUserPosts(username: string) {
  await updateDoc(doc(db, "users", "user1"), {
    posts: ["post1"],
  });
}

export default function DataContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentUserId, setCurrentUserId] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<any>();
  const [posts, setPosts] = useState<any[]>([]);
  const [currentUserPosts, setCurrentUserPosts] = useState<any[]>([]);

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

  const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      setPosts((oldArray: any) => [...oldArray, doc.data()]);
    });
  };

  useEffect(() => {
    checkAuth();
    getUsers();
    getPosts();
  }, []);

  useEffect(() => {
    setCurrentUser(users.find((user) => user.authId === currentUserId));
    setCurrentUserPosts(currentUser ? currentUser.posts : "");
  }, [users]);

  return (
    <DataContext.Provider value={{ createUser, posts, users, currentUser }}>
      {children}
    </DataContext.Provider>
  );
}
