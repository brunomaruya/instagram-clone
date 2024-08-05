import React from "react";
import Chat from "../Chat";

export default function page({ params }: { params: { user: string } }) {
  return (
    <div>
      <Chat />
    </div>
  );
}
