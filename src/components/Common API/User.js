import axios from "axios"
import * as Config from "../../Utils/Config";

export const Get_Pattern_Name = async (data) => {
    try {
        const res = await axios.post(`${Config.base_url}LastPattern`, data)
        
        return res?.data
    }
    catch (err) {
        return err
    }

}