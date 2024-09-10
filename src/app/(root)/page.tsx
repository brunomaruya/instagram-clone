"use client";
import Rightbar from "@/app/(root)/components/home/Rightbar";
import Stories from "@/app/(root)/components/home/Stories";
import Feed from "@/app/(root)/components/home/Feed";
import Topbar from "@/app/(root)/components/home/Topbar";
import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
  const { user } = useAuth();

  if (!user) {
    return <p>Loading...</p>; // Ou qualquer outra coisa enquanto verifica a autenticação
  }

  return (
    <section className="flex  justify-center ml-0 md:ml-[76px]  xl:ml-[244px] 2xl:ml-[335px] ">
      <div className="md:w-[630px] w-full mt-0  md:mt-4 border-transparent border">
        <header className="md:hidden mb-5 fixed w-full bg-black top-0 z-[1000000000]">
          <Topbar />
        </header>
        <aside className="mt-[70px] md:mt-0">
          <Stories />
        </aside>
        <main>
          <Feed />
        </main>
      </div>
      <aside className="w-[383px] pl-16  border-transparent border mt-9 hidden xl:block">
        <Rightbar />
      </aside>
    </section>
  );
}
