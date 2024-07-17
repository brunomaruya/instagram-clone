import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function InstagramLogo() {
  return (
    <div>
      <div className="logo p-3 hidden 2xl:block 2xl:text-3xl">Instagram</div>
      <div className="logo  p-3 2xl:hidden">
        <FaInstagram />
      </div>
    </div>
  );
}
