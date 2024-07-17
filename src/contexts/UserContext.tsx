import React, { createContext, ReactNode, useEffect } from "react";
import { auth } from "@/app/firebase";
import { onAuthStateChanged } from "firebase/auth";

interface IContext {}

export const UserContext = createContext({} as IContext);

export default function UserProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
      } else {
        console.log("no one logged");
      }
    });
  }, []);
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
}
