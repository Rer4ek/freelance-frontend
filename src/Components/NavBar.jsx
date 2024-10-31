import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NaviBar(){
    return (
      <Navbar collapseOnSelect expand="xl" className="navbar-dark bg-dark">
      <Container>
        <NavLink className="navbar-brand" href="/">Великий сайт Никиты</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Главная</NavLink>
          </Nav>
          <Nav>
            <NavLink className="nav-link" to="/singin">Войти</NavLink>
            <NavLink className="nav-link" to="/register">Регистрация</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    );
  }