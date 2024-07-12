
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_R1ejZwYmU9Zd7GEaaA03C5q7FN0k69w",
  authDomain: "shop-co-a303e.firebaseapp.com",
  projectId: "shop-co-a303e",
  storageBucket: "shop-co-a303e.appspot.com",
  messagingSenderId: "582726825897",
  appId: "1:582726825897:web:76495e4db7704eff44f6b8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;