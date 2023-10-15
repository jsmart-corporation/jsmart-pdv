import { api } from "../../Api/AxiosApi"
import { ICategoria } from "../../Interfaces"

export const PostCategoriaAsync = async (categoria: ICategoria) =>{
    return (await api.post('api/categoria',categoria)).data
}
export const PatchCategoriaAsync = async (categoria: ICategoria) =>{
    return (await api.patch('api/categoria',categoria)).data
}
export const DeleteCategoriaAsync = async (categoria: number) =>{
    return (await api.patch(`api/categoria/delete?codCategoria=${categoria}`)).data
}