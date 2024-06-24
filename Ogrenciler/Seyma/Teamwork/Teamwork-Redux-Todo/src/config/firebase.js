import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAfzx-M62tE-zf_lxVlKhq68LaEM1cYAVQ",
  authDomain: "todo-app-3156a.firebaseapp.com",
  projectId: "todo-app-3156a",
  storageBucket: "todo-app-3156a.appspot.com",
  messagingSenderId: "327953421876",
  appId: "1:327953421876:web:e2407223247bb4cd159c61",
  measurementId: "G-MMLRZS15RW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
