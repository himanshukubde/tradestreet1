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

export const get_Trade_Report = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}Tradereport`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}

export const Get_Panle_Logs = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}PanelTrackAll`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}

export const DeleteUserScript = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}Squareoff`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}

export const Continue = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}Continue`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}

export const Discontinue = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}Discontinue`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}


export const OpenPosition = async (data) => {
    try {
        const res = await axios.get(`${Config.base_url}DashboardOpen/${data.userName}`)
        return res?.data
    }
    catch (err) {
        return err
    }
}


export const GetBrokerData = async (data) => {
    try {
        const res = await axios.get(`${Config.base_url}Brokername/${data.userName}`)
        return res?.data
    }
    catch (err) {
        return err
    }
}

 
export const UpdateBrokerData = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}Broker`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}

export const TradingStatus = async (data) => {
    try {
        const res = await axios.get(`${Config.base_url}TradingStatus/${data.userName}`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}

export const ConnectBroker = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}ConnectBroker`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}

export const AvailableScript = async (data) => {
    try {
        const res = await axios.get(`${Config.base_url}Script/AvailableScript`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}


export const GetSymbolIp = async (data) => {
    try {
        const res = await axios.get(`${Config.base_url}SymbolP/${data.Username}`)
        return res?.data
    }
    catch (err) {
        return err
    }
}


export const ChartPatternAPI = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}ChartPattern`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}

export const Candlestick_Pattern = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}CandlestickPattern`, data)
        return res?.data
    }
    catch (err) {
        return err
    }
}
