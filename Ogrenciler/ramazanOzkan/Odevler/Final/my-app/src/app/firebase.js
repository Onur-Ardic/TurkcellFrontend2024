// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMqc74mNOfECBNadUYieWAuSLGw7OEm4Y",
  authDomain: "gygy-nextjs-final.firebaseapp.com",
  projectId: "gygy-nextjs-final",
  storageBucket: "gygy-nextjs-final.appspot.com",
  messagingSenderId: "666563784439",
  appId: "1:666563784439:web:006abe3e5b425b82136df2",
  measurementId: "G-P7HPQDCVHS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
