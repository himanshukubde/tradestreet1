import axios from "axios"
import * as Config from "../../Utils/Config";

export const CreateAccount=async(data)=>{
    try{
        const res =  await axios.post(`${Config.base_url}AdminSignup`, data)
        return res?.data
    }
    catch(err){
        return err
    }

}

export const GetAdminDashboard=async(data)=>{
    try{
        const res =  await axios.get(`${Config.base_url}AdminDashboard`)
    
        return res?.data
    }
    catch(err){
        return err
    }

}

export const Add_Group=async(data)=>{
    console.log("CPPP :", data)
    
    try{
        const res =  await axios.get(`${Config.base_url}AdminStrategiesGroup` , data)
        return res?.data
    }
    catch(err){
        return err
    }

}

