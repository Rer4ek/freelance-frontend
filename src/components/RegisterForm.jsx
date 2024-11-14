import "../styles/AuthenticationForm.css"

import { Container } from "react-bootstrap";

export default function RegisterForm(){
    return (
    <Container className="container-auth">
        <div className="box">
            <h1 className="title">
                Регистрация
            </h1>

            <div className="input-box">
                <input type="text" placeholder="Логин" ></input>
            </div>

            <div className="input-box">
                <input type="password" placeholder="Пароль" ></input>
            </div>

            <div className="input-box">
                <input type="password" placeholder="Повторите пароль" ></input>
            </div>

            <button type="submit">Регистрация</button>

            <p className="error-message">Ошибка 😢</p>


        </div>
    </Container>
    );
  }

  