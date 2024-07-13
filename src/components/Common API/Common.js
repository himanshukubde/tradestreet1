import axios from "axios"
import * as Config from "../../Utils/Config";

export const LoginPage=async(data)=>{
    try{
        const res =  await axios.post(`${Config.base_url}login`, data)
        return res?.data
    }
    catch(err){
        return err
    }

}

export const ForgotPassword=async(data)=>{
    try{
        const res =  await axios.post(`${Config.base_url}Resetpass`, data)
        return res?.data
    }
    catch(err){
        return err
    }
}

export const PasswordChange=async(data)=>{
    try{
        const res =  await axios.post(`${Config.base_url}forgetpass`, data)
        return res?.data
    }
    catch(err){
        return err
    }

}