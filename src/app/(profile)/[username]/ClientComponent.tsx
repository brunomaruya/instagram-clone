"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../components/headers/ProfilePageHeader";
import Posts from "../../../components/ProfilePagePosts";
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

  //ERROR CASE
  if (error) {
    return (
      <section className="text-center ">
        <h1 className="mt-10 text-2xl">
          Sorry, this page isn&apos;t available.
        </h1>
        <p className="mt-6">
          The link you followed may be broken, or the page may have been
          removed. Go back to Instagram.
        </p>
      </section>
    );
  }

  //LOADING CASE
  if (loading) {
    return <Loading />;
  }

  //SUCCESS CASE
  return (
    user && (
      <main className="flex justify-center  md:ml-mediumSidebarWidth 2xl:ml-largeSidebarWidth">
        <div className="flex flex-col items-center w-profilePageHeaderWidth  ">
          <Header user={user} />
          <Posts username={username} />
        </div>
      </main>
    )
  );
}
