import axios from "axios";
import { getCookie } from "../utils/Cookies";

export default class UserControllerProxy{
    _url = "https://localhost:7208/User"

    _cookieName = "token"

    updateUser = async (id, user) => {
        console.log(user);
        const response = await axios.put(this._url + "/" + id, user, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });      
        return response.data;
    }

    createUser = async (user) => {
        return (await axios.post(this._url, user)).status;
    }

    getUserBySession = async () => {
        const cookie = getCookie(this._cookieName);

        if (cookie === undefined){
            return undefined;
        }

        const response = await axios.put(this._url + "/Session/" + cookie);        
        return response.data;
    }
}