import { auth } from "./firebase"; // Ajuste o caminho conforme necessário
import { createUserDb } from "./userDbService";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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
