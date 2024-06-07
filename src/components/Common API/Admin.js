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
    try{
        const res =  await axios.post(`${Config.base_url}AdminStrategiesGroup` , data)
        return res?.data
    }
    catch(err){
        return err
    }

}

export const GetGroupNames=async()=>{
    try{
        const res =  await axios.get(`${Config.base_url}AdminGroupTable`)
        return res?.data
    }
    catch(err){
        return err
    }

}

export const GetClientService=async()=>{
    try{
        const res =  await axios.get(`${Config.base_url}Profile`)
        return res?.data
    }
    catch(err){
        return err
    }

}


export const AddBrokerCredential=async(data)=>{
    try{
        const res =  await axios.post(`${Config.base_url}Broker` , data)
        return res?.data
    }
    catch(err){
        return err
    }
}

export const GetAllGroupService=async(data)=>{
    try{
        const res =  await axios.post(`${Config.base_url}Data` , data)
        return res?.data
    }
    catch(err){
        return err
    }
}
