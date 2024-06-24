import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import store from "../redux/store";
import { loginRedux, logoutRedux } from "../redux/slices/authSlice";
import toast from "react-hot-toast";
import i18next from "../i18n";
const firebaseConfig = {
  apiKey: "AIzaSyCqLkt4Zq4T0OvDjMjWE_bjdhTQIqIMPV0",
  authDomain: "todo-redux-a1109.firebaseapp.com",
  projectId: "todo-redux-a1109",
  storageBucket: "todo-redux-a1109.appspot.com",
  messagingSenderId: "151332012092",
  appId: "1:151332012092:web:3711e289ea7eb5ef8e4339",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
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

export const getDocRef = (id) => {
  const docRef = doc(db, "users", id);
  return docRef;
};

export const getUserData = async (id) => {
  const docRef = getDocRef(id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return data;
  } else {
    toast.error(i18next.t("noSuchUser"));
  }
};
export const addTodoFirebase = async (id, todoObj) => {
  try {
    const docRef = getDocRef(id);
    await updateDoc(docRef, {
      todos: arrayUnion(todoObj),
    });
    toast.success(i18next.t("successfullyAdded"));
  } catch (error) {
    toast.error(error.message);
  }
};

export const deleteTodoFirebase = async (id, todoObj) => {
  try {
    const docRef = getDocRef(id);
    await updateDoc(docRef, {
      todos: arrayRemove(todoObj),
    });
    toast.success(i18next.t("successfullyDeleted"));
  } catch (error) {
    toast.error(error.message);
  }
};

export const updateTodoFirebase = async (id) => {
  try {
    const { todos } = store.getState().todo;
    const docRef = getDocRef(id);
    await updateDoc(docRef, {
      todos: todos,
    });
    toast.success(i18next.t("successfullyUpdated"));
  } catch (error) {
    toast.error(error.message);
  }
};
