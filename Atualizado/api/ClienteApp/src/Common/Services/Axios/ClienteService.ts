import { api } from "../../Api/AxiosApi"
import { IClientes } from "../../Interfaces"

export const PostClienteAsync = async (cliente: IClientes) =>{
    return (await api.post('api/cliente',cliente)).data
}
export const PatchClienteAsync = async (cliente: IClientes) =>{
    return (await api.patch('api/cliente',cliente)).data
}
export const DeleteClienteAsync = async (cliente: number) =>{
    return (await api.patch(`api/cliente/delete?codCliente=${cliente}`)).data
}
export const GetClienteCPFCNPJAsync = async (cliente: string) =>{
    return (await api.get(`api/cliente/documento?doc=${cliente}`)).data
}