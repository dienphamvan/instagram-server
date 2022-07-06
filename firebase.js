import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmrlDZB774WAH49VotyPtySLfc1KtsN4U",
  authDomain: "instagramserver-185ab.firebaseapp.com",
  projectId: "instagramserver-185ab",
  storageBucket: "instagramserver-185ab.appspot.com",
  messagingSenderId: "964423252444",
  appId: "1:964423252444:web:b2a2def6528a9f668a3719",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
export const usersRef = collection(db, "users");
export const postsRef = collection(db, "posts");
