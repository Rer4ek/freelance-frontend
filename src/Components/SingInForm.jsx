import "../Styles/SingInForm.css"
import "../Styles/Form.css"

export default function SingInForm(){
    return (
      <div className="container-singin">
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

            <button type="submit" className="button-singin">Войти</button>

            <p className="error-message">Ошибка 😢</p>


        </div>
      </div>
    );
  }