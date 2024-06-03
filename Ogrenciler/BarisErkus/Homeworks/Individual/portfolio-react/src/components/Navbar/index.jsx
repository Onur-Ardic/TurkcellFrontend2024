import { A } from "../../common/styled";
import { NavbarContainer, NavbarTitle, List, ListItemLink } from "./styled";

const Navbar = ({ email }) => {
  return (
    <NavbarContainer>
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
            Project and Articles
          </ListItemLink>
        </li>
        <li className="list-item">
          <ListItemLink href="#referances">Referances</ListItemLink>
        </li>
      </List>
      <A href={"mailto:" + email}>Contact Me</A>
    </NavbarContainer>
  );
};

export default Navbar;
