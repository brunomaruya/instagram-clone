"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

import Header from "./Header.js";
import Posts from "./Posts.js";
import { Oval } from "react-loader-spinner";
import { colors } from "../../../../constants/colors.js";
import { db } from "@/app/firebase";

export default function ClientComponent({ username }: { username: string }) {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    if (!username) {
      console.error("Username is " + username);
      return;
    }
    const docRef = doc(db, "users", username);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUser(docSnap.data());
    } else {
      console.log("No such document");
    }
  };

  return (
    <div className=" flex justify-center  md:ml-[77px] 2xl:ml-[335px]">
      {user ? (
        <div className="w-[975px] flex items-center  flex-col">
          <Header user={user} />
          <Posts username={username} />
        </div>
      ) : (
        // <div className="text-center">
        //   <h1 className="mt-10 text-2xl">Sorry, this page isn't available.</h1>
        //   <p className="mt-6">
        //     The link you followed may be broken, or the page may have been
        //     removed. Go back to Instagram.
        //   </p>
        // </div>
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
      )}
    </div>
  );
}
