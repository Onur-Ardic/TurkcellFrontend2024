// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // auth modülü
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQZg7wnqFKnRZrQR4tbr5CCGTPTG2NhCo",
  authDomain: "todo-b9850.firebaseapp.com",
  projectId: "todo-b9850",
  storageBucket: "todo-b9850.appspot.com",
  messagingSenderId: "1025445058848",
  appId: "1:1025445058848:web:e00572fca08bf6cc911f45",
  measurementId: "G-DBHBXQD4SS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); // auth export
