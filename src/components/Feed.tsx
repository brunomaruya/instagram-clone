import Post from "@/common/Post";
import React from "react";

export default function Feed() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }

  return (
    <div>
      {arr.map((i) => (
        <Post />
      ))}
    </div>
  );
}
