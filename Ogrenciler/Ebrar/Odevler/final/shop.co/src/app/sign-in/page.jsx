"use client"
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import {auth} from "../firebase/firebase"
import { useRouter } from "next/navigation";
import {
  StyledContainer,
  StyledFormWrapper,
  StyledFormControl,
  StyledFormLabel,
  StyledButton,
} from "./page.style";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async (event) => {
    event.preventDefault();
   try{
    const res = await signInWithEmailAndPassword(email,password);
    setEmail("")
    setPassword("");
    router.push("/")
   }
   catch(e){
   }
  
  };




  return (
    <StyledContainer>
      <StyledFormWrapper>
        <h2 className="text-center mb-4">Sign In</h2>
        <Form onSubmit={handleSignIn}>
          <Form.Group controlId="formEmail">
            <StyledFormLabel>Email address</StyledFormLabel>
            <StyledFormControl
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <StyledFormLabel>Password</StyledFormLabel>
            <StyledFormControl
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <StyledButton
            variant="dark"
            type="submit"
            className="mt-4"
            onClick={handleSignIn}>
            Sign In
          </StyledButton>
        </Form>
      </StyledFormWrapper>
    </StyledContainer>
  );
}

export default Signin;

