"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { Oval } from "react-loader-spinner";
import { colors } from "../../../../../constants/colors.js";
import { db } from "@/app/firebase";
import Header from "./Header";
import Posts from "./Posts";

interface UserData {
  username: string;
}

export default function ClientComponent({ username }: { username: string }) {
  const [user, setUser] = useState<UserData | undefined>(undefined);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const docRef = doc(db, "users", username);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data() as UserData;
        setUser(userData);
      } else {
        console.log("No such document");
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.error("Error getting document:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [username]);

  if (error) {
    return (
      <div className="text-center">
        <h1 className="mt-10 text-2xl">Sorry, this page isn't available.</h1>
        <p className="mt-6">
          The link you followed may be broken, or the page may have been
          removed. Go back to Instagram.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Oval
          visible={true}
          height="80"
          width="80"
          color={colors.blueBg}
          secondaryColor="transparent"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <div className=" flex justify-center  md:ml-[77px] 2xl:ml-[335px]">
      <div className="w-[975px] flex items-center  flex-col">
        <Header user={user} />
        <Posts username={username} />
      </div>
    </div>
  );
}
