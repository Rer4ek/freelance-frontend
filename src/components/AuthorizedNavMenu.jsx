import '../Styles/Header.css';

import demo from "../assets/react.svg";

import { Nav, Image, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AuthorizedNavMenu() {
    return (
        <Nav>
            <NavDropdown title={<Image className="nav-image" src={demo} roundedCircle />} id="basic-nav-dropdown" menuVariant="dark" size="xl">

                <NavDropdown.Item className="dropmenu-element" as={Link} to='/orders'>
                    Заказы
                    <i className="bx bx-basket menu-icon"></i>  
                </NavDropdown.Item >

                <NavDropdown.Item className="dropmenu-element" as={Link} to='/profile'>
                    Профиль
                    <i className="bx bx-user menu-icon"></i>  
                </NavDropdown.Item>

                <NavDropdown.Divider color="#fffff" />

                <NavDropdown.Item className="dropmenu-element" as={Link} to='/settings'>
                    Настройки
                    <i className="bx bx-cog setting-icon"></i>  
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
}
