import { api } from "../../Api/AxiosApi"
import { Produto } from "../../Interfaces"

export const PostProdutoAsync = async (produto: Produto) =>{
    return (await api.post('api/produto',produto)).data
}
export const PatchProdutoAsync = async (produto: Produto) =>{
    return (await api.patch('api/produto',produto)).data
}
export const DeleteProdutoAsync = async (produto: number) =>{
    return (await api.patch(`api/produto/delete?codProduto=${produto}`)).data
}
export const GetProdutoCodigoBarraAsync = async (produto: string) =>{
    return (await api.get(`api/produto/codBarra?codBarra=${produto}`)).data
}