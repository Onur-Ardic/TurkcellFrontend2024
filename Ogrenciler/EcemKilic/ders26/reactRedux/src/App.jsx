import Router from "./route/Router";
import "./App.css";
import { getUserData } from "./service/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTodo } from "./redux/slices/todoSlice";
import { Toaster } from "react-hot-toast";
import LanguageButtons from "./components/LanguageButtons";
function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const fetchUserData = async () => {
    if (user) {
      const data = await getUserData(user);
      dispatch(addTodo(data.todos));
    }
  };
  useEffect(() => {
    fetchUserData();
  }, [user]);
  return (
    <>
      <Toaster position="top-right" />
      <div className="ripple-background">
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle medium shade4"></div>
        <div className="circle small shade5"></div>
        <LanguageButtons />
        <Router />
      </div>
    </>
  );
}

export default App;
