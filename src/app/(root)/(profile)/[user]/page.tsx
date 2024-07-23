"use client";
import React from "react";
import Header from "../MainComponent";
import { useRouter } from "next/navigation";
import MainComponent from "../MainComponent";

export default function page({ params }: { params: { user: string } }) {
  const router = useRouter();
  return (
    <div>
      <MainComponent username={params.user} />
    </div>
  );
}
