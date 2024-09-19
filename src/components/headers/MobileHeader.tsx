import { HeartIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function MobileHeader() {
  return (
    <header className="flex items-center justify-between px-4 h-[60px]  border-b-[1px] border-gray-500">
      <Link href="/" className="logo text-3xl  p-0">
        Instagram
      </Link>
      <div className="flex space-x-2">
        <PlusCircleIcon className="h-7 w-7" />
        <HeartIcon className="h-7 w-7" />
      </div>
    </header>
  );
}
