import { Container, H1, StyledUl } from "../../styled";
import Form from "../components/Form";
import { useSelector } from "react-redux";
import List from "../components/List";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { signOutFirebase } from "../service/firebase";

const Home = () => {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todo.todos);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <Container>
      <button onClick={() => signOutFirebase()}>Logout</button>

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
