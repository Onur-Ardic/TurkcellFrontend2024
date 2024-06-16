import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from 'firebase/auth'

import { toast } from 'react-hot-toast'

const firebaseConfig = {
  apiKey: "AIzaSyArDSpydqr5YLJvAHEffd0rS_m5qgIopIY",
  authDomain: "clone-ef52a.firebaseapp.com",
  projectId: "clone-ef52a",
  storageBucket: "clone-ef52a.appspot.com",
  messagingSenderId: "185876935698",
  appId: "1:185876935698:web:ac40b3960b338238ccd4cb"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth()

export const Register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    toast.error(error.message)
  }
}

export const Login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    toast.error(error.message)
  }
}

export const Logout = async () => {
  try {
    await signOut(auth)
    return true
  } catch (error) {
    toast.error(error)
  }
}
