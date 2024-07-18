// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfc5k-3gFleIAOPAyUOJ2n8uP2UFf9kTE",
  authDomain: "instagram-clone-c82c7.firebaseapp.com",
  projectId: "instagram-clone-c82c7",
  storageBucket: "instagram-clone-c82c7.appspot.com",
  messagingSenderId: "154115422504",
  appId: "1:154115422504:web:04490c39ddf4c44429f81d",
  measurementId: "G-DJ3P4QKEM7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
