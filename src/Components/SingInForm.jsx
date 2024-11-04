import "../styles/AuthenticationForm.css"

import { Container } from "react-bootstrap";

export default function SingInForm(){
    return (
      <Container className="container-auth">
        <div className="box">
            <h1 className="title">
                Вход
            </h1>

            <div className="input-box">
                <input type="text" placeholder="Логин" ></input>
            </div>

            <div className="input-box">
                <input type="password" placeholder="Пароль" ></input>
            </div>

            <button type="submit" className="button-authentication">Войти</button>

            <p className="error-message">Ошибка 😢</p>


        </div>
      </Container>
    );
  }