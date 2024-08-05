import React from "react";
import MessagesPreview from "./MessagesPreview";
import Chat from "./Chat";

export default function page() {
  return (
    <div className="md:ml-[77px] flex h-screen  ">
      <MessagesPreview />
      <Chat />
    </div>
  );
}
