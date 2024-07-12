import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"; // Firebase config dosyanızı import edin
import { setUser } from "./userSlice"; // Redux slice dosyanızı import edin

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(setUser(currentUser));
      } else {
        dispatch(setUser(null));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return null; // Bu hook yalnızca kullanıcı durumunu kontrol etmek için kullanılıyor
};

export default useAuth;
