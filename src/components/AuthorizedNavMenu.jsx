import '../Styles/Header.css';

import demo from "../assets/react.svg";
import UserControllerProxy from '../controllers/UserControllerProxy';
import { Nav, Image, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { b64toBlob, GetFileList } from '../utils/Files';
import { useEffect, useState } from 'react';

export default function AuthorizedNavMenu() {

    const [photo, setPhoto] = useState(demo);
    const location = useLocation();

    useEffect(() => {
         const getUser = async () =>{
            const controller = new UserControllerProxy();
            const response = await controller.getUserBySession();
    
            const imageBlob = b64toBlob(response.photo.fileContents, response.photo.contentType);
            const photoUrl = URL.createObjectURL(imageBlob);
    
            setPhoto(photoUrl);
        }
        
        getUser();
    },  [location.pathname])

    return (
        <Nav>
            <NavDropdown title={<Image className="nav-image" src={photo} roundedCircle />} id="basic-nav-dropdown" menuVariant="dark" size="xl">

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
