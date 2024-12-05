import { useState } from "react";
import "../styles/signForm.css"

import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserControllerProxy from "../controllers/UserControllerProxy";
import AuthenticationControllerProxy from "../controllers/AuthenticationControllerProxy";


export default function RegisterForm(){
    const [user, setUser] = useState({
        "name": null,
        "description": null,
        "resume": null,
        "photo": null,
        "password": null,
        "login": null
    });

    const [errorMessage, setError] = useState("")
    const navigate = useNavigate();
    const userController = new UserControllerProxy();
    const authenticationController = new AuthenticationControllerProxy();

    const onSubmit = async (e) => {
        e.preventDefault();
        
        const mainPassword = document.getElementById("main-password");
        const repeatPassword = document.getElementById("repeat-password");
    
        if (mainPassword.value != repeatPassword.value){
            setError("Ошибка: пароли должны совпадать 😢");
            return;
        }
        setError("");

        try {
            const response = await userController.createUser(user);
            if (response === 200) {
                await authenticationController.authentication({"login": user.login, "password": user.password});
                navigate("/profile");
                return true
            }
        } catch (error) {
            setError(error.response.data);
        }

    }

    return (
    <Container className="sign-container">
        <div className="sign-form">
            <div className="sign-header">
                <i onClick={() => {navigate('/')}} className='bx bx-arrow-back back-arrow'></i>
                <h1 className="title">
                    Регистрация
                </h1>
            </div>


            <form onSubmit={onSubmit} method="post">
                <div className="input-box">
                    <input type="text" onChange={(e) => setUser({...user, login: e.target.value})} minLength="2" maxLength="32" inputMode="verbatim" placeholder="Логин" required></input>
                </div>

                <div className="input-box">
                    <input id="main-password" type="password" onChange={(e) => setUser({...user, password: e.target.value})} minLength="6" maxLength='32' placeholder="Пароль" inputMode="verbatim"  required></input>
                </div>

                <div className="input-box">
                    <input id="repeat-password" type="password" minLength="6" maxLength='32' placeholder="Повторите пароль" inputMode="verbatim" required></input>
                </div>

                <button type="submit">Регистрация</button>

                <p className="error-message">{errorMessage}</p>
            </form>
            


        </div>
    </Container>
    );
  }

  