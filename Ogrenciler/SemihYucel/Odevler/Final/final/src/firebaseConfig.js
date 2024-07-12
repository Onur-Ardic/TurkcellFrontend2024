import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKSxxKRYiAmQ9iNN6TV4zYFB4pw_UaXg8",
  authDomain: "turkcell-final-ec727.firebaseapp.com",
  projectId: "turkcell-final-ec727",
  storageBucket: "turkcell-final-ec727.appspot.com",
  messagingSenderId: "142170894796",
  appId: "1:142170894796:web:84d2daf5002863cc2b2d69",
  measurementId: "G-7JZ9QQ2PWX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
