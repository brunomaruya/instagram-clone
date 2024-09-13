import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "./firebase";
import { filterObjectsByIds } from "@/utils/filterObjectsByIds";
import { IPost } from "@/interfaces/IPost";
import { PostsSlide } from "yet-another-react-lightbox";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/app/services/firebase/firebase";
import { v4 } from "uuid";

export const getUserPostsByUsername = async (
  username: string,
  posts: IPost[],
  setUserPosts: React.Dispatch<React.SetStateAction<PostsSlide[]>>
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

export const uploadAndCreatePost = async (
  image: File,
  updateImageUrls: any,
  currentUser: any,
  caption: string,
  closeModal: () => void
) => {
  try {
    closeModal();

    const postPath = `posts/${image.name + v4()}`;
    const imageRef = ref(storage, postPath);

    const snapshot = await uploadBytes(imageRef, image);
    const url = await getDownloadURL(snapshot.ref);

    updateImageUrls((prev: any) => [...prev, url]);
    const date = new Date();
    await createPost(currentUser.username, url, caption, date.toString());

    alert("Image uploaded successfully");
  } catch (error) {
    console.error(error);
  }
};

export const createPost = async (
  username: string,
  url: string,
  caption: string,
  date: string
) => {
  const newPost = {
    username: username,
    url: url,
    caption: caption,
    date: date,
  };
  try {
    const docRef = await addDoc(collection(db, "posts"), newPost);
    updateDoc(doc(db, "users", username.toString()), {
      postIds: arrayUnion(docRef.id),
    });
    updateDoc(doc(db, "posts", docRef.id.toString()), {
      id: docRef.id,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
