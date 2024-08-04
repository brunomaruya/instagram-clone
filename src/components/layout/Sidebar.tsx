import InstagramLogo from "@/common/InstagramLogo";
import CreateBtn from "./SidebarBtns/CreateBtn";
import ExploreBtn from "./SidebarBtns/ExploreBtn";
import HomeBtn from "./SidebarBtns/HomeBtn";
import MessagesBtn from "./SidebarBtns/MessagesBtn";
import NotificationsBtn from "./SidebarBtns/NotificationsBtn";
import Profile from "./SidebarBtns/Profile";
import ReelsBtn from "./SidebarBtns/ReelsBtn";
import SearchBtn from "./SidebarBtns/SearchBtn";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <div className="mt-2 mb-5">
          <InstagramLogo />
        </div>
        <div>
          <HomeBtn />
          <SearchBtn />
          <ExploreBtn />
          <ReelsBtn />
          <MessagesBtn />
          <NotificationsBtn />
          <CreateBtn />
          <Profile />
        </div>
      </div>
      <div>{/* bottom */}</div>
    </div>
  );
}
