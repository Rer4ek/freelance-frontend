import "../styles/signForm.css"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import AuthenticationControllerProxy from "../controllers/AuthenticationControllerProxy"

export default function SingInForm(){
  const [authenticationData, setAuthenticationData] = useState({
      "password": null,
      "login": null
  });

  const [errorMessage, setError] = useState("")
  const navigate = useNavigate();
  const controller = new AuthenticationControllerProxy();

  const onSubmit = async (e) => {
      e.preventDefault();
      
      try {
          const response = await controller.authentication(authenticationData);
          if (response === 200) {
              navigate("/");
              return true
          }
      } catch (error) { 
          console.log(error);
          setError(error.response.data);
      }

  }

  return (
  <Container className="sign-container">
      <div className="sign-form">
          <div className="sign-header">
              <i onClick={() => {navigate('/')}} className='bx bx-arrow-back back-arrow'></i>
              <h1 className="title">
                  Вход
              </h1>
          </div>


          <form onSubmit={onSubmit} method="post">
              <div className="input-box">
                  <input type="text" onChange={(e) => setAuthenticationData({...authenticationData, login: e.target.value})} minLength="2" maxLength="32" inputMode="verbatim"  placeholder="Логин" required></input>
              </div>

              <div className="input-box">
                  <input id="main-password" type="password" onChange={(e) => setAuthenticationData({...authenticationData, password: e.target.value})} minLength="6" maxLength='32' placeholder="Пароль" inputMode="verbatim"  required></input>
              </div>

              <button type="submit">Вход</button>

              <p className="error-message">{errorMessage}</p>
          </form>
          


      </div>
  </Container>
  );
}