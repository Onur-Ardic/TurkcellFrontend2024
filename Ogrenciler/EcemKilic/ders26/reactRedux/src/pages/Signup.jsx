import { useEffect, useState } from "react";
import { addUser, register } from "../service/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Form, FormButton, FormInput, FormTitle } from "../../styled";

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
    <Form onSubmit={handleSubmit}>
      <FormTitle>SIGN-UP</FormTitle>
      <FormInput
        type="text"
        placeholder="email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <FormInput
        type="password"
        placeholder="password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <FormButton>Submit</FormButton>
    </Form>
  );
};

export default Signup;
