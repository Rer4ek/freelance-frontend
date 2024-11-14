import "../styles/ProfilePage.css"

import { Image, Form, Button } from "react-bootstrap";
import { useState } from "react";

import demo from "../assets/react.svg";
import LabledInput from "../components/LabledInput";

export default function EditProfileForm(){
    let [profilePhoto, setPhoto] = useState(demo);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setPhoto(URL.createObjectURL(file));
    };

    return (
        <Form className="edit-form">
            <div className="edit-data">
                <div className="underline">
                    <LabledInput labelClassName="input-data-label" 
                                    labelIcon="bx bx-user menu-icon"
                                    inputClassName="input-data"
                                    type="text" id="input-name"
                                    helpTitle="Укажите ваше настоящие имя"
                                    labelTitle="Имя"
                    />
                </div>
                <div className="underline">
                    <LabledInput labelClassName="input-data-label" 
                                    labelIcon="bx bx-info-circle menu-icon"
                                    inputClassName="input-data"
                                    type="textarea" id="input-discription"
                                    helpTitle="Тут вы можете кратко описать себя"
                                    labelTitle="Опиcание"
                                    rows="4"
                    />
                </div>
                <div className="underline">
                    <LabledInput labelClassName="input-data-label" 
                                    labelIcon="bx bx-star menu-icon"
                                    inputClassName="input-data"
                                    type="password" id="input-password"
                                    helpTitle="Это пароль"
                                    labelTitle="Пароль"
                    />
                </div>
                <div className="complete underline">
                    <LabledInput labelClassName="input-data-label" 
                                    labelIcon="bx bx-like menu-icon"
                                    inputClassName="input-data"
                                    type="file" id="input-resume"
                                    helpTitle="Выбрать файл формата: .svg .aye"
                                    labelTitle="Резюме"
                                    accept=".docx"
                    />
                </div>
                <Button type="submit" className="button">Применить</Button>
            </div>
            <div>
                <div className="edit-photo">
                    <Image className="profile-photo" roundedCircle src={profilePhoto}/>

                    <LabledInput labelClassName="input-data-label" 
                                    labelIcon="bx bx-info-like menu-icon"
                                    inputClassName="input-file"
                                    type="file" id="input-profile-photo"
                                    helpTitle="Выбрать файл формата: .svg .aye"
                                    accept="image/png, image/jpeg"
                                    onChange={handleFileChange}
                    />
                </div>
            </div>
        </Form>
    );
  }