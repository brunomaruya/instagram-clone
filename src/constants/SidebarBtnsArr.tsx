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

import {
  HomeIcon as ActiveHomeIcon,
  GlobeAltIcon as ActiveGlobeAltIcon,
  PlayCircleIcon as ActivePlayCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon as ActiveChatBubbleOvalLeftEllipsisIcon,
  MagnifyingGlassIcon as ActiveMagnifyingGlassIcon,
} from "@heroicons/react/16/solid";

export const sidebarBtnsArr = [
  {
    name: "Home",
    icon: <HomeIcon />,
    activeIcon: <ActiveHomeIcon />,
    pathname: "/",
    function: () => {
      window.location.href = "/";
    },
  },
  {
    name: "Search",
    icon: <MagnifyingGlassIcon />,
    activeIcon: <ActiveMagnifyingGlassIcon />,
    pathname: "/search",
  },
  {
    name: "Explore",
    icon: <GlobeAltIcon />,
    activeIcon: <ActiveGlobeAltIcon />,
    pathname: "/explore",
    function: () => {
      window.location.href = "/explore";
    },
  },
  {
    name: "Reels",
    icon: <PlayCircleIcon />,
    activeIcon: <ActivePlayCircleIcon />,
    pathname: "/reels",
    function: () => {
      window.location.href = "/reels";
    },
  },
  {
    name: "Messages",
    icon: <ChatBubbleOvalLeftEllipsisIcon />,
    activeIcon: <ActiveChatBubbleOvalLeftEllipsisIcon />,
    pathname: "/direct",
    function: () => {
      window.location.href = "/direct";
    },
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
