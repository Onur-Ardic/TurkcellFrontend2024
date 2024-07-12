import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZ7Z8NO4HBFUvnMBLAxCK_jrBNxSTjIvA",
  authDomain: "turkcell-3f5d9.firebaseapp.com",
  projectId: "turkcell-3f5d9",
  storageBucket: "turkcell-3f5d9.appspot.com",
  messagingSenderId: "597376463201",
  appId: "1:597376463201:web:cb785d4f8deae4e1949520",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
