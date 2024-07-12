import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,onAuthStateChanged,
  signOut
} from "firebase/auth";
import store from "@/app/lib/store.js";
import { loginRedux, logoutRedux } from "@/app/lib/auth/authSlice.js";
import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyAwQsWVw3vi8lvIUXXXxva1FHlIC_qLRX8",
  authDomain: "e-commerceapp-788ee.firebaseapp.com",
  projectId: "e-commerceapp-788ee",
  storageBucket: "e-commerceapp-788ee.appspot.com",
  messagingSenderId: "54773220564",
  appId: "1:54773220564:web:3be41deb01fec13e692741",
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
    return user;
  } catch (e) {
    toast.error(e.message);
  }
};

export const signIn = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const signOutFirebase = () => {
  signOut(auth)
    .then(() => {
      toast.success(i18next.t("logoutSuccess"));
    })
    .catch((error) => {
      toast.error(error.message);
    });
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(loginRedux(user.uid));
  } else {
    store.dispatch(logoutRedux());
  }
});

export const addUser = async (data) => {
  try {
    const userRef = collection(db, "users");
    const result = await setDoc(doc(userRef, data.uid), data);
    return result;
  } catch (error) {
    toast.error(error.message);
  }
};
