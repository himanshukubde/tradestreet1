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
        const res = await axios.post(`${Config.base_url}Groupstrategies`, data)
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

export const AddAdminScript = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}AdminAddscript`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}

export const Get_Pattern_Time_Frame = async () => {
    try {
        const res = await axios.get(`${Config.base_url}Timeframe`)
        return res?.data

    }
    catch (err) {
        return err
    }
}

export const Get_Pattern_Name = async () => {
    try {
        const res = await axios.get(`${Config.base_url}Pattern/CandleStick`)
        return res?.data

    }
    catch (err) {
        return err
    }
}

export const Get_Pattern_Charting = async () => {
    try {
        const res = await axios.get(`${Config.base_url}Pattern/Charting`)
        return res?.data

    }
    catch (err) {
        return err
    }
}

export const Get_All_Service = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}Servicereport`, data)
        return res?.data
    }
    catch (err) {
        return err

    }
}


export const get_User_Data = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}Data`, data)
        return res?.data
    }
    catch (err) {
        return err

    }
}


export const get_Trade_History = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}Tradehistory`, data)
        return res?.data
    }
    catch (err) {
        return err

    }
}

export const get_PnL_Data = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}Barchart`, data)
        return res?.data
    }
    catch (err) {
        return err

    }
}

export const get_EQuityCurveData = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}Equitycurve`, data)
        return res?.data
    }
    catch (err) {
        return err

    }
}


export const get_DrapDownData = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}Drawdown`, data)
        return res?.data
    }
    catch (err) {
        return err

  
    }
}

export const get_FiveMostProfitTrade = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}fiveprofit`, data)
        return res?.data
    }
    catch (err) {
        return err

  
    }
}

export const get_FiveMostLossTrade = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}fiveloss`, data)
        return res?.data
    }
    catch (err) {
        return err

  
    }
}


export const GetClientLogs = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}Clientactivity`, data)
        return res?.data
    }
    catch (err) {
        return err

  
    }
}

export const Get_Client_Report = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}Threadreport`, data)
        return res?.data
    }
    catch (err) {
        return err

  
    }
}



export const Get_Broker_Name = async () => {
    try {
        const res = await axios.get(`${Config.base_url}Brokernamelist`)
        return res?.data

    }
    catch (err) {
        return err
    }
}

