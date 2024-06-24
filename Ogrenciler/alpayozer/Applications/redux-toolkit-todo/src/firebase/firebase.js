// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWg34oIi4BOX5jB0ScqH9uN1LnCzcpUSw",
  authDomain: "todo-e52f0.firebaseapp.com",
  projectId: "todo-e52f0",
  storageBucket: "todo-e52f0.appspot.com",
  messagingSenderId: "580838921757",
  appId: "1:580838921757:web:927267e300413e075218f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
