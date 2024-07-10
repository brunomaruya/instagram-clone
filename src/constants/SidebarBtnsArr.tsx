"use client";
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
    icon: window.location.href == "/" ? <HomeIcon /> : <ActiveHomeIcon />,
    function: () => {
      window.location.href = "/";
    },
  },
  {
    name: "Search",
    icon: <MagnifyingGlassIcon />,
  },
  {
    name: "Explore",
    icon: <GlobeAltIcon />,
  },
  {
    name: "Reels",
    icon: <PlayCircleIcon />,
  },
  {
    name: "Messages",
    icon: <ChatBubbleOvalLeftEllipsisIcon />,
  },
  {
    name: "Notifications",
    icon: <HeartIcon />,
  },
  {
    name: "Create",
    icon: <PlusCircleIcon />,
  },
  {
    name: "Profile",
    icon: <UserCircleIcon />,
  },
];

export const sidebarBtnsArr2 = [
  {
    name: "Threads",
    icon: <AtSymbolIcon />,
  },
  {
    name: "More",
    icon: <Bars3Icon />,
  },
];
