import { doc, setDoc } from "firebase/firestore";
import { usersRef } from "../firebase.js";

export const postNewUser = async ({ uid, username, avatar }) => {
  try {
    await setDoc(doc(usersRef, uid), {
      username,
      avatar,
    });

    return {
      uid,
      username,
      avatar,
    };
  } catch (error) {
    return error;
  }
};
