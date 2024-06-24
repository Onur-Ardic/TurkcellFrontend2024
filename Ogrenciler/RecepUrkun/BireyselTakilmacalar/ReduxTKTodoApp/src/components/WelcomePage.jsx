import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HomeContainer,
  WelcomeWrapper,
  HomeTitle,
  HomeText,
  Button,
  DenemeX,
} from "../style/styled";

const WelcomePage = () => {
  return (
    <HomeContainer className="flex-column">
      <img
        src="    https://img.freepik.com/free-vector/set-people-welcoming-illustrated_52683-36326.jpg?t=st=1719183856~exp=1719187456~hmac=9c2eba6987b5f8c205382e0e38626705a05f4603e278dbfdb5b49c9e68f53d5a&w=1380"
        style={{ maxWidth: "500px" }}
        className="img-fluid rounded-4 m-4"
      />
      <WelcomeWrapper>
        <HomeTitle>Hoşgeldin!</HomeTitle>
        <HomeText>
          Todo uygulamamıza hoşgeldiniz. <br />
          <i>Hemen başlayın ve görevlerinizi yönetmeye başlayın.</i>
        </HomeText>
      </WelcomeWrapper>
      <div className="d-flex gap-4">
        <DenemeX to="/login">Giriş Yap</DenemeX>
        <DenemeX to="/register">Kayıt Ol</DenemeX>
      </div>
    </HomeContainer>
  );
};

export default WelcomePage;
