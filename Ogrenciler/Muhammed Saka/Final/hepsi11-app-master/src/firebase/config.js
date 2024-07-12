// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBkuE-q_6aohVgZfFzzLyqw1bD5JcKPjFs",
    authDomain: "hepsi11-app.firebaseapp.com",
    projectId: "hepsi11-app",
    storageBucket: "hepsi11-app.appspot.com",
    messagingSenderId: "784098061046",
    appId: "1:784098061046:web:d889c6fdba1dd769c09ad7"
  };

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;