import axios from "axios";

export const fetchUsers = async () => {
    try{
        var respone = await axios.get("https://localhost:7208/users");
    }
    catch(e){
        console.log(e);
    }

    console.log(respone);
}