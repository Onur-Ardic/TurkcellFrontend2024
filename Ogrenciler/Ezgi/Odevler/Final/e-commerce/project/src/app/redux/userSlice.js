import { createSlice } from '@reduxjs/toolkit';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
  },
  reducers: {
    setUser(state, action) {
      state.currentUser = action.payload;
    },
    clearUser(state) {
      state.currentUser = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const monitorAuthState = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user));
    } else {
      dispatch(clearUser());
    }
  });
};

export default userSlice.reducer;
