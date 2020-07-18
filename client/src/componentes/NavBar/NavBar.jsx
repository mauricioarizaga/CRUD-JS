import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>CRUD - WES</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Link to="/2535">
          <Nav.Link href="#filtro">Usuarios 25-35</Nav.Link>
        </Link>
        <Link to="/registro">
          <Nav.Link href="#register">Crear Usuario</Nav.Link>
        </Link>
        <Link to="/editor">
          <Nav.Link href="#edit">Editor</Nav.Link>
        </Link>
        <Link to="/todos">
          <Nav.Link href="#edit">Todos los Usuarios</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
}
