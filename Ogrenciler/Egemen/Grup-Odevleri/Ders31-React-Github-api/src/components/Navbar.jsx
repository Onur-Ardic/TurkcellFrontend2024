import styled from "styled-components";
import { FaGithub } from "react-icons/fa6";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";

const StyledNavbar = styled(Navbar)`
  background-color: #14161a;
  padding: 16px;
`;

const StyledBrand = styled(Navbar.Brand)`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(FaGithub)`
  color: white;
  font-size: 30px;
`;

const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
`;

const StyledFormInput = styled(Form.Control)`
  margin-right: 8px;
`;

const StyledNav = styled(Nav)`
  margin-top: 8px;
  margin-bottom: 8px;

  margin-right: auto;
`;

const NavbarSection = ({ user, setUser, handleClick }) => {
  return (
    <StyledNavbar expand="lg">
      <Container>
        <StyledBrand href="#">
          <StyledIcon />
        </StyledBrand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <StyledNav navbarScroll />
          <StyledForm>
            <StyledFormInput
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Kullanıcı Adı Giriniz"
              aria-label="Search"
            />
            <Button
              onClick={() => handleClick(user)}
              variant="outline-secondary">
              Search
            </Button>
          </StyledForm>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default NavbarSection;
