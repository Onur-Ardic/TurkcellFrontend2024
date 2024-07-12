import { createSlice } from "@reduxjs/toolkit";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import firebaseApp from "../../firebase";

const auth = getAuth(firebaseApp);

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export const login = (email, password) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch(setUser(userCredential.user));
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

export const register = (email, password) => async (dispatch) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch(setUser(userCredential.user));
  } catch (error) {
    console.error("Error registering:", error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(setUser(null));
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

export default authSlice.reducer;
