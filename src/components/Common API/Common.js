import axios from "axios"
import * as Config from "../../Utils/Config";

export const LoginPage=async(data)=>{
    try{

        console.log("CP :", `${Config.base_url}Login` )
        const res =  await axios.post(`${Config.base_url}Login`, data)
        return res?.data
    }
    catch(err){
        return err
    }

}