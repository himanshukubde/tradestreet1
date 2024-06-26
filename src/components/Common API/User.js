import axios from "axios"
import * as Config from "../../Utils/Config";

export const Get_Last_Pattern_All_Data = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}LastPattern`, data)

        return res?.data
    }
    catch (err) {
        return err
    }

}



export const Get_Profile_Data = async (data) => {
    try {
        const res = await axios.get(`${Config.base_url}Profile/${data.username}`)

        return res?.data
    }
    catch (err) {
        return err
    }

}



export const getNetPnLData = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}NetPnL`, data)
        return res?.data
    }
    catch (err) {
        return err

  
    }
}


export const get_Trade_Response = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}Traderesponse`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}




export const GetAllUserScript = async (data) => {
    try {
        const res = await axios.get(`${Config.base_url}Dashboard/${data.userName}`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}

export const GetAllUserGroup = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}clientalotgroupname`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}



export const AddScript = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}Addscript`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}