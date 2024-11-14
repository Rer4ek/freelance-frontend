import '../Styles/header.css'

import AuthorizedNavMenu from "./AuthorizedNavMenu";
import NoneAuthorizedNavMenu from "./NoneAuthorizedNavMenu";

import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function NaviBar(){
  const [isAuth, SetAuth] = useState(true);
  
  return (
      <Navbar collapseOnSelect expand="xl" className="navbar-dark header-color">
      <Container>
        <NavLink className="navbar-brand" to="/">Великий сайт Никиты</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Главная</NavLink>
          </Nav>
          { isAuth ? <AuthorizedNavMenu /> : <NoneAuthorizedNavMenu /> }
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    );
  }