import axios from "axios";

import { getCookie } from "../utils/Cookies";

export default class AuthorizationControllerProxy{
    _url = "https://localhost:7208/Authorization"

    _cookieName = "token"

    checkValid = async () => {
        const cookie = getCookie(this._cookieName);

        if (cookie === undefined){
            return false;
        }

        const response = await axios.put(this._url + "/" + cookie);        
        return response.data;
    }
}