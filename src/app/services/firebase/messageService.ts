import {
  addDoc,
  collection,
  onSnapshot,
  or,
  query,
  where,
  and,
} from "firebase/firestore";
import { db } from "@/app/services/firebase/firebase";

export const sendMessage = async (
  currentUser: any,
  targetUser: any,
  message: string
) => {
  const date = new Date();
  await addDoc(collection(db, "messages"), {
    sentUser: currentUser.username,
    targetUser: targetUser?.username,
    date: date,
    text: message,
  });
};

export const getMessages = (
  currentUser: any,
  targetUser: any,
  setMessages: React.Dispatch<React.SetStateAction<any[]>>
) => {
  if (currentUser && targetUser) {
    const q = query(
      collection(db, "messages"),
      or(
        and(
          where("targetUser", "==", currentUser?.username),
          where("sentUser", "==", targetUser?.username)
        ),
        and(
          where("targetUser", "==", targetUser?.username),
          where("sentUser", "==", currentUser?.username)
        )
      )
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot
        .docChanges()
        .filter((change) => change.type === "added")
        .map((change) => change.doc.data());
      setMessages((prev) => [...prev, ...newMessages]);
    });

    return () => unsubscribe();
  }
};
