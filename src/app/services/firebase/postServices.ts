import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";
import { filterObjectsByIds } from "@/utils/filterObjectsByIds";
import { IPost } from "@/interfaces/IPost";

export const getUserPostsByUsername = async (
  username: string,
  posts: IPost[],
  setUserPosts: React.Dispatch<React.SetStateAction<IPost[]>>
) => {
  try {
    const q = query(collection(db, "users"), where("username", "==", username));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const filteredPosts = filterObjectsByIds(posts, doc.data().postIds);
      setUserPosts(filteredPosts);
    });
  } catch (error) {
    console.error("Error getting document:", error);
  }
};
