import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK6YN-aCxnOxvAxpTqVHAAchHOYSPU36A",
  authDomain: "proje-deneme-9ba26.firebaseapp.com",
  projectId: "proje-deneme-9ba26",
  storageBucket: "proje-deneme-9ba26.appspot.com",
  messagingSenderId: "735056592275",
  appId: "1:735056592275:web:980fcfcd9d33e439227c66",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
