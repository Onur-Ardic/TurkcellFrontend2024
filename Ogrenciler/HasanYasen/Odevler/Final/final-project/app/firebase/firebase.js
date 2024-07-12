import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAniDuINX4syIav90hxT_Gk8wIiRNznoiA",
  authDomain: "shopco-36797.firebaseapp.com",
  projectId: "shopco-36797",
  storageBucket: "shopco-36797.appspot.com",
  messagingSenderId: "306074361257",
  appId: "1:306074361257:web:06732beed93505d5f7b8b8"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)