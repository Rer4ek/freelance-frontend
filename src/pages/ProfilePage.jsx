import "../styles/ProfilePage.css"

import { Container } from "react-bootstrap";
import EditProfileForm from "../components/EditProfileForm";


export default function ProfilePage(){
    return (
        <div id="wrapper">
            <Container className="container-profile">
                <EditProfileForm/>
            </Container>
        </div>
    );
  }