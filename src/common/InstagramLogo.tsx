"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function InstagramLogo() {
  const pathname = usePathname();
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        window.location.href = "/";
      }}
    >
      <div
        className={`logo p-3 hidden 2xl:block 2xl:text-3xl  ${
          pathname === "/direct" ? "2xl:hidden" : "2xl:block"
        }  `}
      >
        Instagram
      </div>
      <div
        className={`logo  p-3  md:text-2xl ${
          pathname === "/direct" ? "2xl:block" : "2xl:hidden"
        } `}
      >
        <FaInstagram />
      </div>
    </div>
  );
}
