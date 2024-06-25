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