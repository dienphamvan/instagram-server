import { getDoc, getDocs } from "firebase/firestore";
import { postsRef } from "../firebase.js";

export const getPostsService = async () => {
  try {
    const postsSnapshot = await getDocs(postsRef);

    const posts = [];
    for (const doc of postsSnapshot.docs) {
      const post = doc.data();
      const userRef = post.user;
      const userSnapshot = await getDoc(userRef);
      post.user = userSnapshot.data();
      posts.push({
        id: doc.id,
        ...post,
      });
    }

    return posts;
  } catch (error) {
    return error
  }
};
