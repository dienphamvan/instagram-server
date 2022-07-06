import { getDocs } from "firebase/firestore";

import { usersRef } from "../firebase.js";

export const searchService = async (q) => {
  try {
    const fetchData = async () => {
      const userSnapshot = await getDocs(usersRef);
      const users = userSnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      return users.filter((user) => user.username.includes(q));
    };
    return fetchData();
  } catch (error) {
    return error;
  }
};
