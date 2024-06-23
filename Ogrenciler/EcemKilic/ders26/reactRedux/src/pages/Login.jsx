import { useEffect, useState } from "react";
import { signIn } from "../service/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(formData.email, formData.password);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button>Submit</button>
    </form>
  );
};

export default Login;
