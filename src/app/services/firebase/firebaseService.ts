import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

//USERS AUTH

export function createUser(data: any) {
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
      createUserDb({ user, data });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function signIn(data: any) {
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = "/";
    })
    .catch((error) => {
      console.log(error);
    });
}

export const logout = () => {
  signOut(auth)
    .then(() => {
      window.location.href = "/auth/login";
    })
    .catch((error) => {
      console.log(error);
    });
};

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

export const updateUser = async (
  username: string,
  updatedUser: {
    name?: string;
    profilePicture?: string;
    about?: string;
  }
) => {
  await updateDoc(doc(db, "users", username.toString()), updatedUser)
    .then(() => location.reload())
    .catch((e) => console.error("updateDoc Error: ", e));
};

//POSTS

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
    const docRef = await addDoc(collection(db, "posts"), newPost).then(
      (post) => {
        updateDoc(doc(db, "users", username.toString()), {
          postIds: arrayUnion(post.id),
        });
        updateDoc(doc(db, "posts", post.id.toString()), {
          id: post.id,
        });
      }
    );
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

//FOLLOW

export async function follow(user: string, userToFollow: string) {
  await updateDoc(doc(db, "users", user.toString()), {
    following: arrayUnion(userToFollow),
  });
  await updateDoc(doc(db, "users", userToFollow.toString()), {
    followers: arrayUnion(user),
  });
}

export async function unfollow(user: string, userToUnfollow: string) {
  // Remover o userToUnfollow da lista de "seguindo" do usuário atual
  await updateDoc(doc(db, "users", user.toString()), {
    following: arrayRemove(userToUnfollow),
  });

  // Remover o user da lista de "seguidores" do userToUnfollow
  await updateDoc(doc(db, "users", userToUnfollow.toString()), {
    followers: arrayRemove(user),
  });
}

export async function checkIfFollowing(
  user: string,
  userToCheck: string
): Promise<boolean> {
  try {
    // Obter o documento do usuário atual
    const userDoc = await getDoc(doc(db, "users", user));

    // Verificar se o documento existe
    if (userDoc.exists()) {
      const userData = userDoc.data();

      // Garantir que o campo 'following' existe e é um array
      const following = userData?.following;

      if (Array.isArray(following)) {
        // Retornar true se o userToCheck estiver na lista de "seguindo"
        return following.includes(userToCheck);
      } else {
        // O campo 'following' não é um array (ou não existe)
        console.error("O campo 'following' não é um array ou está indefinido.");
        return false;
      }
    } else {
      // Documento do usuário não encontrado
      console.error("O documento do usuário não foi encontrado.");
      return false;
    }
  } catch (error) {
    // Captura de qualquer erro durante a operação
    console.error("Erro ao verificar se o usuário está seguindo:", error);
    return false;
  }
}
