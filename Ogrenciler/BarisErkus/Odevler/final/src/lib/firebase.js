import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZNxfhkgKfVNszcUF3PpJ800-_xAwiWZM",
  authDomain: "turkcell-final-auth.firebaseapp.com",
  projectId: "turkcell-final-auth",
  storageBucket: "turkcell-final-auth.appspot.com",
  messagingSenderId: "207678323094",
  appId: "1:207678323094:web:d2674482eb9bd6b61cc5b7",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
