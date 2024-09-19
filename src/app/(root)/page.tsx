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
    <section className="ml-0 md:ml-mediumSidebarWidth 2xl:ml-largeSidebarWidth">
      <section className="max-w-5xl w-full mx-auto  flex justify-between gap-16 ">
        <div className="md:w-feedWidth w-full mt-0  md:mt-4 border-transparent border ">
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
        <aside className="w-[383px]  border-transparent border mt-9 hidden xl:block">
          <Rightbar />
        </aside>
      </section>
    </section>
  );
}
