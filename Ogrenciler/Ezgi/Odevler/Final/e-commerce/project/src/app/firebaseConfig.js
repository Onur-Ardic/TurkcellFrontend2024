import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6YMw_MfmWcnKR1KRNPvG8UyMtQi9FSq8",
  authDomain: "e-commerce-19595.firebaseapp.com",
  projectId: "e-commerce-19595",
  storageBucket: "e-commerce-19595.appspot.com",
  messagingSenderId: "333936868943",
  appId: "1:333936868943:web:720caf2bb2f56227c3743a",
  measurementId: "G-7HHSM9QPSM"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);