import { api } from "../../Api/AxiosApi"
import { IFormaPagamento } from "../../Interfaces"

export const PostFormaPagamentoAsync = async (forma: IFormaPagamento) =>{
    return (await api.post('api/formaspagamento',forma)).data
}
export const PatchFormaPagamentoAsync = async (forma: IFormaPagamento) =>{
    return (await api.patch('api/formaspagamento',forma)).data
}
export const DeleteFormaPagamentoAsync = async (forma: number) =>{
    return (await api.patch(`api/formaspagamento/delete?codFormaPagamento=${forma}`)).data
}