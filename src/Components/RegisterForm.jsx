import "../Styles/RegisterForm.css"

export default function RegisterForm(){
    return (
      <div className="container-register">
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

            <button type="submit" className="button-register">Регистрация</button>

            <p className="error-message">Ошибка 😢</p>


        </div>
      </div>
    );
  }