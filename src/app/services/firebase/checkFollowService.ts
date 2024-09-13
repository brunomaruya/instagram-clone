import { db } from "./firebase"; // Ajuste o caminho conforme necessário
import { getDoc, doc } from "firebase/firestore";

export async function checkIfFollowing(
  user: string,
  userToCheck: string
): Promise<boolean> {
  try {
    const userDoc = await getDoc(doc(db, "users", user));

    if (userDoc.exists()) {
      const userData = userDoc.data();
      const following = userData?.following;

      if (Array.isArray(following)) {
        return following.includes(userToCheck);
      } else {
        console.error("O campo 'following' não é um array ou está indefinido.");
        return false;
      }
    } else {
      console.error("O documento do usuário não foi encontrado.");
      return false;
    }
  } catch (error) {
    console.error("Erro ao verificar se o usuário está seguindo:", error);
    return false;
  }
}
