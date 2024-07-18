import React, { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "@/app/firebase";
import { onAuthStateChanged } from "firebase/auth";

interface IContext {
  userId: string;
}

export const UserContext = createContext({} as IContext);

export default function UserProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUserId(uid);
      console.log(uid);
    } else {
      console.log("no one logged");
    }
  });

  return (
    <UserContext.Provider value={{ userId }}>{children}</UserContext.Provider>
  );
}
