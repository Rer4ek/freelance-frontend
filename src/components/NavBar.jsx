import '../Styles/header.css'

import AuthorizedNavMenu from "./AuthorizedNavMenu";
import NoneAuthorizedNavMenu from "./NoneAuthorizedNavMenu";
import AuthorizationControllerProxy from "../controllers/AuthorizationControllerProxy"

import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NaviBar(){
  
  const [isAuth, setAuth] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const controller = new AuthorizationControllerProxy();
    const checkAuthorization = async () => {
      const response = await controller.checkValid();
      setAuth(response);
    };

    checkAuthorization();
  }, [location.pathname])

  
  return (
      <Navbar collapseOnSelect expand="xl" className="navbar-dark header-color">
      <Container>
        <NavLink className="navbar-brand" to="/">Великий сайт Никиты</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Главная</NavLink>
            <NavLink className="nav-link" to="/resumes">Резюме</NavLink>
            <NavLink className="nav-link" to="/orders">Заказы</NavLink>
          </Nav>
          {  isAuth ? <AuthorizedNavMenu /> : <NoneAuthorizedNavMenu /> }
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    );
  }