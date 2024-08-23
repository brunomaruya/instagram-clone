export interface ISidebarBtn {
  name: String;
  icon: React.JSX.Element;
  onClick: React.MouseEventHandler;
  notAllowed?: boolean;
}
