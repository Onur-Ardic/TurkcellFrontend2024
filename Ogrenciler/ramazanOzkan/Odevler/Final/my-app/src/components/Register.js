"use client";

import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  //   background-color: ${({ theme }) => theme.colors.secondary};
`;

const FormWrapper = styled.div`
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  //   background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  //   color: ${({ theme }) => theme.colors.primary};
`;

const RegisterPage = () => {
  return (
    <Container>
      <FormWrapper>
        <Title>Register</Title>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button
            className="mt-2"
            variant="primary"
            type="submit"
            style={{ backgroundColor: "#ff6600", borderColor: "#ff6600" }}
          >
            Register
          </Button>
        </Form>
        <div style={{ marginTop: "1rem" }}>
          <a href="/login" style={{ color: "#ff6600" }}>
            Already have an account? Login
          </a>
        </div>
      </FormWrapper>
    </Container>
  );
};

export default RegisterPage;
