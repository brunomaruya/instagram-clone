import { MouseEventHandler } from "react";

export interface ISidebarBtnsArr {
  name: String;
  icon: React.JSX.Element;
  activeIcon: React.JSX.Element;
  function: MouseEventHandler;
}
