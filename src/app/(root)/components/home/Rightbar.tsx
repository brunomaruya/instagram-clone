"use client";
import User from "@/components/User";
import { DataContext } from "@/contexts/DataContext";
import React, { useContext } from "react";

export default function Rightbar() {
  const { users, currentUser } = useContext(DataContext);
  return (
    <div>
      {currentUser ? (
        <>
          <header className="px-4">
            <User type="currentUser" user={currentUser} />
          </header>
          <main className="mt-6 mb-2">
            <div className="flex justify-between py-1 px-4 text-sm">
              <span className="cursor-pointer">Sugestões para voce</span>
              <span className="cursor-pointer">Ver tudo</span>
            </div>
            <div className="py-2">
              {users.map((user: any, index: number) => (
                <div key={user.authId}>
                  {user.username !== currentUser.username ? (
                    <div className="px-4 py-2 ">
                      <User user={user} type="suggestion" />
                    </div>
                  ) : null}
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
        </>
      ) : null}
    </div>
  );
}
