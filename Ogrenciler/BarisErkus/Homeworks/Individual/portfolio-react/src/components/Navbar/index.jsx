import { A } from "../../common/styled";
import { NavbarContainer, NavbarTitle, List, ListItemLink } from "./styled";

const Navbar = ({ email }) => {
  return (
    <NavbarContainer className="animate__animated animate__backInDown">
      <NavbarTitle>Curriculum Vitae</NavbarTitle>
      <List>
        <li className="list-item">
          <ListItemLink href="#home">Home</ListItemLink>
        </li>
        <li className="list-item">
          <ListItemLink href="#aboutMe">About Me</ListItemLink>
        </li>
        <li className="list-item">
          <ListItemLink href="#worksEducations">
            Work Experiences and Educations
          </ListItemLink>
        </li>
        <li className="list-item">
          <ListItemLink href="#projectsArticles">
            Project and Articles
          </ListItemLink>
        </li>
        <li className="list-item">
          <ListItemLink href="#skillsCertificates">
            Skills and Refrances
          </ListItemLink>
        </li>
      </List>
      <A href={"mailto:" + email}>Contact Me</A>
    </NavbarContainer>
  );
};

export default Navbar;
