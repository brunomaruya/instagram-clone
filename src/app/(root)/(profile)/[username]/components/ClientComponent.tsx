"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Posts from "./Posts";
import { fetchUserDataByUsername } from "@/app/services/firebase/userService";
import { IUser } from "@/interfaces/IUser";
import Loading from "@/components/Loading";

export default function ClientComponent({ username }: { username: string }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserDataByUsername(username, setUser, setLoading, setError);
  }, [username]);

  if (error) {
    return (
      <div className="text-center">
        <h1 className="mt-10 text-2xl">Sorry, this page isn't available.</h1>
        <p className="mt-6">
          The link you followed may be broken, or the page may have been
          removed. Go back to Instagram.
        </p>
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    user && (
      <main className=" flex justify-center  md:ml-[77px] 2xl:ml-[335px]">
        <div className="w-[975px] flex items-center  flex-col">
          <Header user={user} />
          <Posts username={username} />
        </div>
      </main>
    )
  );
}
