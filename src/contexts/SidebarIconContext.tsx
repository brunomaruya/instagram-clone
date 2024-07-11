import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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
  const pathname = window.location.pathname;

  const [icon, setIcon] = useState<String>(pathname);

  useEffect(() => {
    switch (pathname) {
      case "/":
        setIcon("home");
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
