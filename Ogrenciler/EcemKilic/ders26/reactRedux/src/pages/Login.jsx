import { useEffect, useState } from "react";
import { signIn } from "../service/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormButton, FormInput, FormQuestion, FormSingUp, FormTitle } from "../../styled";
import toast from 'react-hot-toast';
import { setUserMail } from "../redux/slices/authSlice";
const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn(formData.email, formData.password);
      dispatch(setUserMail(result.email));
    } catch (error) {
      toast(error.message);
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>LOGIN</FormTitle>
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
      <FormQuestion>Hesabınız yok mu ? <Link to={"/signup"}><FormSingUp>Sign-Up</FormSingUp></Link></FormQuestion>
    </Form>
  );
};

export default Login;
