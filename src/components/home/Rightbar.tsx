"use client";
import User from "@/common/User";
import { DataContext } from "@/contexts/DataContext";
import React, { useContext } from "react";
import { useRTL } from "yet-another-react-lightbox";

export default function Rightbar() {
  const { users, currentUser } = useContext(DataContext);
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }
  return (
    <div>
      {currentUser ? (
        <>
          <div className="px-4">
            <User type="currentUser" user={currentUser} />
          </div>
          <main className="mt-6 mb-2">
            <div className="flex justify-between py-1 px-4 text-sm">
              <span className="cursor-pointer">Sugestões para voce</span>
              <span className="cursor-pointer">Ver tudo</span>
            </div>
            <div className="py-2">
              {users.map((user: any, index: number) => (
                <>
                  {user.username !== currentUser.username ? (
                    <div className="px-4 py-2 " key={user.authId}>
                      <User user={user} type="suggestion" />
                    </div>
                  ) : null}
                </>
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
