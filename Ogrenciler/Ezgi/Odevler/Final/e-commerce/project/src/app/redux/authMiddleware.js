import { onAuthStateChanged } from 'firebase/auth';
import { setUser, clearUser } from './userSlice';
import { auth } from '../firebaseConfig';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === 'user/monitorAuthState') {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        store.dispatch(setUser(user));
      } else {
        store.dispatch(clearUser());
      }
    });
  }
  return next(action);
};

export default authMiddleware;
