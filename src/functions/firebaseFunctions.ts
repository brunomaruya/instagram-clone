import { auth, db } from "@/app/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

//USERS AUTH

export function createUser(data: any) {
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
      createUserDb({ user, data });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export function signIn(data: any) {
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location.href = "/";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

//USERS DB
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

//POSTS

export const createPost = async (
  username: string,
  url: string,
  caption: string,
  date: string
) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      username: username,
      url: url,
      caption: caption,
      date: date,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateUserPosts = async (
  username: string,
  url: string,
  caption: string,
  date: string
) => {
  await updateDoc(doc(db, "users", username.toString()), {
    posts: arrayUnion({
      username: username,
      url: url,
      caption: caption,
      date: date,
    }),
  });
};

//DATA
export async function updateData(path: string, id: string, newData: any) {
  await updateDoc(doc(db, path, id), newData);
}

//FOLLOW

export async function follow(user: string, userToFollow: string) {
  await updateDoc(doc(db, "users", user.toString()), {
    following: arrayUnion(userToFollow),
  });
  await updateDoc(doc(db, "users", userToFollow.toString()), {
    follower: arrayUnion(user),
  });
}
