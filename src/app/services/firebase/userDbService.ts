import { db } from "./firebase"; // Ajuste o caminho conforme necessário
import { setDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";

export const createUserDb = async ({
  user,
  data,
}: {
  user: { uid: string };
  data: { name: string; username: string; email: string };
}) => {
  try {
    await setDoc(doc(db, "users", data.username), {
      authId: user.uid,
      name: data.name,
      username: data.username,
      email: data.email,
    });
    window.location.href = "/";
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateUser = async (
  username: string,
  updatedUser: { name?: string; profilePicture?: string; about?: string }
) => {
  await updateDoc(doc(db, "users", username.toString()), updatedUser)
    .then(() => location.reload())
    .catch((e) => console.error("updateDoc Error: ", e));
};
