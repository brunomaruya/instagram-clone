import { MouseEventHandler } from "react";

export interface ISidebarBtnsArr {
  name: string;
  icon: React.JSX.Element;
  activeIcon: React.JSX.Element;
  function: MouseEventHandler;
  pathname: string;
}
