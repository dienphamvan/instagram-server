import { addDoc, doc, getDoc } from "firebase/firestore";
import { db, postsRef } from "../firebase.js";

export const postNewPost = async ({
  uid,
  "image-url": imageURL,
  "post-content": postContent,
}) => {
  const postRef = await addDoc(postsRef, {
    imageURL,
    postContent,
    user: doc(db, `users/${uid}`),
  });

  const postSnapshot = await getDoc(postRef);
  const post = {
    id: postSnapshot.id,
    ...postSnapshot.data(),
  };
  return post;
};
