import { api } from "../../Api/AxiosApi"


export const Auth = async (auth: any) =>{
    return (await api.post('api/user/auth',auth)).data
}
export const GetData = async () => {
    return (await api.get('api/user/data')).data
}