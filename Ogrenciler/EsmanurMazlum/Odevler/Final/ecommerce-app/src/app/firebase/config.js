import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBHm_clPSTaBBWuNDipz2H3po-aQtSndKk",
  authDomain: "shopco-ecommerce-1d5d4.firebaseapp.com",
  projectId: "shopco-ecommerce-1d5d4",
  storageBucket: "shopco-ecommerce-1d5d4.appspot.com",
  messagingSenderId: "735386187560",
  appId: "1:735386187560:web:89d712d7b84e6be42bc21d",
  measurementId: "G-0WEZQ0K1YD"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export {app, auth}