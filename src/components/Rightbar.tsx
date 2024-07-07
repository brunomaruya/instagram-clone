import User from "@/common/User";
import React from "react";

export default function Rightbar() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }
  return (
    <div>
      <div className="px-4">
        <User type="suggestion" />
      </div>

      <div className="flex justify-between py-1 px-4 text-sm">
        <span>Sugestões para voce</span>
        <span>Ver tudo</span>
      </div>
      {arr.map((i) => (
        <div className="px-4 py-2">
          <User type="suggestion" />
        </div>
      ))}
    </div>
  );
}
