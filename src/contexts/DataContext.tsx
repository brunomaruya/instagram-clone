import React, { createContext, ReactNode, useEffect, useState } from "react";
import { auth, db } from "@/app/services/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";

export const DataContext = createContext({} as any);

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

  useEffect(() => {
    setCurrentUser(users.find((user) => user.authId === currentUserId));
  }, [users]);

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
    getPosts();
    getUsers();
  }, []);

  useEffect(() => {
    setCurrentUserPosts([]);
    posts.forEach((post) => {
      if (post.username.toString() === currentUser.username.toString()) {
        setCurrentUserPosts((oldArray: any) => [...oldArray, post]);
      }
    });
  }, [currentUser]);

  return (
    <DataContext.Provider
      value={{ posts, users, currentUser, currentUserPosts }}
    >
      {children}
    </DataContext.Provider>
  );
}
