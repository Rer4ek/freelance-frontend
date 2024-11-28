import axios from "axios";


export default class RegistrationControllerProxy{
    _url = "https://localhost:7208/Registration"

    createUser = async (user) => {
        return (await axios.post(this._url, user)).status;
    }
}