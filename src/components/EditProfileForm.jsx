import "../styles/ProfilePage.css"

import { Image, Form, Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { replaceNulls } from "../utils/Nulls";

import LabledInput from "../components/LabledInput";
import UserControllerProxy from "../controllers/UserControllerProxy";
import { b64toBlob, GetFileList } from "../utils/Files";

export default function EditProfileForm(){
    const [profilePhoto, setPhoto] = useState();
    const [error, setError] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [user, setUser] = useState({
        "name": "",
        "description": "",
        "resume": "",
        "photo": "",
        "password": "",
        "login": ""
    });

    const location = useLocation();

    const userContoller = new UserControllerProxy();
    useEffect(() => {
        const getUser = async () => {
            const userContoller = new UserControllerProxy();

            const userResponse = await userContoller.getUserBySession();

            const imageBlob = b64toBlob(userResponse.photo.fileContents, userResponse.photo.contentType);
            document.forms.edit.Photo.files = GetFileList(imageBlob, userResponse.photo.fileDownloadName);
            const photoUrl = URL.createObjectURL(imageBlob);
            
            if (userResponse.resume !== null){
                const resumeBlob = b64toBlob(userResponse.resume.fileContents, userResponse.resume.contentType);
                document.forms.edit.Resume.files = GetFileList(resumeBlob, userResponse.resume.fileDownloadName);
            }
            

            setUser(replaceNulls({...userResponse, password: ""}));
            setPhoto(photoUrl);
        };

        getUser();
    }, [location.pathname])

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file !== undefined)
        {
            setPhoto(URL.createObjectURL(file));
        }

    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const userForm = new FormData(e.target);
        userForm.append("Login", user.login);
        try {
            await userContoller.updateUser(user.id, userForm);
            handleShow();
        } catch (error) {
            console.log(error);
            
        }

    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Данные обновлены</Modal.Title>
                </Modal.Header>
                <Modal.Body>Успешный успех!</Modal.Body>
            </Modal>

        <Form name="edit" className="edit-form" onSubmit={onSubmit}>
            <div className="edit-data">
                <div className="underline">
                    <LabledInput labelClassName="input-data-label" 
                                    labelIcon="bx bx-user menu-icon"
                                    inputClassName="input-data"
                                    type="text" id="input-name"
                                    helpTitle="Укажите ваше настоящие имя"
                                    labelTitle="Имя"
                                    onChange={(e) => setUser({...user, name: e.target.value})}
                                    value={user.name}
                                    name="Name"
                                    minLength="3" maxLength='50'
                                    required
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
                                    onChange={(e) => setUser({...user, description: e.target.value})}
                                    value={user.description}
                                    name="Description"
                                    maxLength='500'
                    />
                </div>
                <div className="underline">
                    <LabledInput labelClassName="input-data-label" 
                                    labelIcon="bx bx-star menu-icon"
                                    inputClassName="input-data"
                                    type="password" id="input-password"
                                    helpTitle="Это пароль"
                                    labelTitle="Пароль"
                                    onChange={(e) => setUser({...user, password: e.target.value})}
                                    value={user.password}
                                    name="Password"
                                    minLength="6" maxLength='50'
                                    required
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
                                    name="Resume"
                    />
                </div>
                <Button type="submit" className="button">Применить</Button>
                <h4 className="error-message">{error}</h4>
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
                                    name="Photo"
                    />
                </div>
            </div>
        </Form>
        </>
        
    );
  }