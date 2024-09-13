import { db } from "./firebase"; // Ajuste o caminho conforme necessário
import { updateDoc, doc, arrayUnion, arrayRemove } from "firebase/firestore";

export async function follow(user: string, userToFollow: string) {
  await updateDoc(doc(db, "users", user.toString()), {
    following: arrayUnion(userToFollow),
  });
  await updateDoc(doc(db, "users", userToFollow.toString()), {
    followers: arrayUnion(user),
  });
}

export async function unfollow(user: string, userToUnfollow: string) {
  await updateDoc(doc(db, "users", user.toString()), {
    following: arrayRemove(userToUnfollow),
  });
  await updateDoc(doc(db, "users", userToUnfollow.toString()), {
    followers: arrayRemove(user),
  });
}
