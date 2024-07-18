"use client";
import User from "@/common/User";
import { UserContext } from "@/contexts/UserContext";
import React, { useContext } from "react";

export default function Rightbar() {
  const { userId, users, currentUser } = useContext(UserContext);
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }
  return (
    <div>
      <div className="px-4">
        <User name={currentUser ? currentUser.name : ""} type="suggestion" />
      </div>

      <main className="mt-6 mb-2">
        <div className="flex justify-between py-1 px-4 text-sm">
          <span className="cursor-pointer">Sugestões para voce</span>
          <span className="cursor-pointer">Ver tudo</span>
        </div>
        <div className="py-2">
          {users.map((user: any) => (
            <div className="px-4 py-2">
              <User name={user.name} type="suggestion" />
            </div>
          ))}
        </div>
      </main>
      <footer>
        <div className="text-xs px-4 pb-4 leading-5 cursor-pointer">
          Sobre Ajuda Imprensa API Carreiras Privacidade Termos Localizações
          Idioma Meta Verified
        </div>
        <div className="text-xs px-4 leading-5 ">
          © 2024 INSTAGRAM FROM META
        </div>
      </footer>
    </div>
  );
}
