import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NoneAuthorizedNavMenu(){
  return (
        <Nav>
            <NavLink className="nav-link" to="/singin">Войти</NavLink>
            <NavLink className="nav-link" to="/register">Регистрация</NavLink>
        </Nav>
    );
  }