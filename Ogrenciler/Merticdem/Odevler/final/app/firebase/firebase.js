import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN5SqOFZO3usoZIUwKTStSAW8Q6_YyUXg",
  authDomain: "final-project-d80c4.firebaseapp.com",
  projectId: "final-project-d80c4",
  storageBucket: "final-project-d80c4.appspot.com",
  messagingSenderId: "507107209539",
  appId: "1:507107209539:web:1f7b8e10743021041e7ff6",
  measurementId: "G-YWRWLGDKCL",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
