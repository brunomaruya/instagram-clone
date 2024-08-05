import React, { ReactNode } from "react";
import MessagesPreview from "./MessagesPreview";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="md:ml-[77px] flex h-screen  ">
      <MessagesPreview />
      {children}
    </div>
  );
}
