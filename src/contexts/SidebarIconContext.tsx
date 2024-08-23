"use client";
import { usePathname } from "next/navigation";
import React, { createContext, ReactNode, useEffect, useState } from "react";

interface IContext {
  icon: String;
  setIcon: any;
}

export const SidebarIconContext = createContext({} as IContext);

export default function SidebarIconContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  // const pathname = window.location.pathname;
  const [icon, setIcon] = useState<String>(pathname);

  useEffect(() => {
    switch (pathname) {
      case "/":
        setIcon("home");
        break;
      case "/explore":
        setIcon("explore");
        break;
      case "/reels":
        setIcon("reels");
        break;
      case "/direct":
        setIcon("messages");
        break;
      case "/profile":
        setIcon("profile");
        break;
    }
  }, []);

  const value: IContext = {
    icon,
    setIcon,
  };
  return (
    <SidebarIconContext.Provider value={value}>
      {children}
    </SidebarIconContext.Provider>
  );
}
