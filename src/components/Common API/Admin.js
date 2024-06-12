import axios from "axios"
import * as Config from "../../Utils/Config";

export const CreateAccount = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}AdminSignup`, data)
        return res?.data
    }
    catch (err) {
        return err
    }

}

export const GetAdminDashboard = async (data) => {
    try {
        const res = await axios.get(`${Config.base_url}AdminDashboard`)

        return res?.data
    }
    catch (err) {
        return err
    }

}


export const Add_Group = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}AdminStrategiesGroup`, data)
        return res?.data
    }
    catch (err) {
        return err
    }

}

export const GetGroupNames = async () => {
    try {
        const res = await axios.get(`${Config.base_url}AdminGroupTable`)
        return res?.data
    }
    catch (err) {
        return err
    }

}

export const GetClientService = async () => {
    try {
        const res = await axios.get(`${Config.base_url}Profile`)
        return res?.data
    }
    catch (err) {
        return err
    }

}


export const AddBrokerCredential = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}Broker`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}

export const GetAllGroupService = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}Data`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}



export const Get_Symbol = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}GetSym`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}


export const Get_StrikePrice = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}GetStrike`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}

export const setSmtpDetail = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}upload_images`, data)
        return res?.data
    }
    catch (err) {

        return err
    }
}

export const GET_EXPIRY_DATE = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}GetExpiry`, data)
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

