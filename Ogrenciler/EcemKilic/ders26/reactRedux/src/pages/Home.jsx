import { Container, FormSingUp, H1, StyledUl, UserHeader } from "../../styled";
import Form from "../components/Form";
import { useSelector } from "react-redux";
import List from "../components/List";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { signOutFirebase } from "../service/firebase";

const Home = () => {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todo.todos);
  const { user,userMail } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <Container>
      <UserHeader>
        <h1>{userMail}</h1>
        <FormSingUp onClick={() => signOutFirebase()}>Logout</FormSingUp>
      </UserHeader>

      <H1>Redux Todo</H1>
      <Form />
      <StyledUl>
        {todos.map((todo) => (
          <List key={todo.id} todo={todo} />
        ))}
      </StyledUl>
    </Container>
  );
};

export default Home;
