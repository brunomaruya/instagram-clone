import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export const fetchUserDataByUsername = async (
  username: string,
  setUser: any,
  setLoading: any,
  setError: any
) => {
  try {
    const docRef = doc(db, "users", username);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const userData = docSnap.data();
      setUser(userData);
    } else {
      console.log("No such document");
      setError(true);
    }
  } catch (error) {
    setError(true);
    console.error("Error getting document:", error);
  } finally {
    setLoading(false);
  }
};
