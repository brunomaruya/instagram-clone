import React from "react";

export default function Btn({
  text,
  color,
  onClick,
}: {
  text: any;
  color?: string;
  onClick?: any;
}) {
  return (
    <button
      onClick={onClick}
      className={`${
        color === "blue" ? "bg-blueBg" : "bg-grayBg"
      } px-4 py-[7px] rounded-md text-[14px] h-[35px] hover:brightness-75 `}
    >
      {text}
    </button>
  );
}
