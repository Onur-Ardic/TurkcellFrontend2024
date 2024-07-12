"use client"
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"
import {auth} from "../firebase/firebase"
import { useRouter } from "next/navigation";
import {
    StyledContainer,
    StyledFormWrapper,
    StyledFormControl,
    StyledFormLabel,
    StyledButton,

} from "./page.style"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const router = useRouter();

  const [ createUserWithEmailAndPassword ] = useCreateUserWithEmailAndPassword(auth);
  const handleSignUp = async (event) => {
       event.preventDefault(); 
    try {
        const res = await createUserWithEmailAndPassword(email,password)
        setEmail("");
        setPassword("");
        setName("");
        setSurname("");
    }
    catch(e){
    }
  };

   return (
     <StyledContainer>
       <StyledFormWrapper>
         <h2 className="text-center mb-4">Sign Up</h2>
         <Form onSubmit={handleSignUp}>
           <Form.Group controlId="formName">
             <StyledFormLabel>Name</StyledFormLabel>
             <StyledFormControl
               type="text"
               placeholder="Enter name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               required
             />
           </Form.Group>
           <Form.Group controlId="formSurname" className="mt-3">
             <StyledFormLabel>Surname</StyledFormLabel>
             <StyledFormControl
               type="text"
               placeholder="Enter surname"
               value={surname}
               onChange={(e) => setSurname(e.target.value)}
               required
             />
           </Form.Group>
           <Form.Group controlId="formEmail" className="mt-3">
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
             onClick={() => router.push("/")}>
             Sign Up
           </StyledButton>
         </Form>
       </StyledFormWrapper>
     </StyledContainer>
   );
}

export default SignUp;