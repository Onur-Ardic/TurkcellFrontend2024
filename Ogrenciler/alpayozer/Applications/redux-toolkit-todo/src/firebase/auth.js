import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const register = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  return auth.signOut();
};

export const currentUser = () => {
  console.log("current", auth.currentUser.email);
  return auth.currentUser.email;
};
