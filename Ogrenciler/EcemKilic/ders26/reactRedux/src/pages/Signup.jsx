import { useEffect, useState } from "react";
import { addUser, register } from "../service/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Signup = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await register(formData.email, formData.password);

    await addUser({
      uid: result.uid,
      todos: [],
    });
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

export default Signup;
