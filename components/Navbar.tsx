import Link from "next/link";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
      <Container>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Nav.Link as={Link} href="/">
              Breaking News
            </Nav.Link>
            <Nav.Link as={Link} href="/search">
              Search News
            </Nav.Link>
            <NavDropdown title="Categories" id="categories-dropdown">
              <NavDropdown.ItemText as={Link} href="/categories/business">
                Business
              </NavDropdown.ItemText>
              <NavDropdown.ItemText as={Link} href="/categories/entertainment">
                Entertainment
              </NavDropdown.ItemText>
              <NavDropdown.ItemText as={Link} href="/categories/general">
                General
              </NavDropdown.ItemText>
              <NavDropdown.ItemText as={Link} href="/categories/health">
                Health
              </NavDropdown.ItemText>
              <NavDropdown.ItemText as={Link} href="/categories/science">
                Science
              </NavDropdown.ItemText>
              <NavDropdown.ItemText as={Link} href="/categories/sports">
                Sports
              </NavDropdown.ItemText>
              <NavDropdown.ItemText as={Link} href="/categories/technology">
                Technology
              </NavDropdown.ItemText>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
