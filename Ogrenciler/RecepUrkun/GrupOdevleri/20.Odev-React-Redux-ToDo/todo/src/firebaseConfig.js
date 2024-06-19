import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCQZg7wnqFKnRZrQR4tbr5CCGTPTG2NhCo",
  authDomain: "todo-b9850.firebaseapp.com",
  projectId: "todo-b9850",
  storageBucket: "todo-b9850.appspot.com",
  messagingSenderId: "1025445058848",
  appId: "1:1025445058848:web:e00572fca08bf6cc911f45",
  measurementId: "G-DBHBXQD4SS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
