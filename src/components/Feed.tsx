"use client";
import Post from "@/common/Post";
import { UserContext } from "@/contexts/UserContext";
import React, { useContext } from "react";

export default function Feed() {
  const { users } = useContext(UserContext);
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }

  return (
    <div className="">
      {users.map((user: any) => (
        <Post name={user.name} key={user.name} />
      ))}
    </div>
  );
}
