import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyAxWwPJgvrCz2K6O2wL9ZfgFzlYD6Lw800",
  authDomain: "shopco-bfe6b.firebaseapp.com",
  projectId: "shopco-bfe6b",
  storageBucket: "shopco-bfe6b.appspot.com",
  messagingSenderId: "962252043788",
  appId: "1:962252043788:web:97b9c69137d5dd6b9f2029",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    toast.success("User created successfully");
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};
export const signIn = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    toast.success("User logged in successfully");
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const signOutFirebase = () => {
  signOut(auth)
    .then(() => {
      toast.success("User logged out successfully");
    })
    .catch((error) => {
      toast.error(error.message);
    });
};
