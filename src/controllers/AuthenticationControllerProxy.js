import axios from "axios";

import { setCookie, getCookie } from "../utils/Cookies";

export default class AuthenticationControllerProxy{
    _url = "https://localhost:7208/Authentication"

    _cookieName = "token"

    authentication = async (authenticationData) => {
        const response = await axios.post(this._url, authenticationData);
        
        if (response.status === 200){

            const cookie = getCookie(this._cookieName);
            if (cookie != undefined){
                await axios.put(this._url + "/" + cookie);
            }

            let date = new Date(Date.now());
            date.setDate(date.getDate() + 100);
            date = date.toUTCString();

            setCookie(this._cookieName, response.data, {"expires": date})
        }
        
        return response.status;
    }
}