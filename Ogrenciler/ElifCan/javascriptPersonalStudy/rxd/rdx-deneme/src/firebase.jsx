// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIUv_zBMk2ojiouvBm-hQ2ovNyXbTXTlM",
  authDomain: "project1-a90ac.firebaseapp.com",
  projectId: "project1-a90ac",
  storageBucket: "project1-a90ac.appspot.com",
  messagingSenderId: "439439803896",
  appId: "1:439439803896:web:31fa11aaca10b2f98c820d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
