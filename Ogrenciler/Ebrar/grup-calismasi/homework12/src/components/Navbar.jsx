import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub } from "react-icons/fa6";

function NavbarExample({user, setUser, handleClick }) {
    

  return (
    <>
    <Navbar expand="lg" className='p-3'>
      <Container>
        <Navbar.Brand href="#"><FaGithub style={{color: "white", fontSize: "30px"}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
               type="text"  value={user}  onChange={(e) => setUser(e.target.value)} placeholder="Kullanıcı Adı Giriniz"
              className="me-2"
              aria-label="Search"
            />
            <Button onClick={handleClick} variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  );
}

export default NavbarExample;