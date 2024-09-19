import {
  ChatBubbleOvalLeftEllipsisIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlayCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export const bottomBarBtns = [
  { icon: <HomeIcon />, name: "home", url: "/" },
  { icon: <MagnifyingGlassIcon /> },
  { icon: <PlayCircleIcon />, name: "createPost" },
  { icon: <ChatBubbleOvalLeftEllipsisIcon /> },
  { icon: <UserCircleIcon /> },
];
