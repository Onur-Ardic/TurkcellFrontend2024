import { Container, FormSingUp, H1, StyledUl, UserHeader } from "../../styled";
import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { signOutFirebase } from "../service/firebase";
import { addTodo } from "../redux/slices/todoSlice";
import { useTranslation } from "react-i18next";
import TodoItem from "../components/TodoItem";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todo.todos);
  const { user, userMail } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  const handleLogout = () => {
    signOutFirebase();
    dispatch(addTodo([]));
  };

  return (
    <Container>
      <UserHeader>
        <h1>{userMail}</h1>
        <FormSingUp onClick={handleLogout}>{t("logout")}</FormSingUp>
      </UserHeader>
      <H1>{t("title")}</H1>
      <Form />
      <StyledUl>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </StyledUl>
    </Container>
  );
};

export default Home;
