"use client";

import User from "@/components/User";
import { DataContext } from "@/contexts/DataContext";
import { IUser } from "@/interfaces/IUser";
import React, { useContext } from "react";

export default function Rightbar() {
  const { users, currentUser } = useContext(DataContext);

  if (!currentUser) return null; // Evita renderizar o Rightbar se não houver um usuário atual.

  return (
    <div>
      <Header currentUser={currentUser} />
      <Suggestions users={users} currentUser={currentUser} />
      <Footer />
    </div>
  );
}

// HEADER COMPONENT
const Header = ({ currentUser }: { currentUser: IUser }) => (
  <header className="px-4">
    <User type="currentUser" user={currentUser} />
  </header>
);

// SUGGESTIONS COMPONENT
const Suggestions = ({
  users,
  currentUser,
}: {
  users: IUser[];
  currentUser: IUser;
}) => (
  <main className="mt-6 mb-2">
    <div className="flex justify-between py-1 px-4 text-sm">
      <span className="cursor-pointer">Sugestões para você</span>
      <span className="cursor-pointer">Ver tudo</span>
    </div>

    <div className="py-2">
      {users
        .filter((user) => user.username !== currentUser.username) // Filtra para exibir apenas usuários que não sejam o atual.
        .map((user) => (
          <div key={user.authId} className="px-4 py-2">
            <User user={user} type="suggestion" />
          </div>
        ))}
    </div>
  </main>
);

// FOOTER COMPONENT
const Footer = () => (
  <footer>
    <div className="text-xs px-4 pb-4 leading-5 cursor-pointer">
      Sobre Ajuda Imprensa API Carreiras Privacidade Termos Localizações Idioma
      Meta Verified
    </div>
    <div className="text-xs px-4 leading-5">© 2024 INSTAGRAM FROM META</div>
  </footer>
);
