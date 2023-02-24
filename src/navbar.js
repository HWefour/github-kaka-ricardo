import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import RechercheFilm from './recherchefilm';

function BasicExample() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img id='bedflixlogo' src={require('./bedflix-logo.png')}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Films</Nav.Link>
            <Nav.Link href="#link">Series</Nav.Link>
            <Nav.Link href="#link">Recherches</Nav.Link>
            <div className="searchBar">
          <input type="text" id="recherche" />
          <button id="btnRecherche" type="submit">Search</button>
        </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;