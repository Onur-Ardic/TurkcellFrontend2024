import "./App.css";
import { useSelector } from "react-redux";
import List from "./components/List";
import Form from "./components/Form";
import { Container, H1, StyledUl } from "../styled";
function App() {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <>
      <div className="ripple-background">
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle medium shade4"></div>
        <div className="circle small shade5"></div>
        <Container>
          <H1>Redux Todo</H1>
          <Form />
          <StyledUl>
            {todos.map((todo) => (
              <List key={todo.id} todo={todo} />
            ))}
          </StyledUl>
        </Container>
      </div>
    </>
  );
}

export default App;
