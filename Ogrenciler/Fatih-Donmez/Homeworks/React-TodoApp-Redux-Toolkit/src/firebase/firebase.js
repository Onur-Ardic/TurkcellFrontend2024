import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxbHVAV86nrZmFYhRusPy__sbbsauyzA8",
  authDomain: "redux-todo-868eb.firebaseapp.com",
  projectId: "redux-todo-868eb",
  storageBucket: "redux-todo-868eb.appspot.com",
  messagingSenderId: "161474511542",
  appId: "1:161474511542:web:9fcc394829b85826d8dc17",
  measurementId: "G-XEBFWDYH4L",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
