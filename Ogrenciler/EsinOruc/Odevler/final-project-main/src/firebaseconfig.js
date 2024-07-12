import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHaL6UIpYguYxz2vrnGMil0TPB6gC9pxk",
  authDomain: "turkcell-final-b2740.firebaseapp.com",
  projectId: "turkcell-final-b2740",
  storageBucket: "turkcell-final-b2740.appspot.com",
  messagingSenderId: "732684031019",
  appId: "1:732684031019:web:24770c3ce60925e746866e",
  measurementId: "G-2Z3JZ5BWW9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
