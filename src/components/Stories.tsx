import Story from "@/common/Story";
import React from "react";

//link:https://www.npmjs.com/package/react-multi-carousel

export default function Stories() {
  let arr = [];
  for (let i = 0; i < 20; i++) {
    arr.push(i);
  }
  return (
    <div className="py-2 flex gap-3">
      {arr.map((i) => (
        <Story />
      ))}
    </div>
  );
}
