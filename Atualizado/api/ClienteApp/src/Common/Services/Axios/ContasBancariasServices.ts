import { api } from "../../Api/AxiosApi"
import { ContaBancaria } from "../../Interfaces"

export const PostContaBancariaAsync = async (conta: ContaBancaria) =>{
    return (await api.post('api/contabancaria',conta)).data
}
export const PatchContaBancariaAsync = async (conta: ContaBancaria) =>{
    return (await api.patch('api/contabancaria',conta)).data
}
export const DeleteContaBancariaAsync = async (conta: number) =>{
    return (await api.patch(`api/contabancaria/delete?codContaBancaria=${conta}`)).data
}