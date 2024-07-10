import {
  AtSymbolIcon,
  Bars3Icon,
  ChatBubbleOvalLeftEllipsisIcon,
  GlobeAltIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlayCircleIcon,
  PlusCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import { HomeIcon as ActiveHomeIcon } from "@heroicons/react/16/solid";

export const sidebarBtnsArr = [
  {
    name: "Home",
    icon: <HomeIcon />,
    activeIcon: <ActiveHomeIcon />,
  },
  {
    name: "Search",
    icon: <MagnifyingGlassIcon />,
    activeIcon: <ActiveHomeIcon />,
  },
  {
    name: "Explore",
    icon: <GlobeAltIcon />,
    activeIcon: <ActiveHomeIcon />,
  },
  {
    name: "Reels",
    icon: <PlayCircleIcon />,
    activeIcon: <ActiveHomeIcon />,
  },
  {
    name: "Messages",
    icon: <ChatBubbleOvalLeftEllipsisIcon />,
    activeIcon: <ActiveHomeIcon />,
  },
  {
    name: "Notifications",
    icon: <HeartIcon />,
    activeIcon: <ActiveHomeIcon />,
  },
  {
    name: "Create",
    icon: <PlusCircleIcon />,
    activeIcon: <ActiveHomeIcon />,
  },
  {
    name: "Profile",
    icon: <UserCircleIcon />,
    activeIcon: <ActiveHomeIcon />,
  },
];

export const sidebarBtnsArr2 = [
  {
    name: "Threads",
    icon: <AtSymbolIcon />,
    activeIcon: <ActiveHomeIcon />,
  },
  {
    name: "More",
    icon: <Bars3Icon />,
    activeIcon: <ActiveHomeIcon />,
  },
];
