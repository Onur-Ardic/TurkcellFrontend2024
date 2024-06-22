import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAGwqLgo5nm8cp5hf-clvtrJ1FyPFL-qTA",
  authDomain: "todo-a9308.firebaseapp.com",
  projectId: "todo-a9308",
  storageBucket: "todo-a9308.appspot.com",
  messagingSenderId: "48215927780",
  appId: "1:48215927780:web:869ee45e168a1bb15335f1",
  measurementId: "G-CJ0BY1NVE5",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
