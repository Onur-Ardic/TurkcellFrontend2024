import React from "react";
// import { useSelector } from "react-redux";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
// import TodoList from "../components/Todos";
import {
  HomeContainer,
  WelcomeWrapper,
  HomeTitle,
  HomeText,
} from "../style/styled";

const HomePage = () => {
  // // const loggedInUser = JSON.parse(localStorage.getItem("userData")).userName;
  // const loggedInUser = JSON.parse(localStorage.getItem("userData") || "");
  let loggedInUser = "";
  try {
    const userData = JSON.parse(localStorage.getItem("userData"));
    loggedInUser = userData ? userData.userName : "";
  } catch (error) {
    console.log("Error parsing user data from localStorage:", error);
    loggedInUser = "";
  }

  const todoLength = useSelector((todoX) => todoX.todo.todolar);
  console.log(todoLength);

  return (
    <HomeContainer>
      <WelcomeWrapper className="p-5">
        <HomeTitle>Merhaba, {loggedInUser ? loggedInUser : ""}!</HomeTitle>
        <HomeTitle>Hoşgeldin!</HomeTitle>
        <HomeText>
          Görevlerinizi takip edin ve yönetin. <br />
          Aktif olarak <b>{todoLength.length}</b> adet todonuz bulunmaktadir
        </HomeText>
      </WelcomeWrapper>
      <img
        src="https://cdn.dribbble.com/users/3956332/screenshots/15622129/media/80c74c27fde0f9bee66b1e67bf963f64.jpg"
        style={{ maxWidth: "500px" }}
        className="img-fluid rounded-4 m-4"
      />
    </HomeContainer>
  );
};

export default HomePage;
