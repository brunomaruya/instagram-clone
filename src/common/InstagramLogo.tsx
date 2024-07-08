import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function InstagramLogo() {
  return (
    <div>
      <div className="logo p-3 hidden">Instagram</div>
      <div className="logo  p-3">
        <FaInstagram />
      </div>
    </div>
  );
}
