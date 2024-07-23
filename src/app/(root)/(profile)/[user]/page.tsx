"use client";
import React from "react";
import Header from "../Header";
import { useRouter } from "next/navigation";

export default function page({ params }: { params: { user: string } }) {
  const router = useRouter();
  return (
    <div>
      <Header />
      {params.user}
    </div>
  );
}
