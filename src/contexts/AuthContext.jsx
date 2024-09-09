import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../app/services/firebase/firebase";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Adiciona um estado de carregamento

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("Auth state changed:", user); // Adicione um log para depuração
      setUser(user);
      setLoading(false); // Termina o carregamento após obter o usuário

      if (!user) {
        if (router.pathname !== "/auth/login") {
          router.push("/auth/login"); // Redireciona para login apenas se não estiver autenticado e não estiver na página de login
        }
      }
    });

    return () => unsubscribe();
  }, [router]);

  // Exibe um carregamento até saber o estado do usuário
  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
