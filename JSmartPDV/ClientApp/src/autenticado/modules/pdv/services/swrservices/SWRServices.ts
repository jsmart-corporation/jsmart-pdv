import useSWR from "swr";
import api from "../../../../../common/API/axios";
import * as Interfaces from '../../interfaces/Interface'

export const useProdutosConsulta = (filtro: string | null) => {
    const {data:produtos,mutate,isLoading} = useSWR<Interfaces.Produto[]>(filtro !== '' ? `api/produto/desc?filtro=${filtro}` : null, async url => {
        const response = await api.get(url);
        return response.data;
    },{refreshWhenOffline: true,revalidateOnReconnect: true})
    
    return {produtos,mutate,isLoading}
}
export const useMetodosPagamento = () => {
    const {data:metodosPagamento,mutate,isLoading} = useSWR<Interfaces.MetodoPagamento[]>(`api/finmetodopagamento`, async url => {
        const response = await api.get(url);
        return response.data;
    },{refreshWhenOffline: true,revalidateOnReconnect: true})
    
    return {metodosPagamento,mutate,isLoading}
}
export const useProdutosRecomendados = () => {
    const {data:recomendados,mutate,isLoading: isRecomendadosLoading} = useSWR<Interfaces.Produto[]>(`api/produto/recomendados`, async url => {
        const response = await api.get(url);
        return response.data;
    },{refreshWhenOffline: true,revalidateOnReconnect: true})
    
    return {recomendados,mutate,isRecomendadosLoading}
}
export const useCaixaStatus = () => {
    const {data:caixa,mutate: mutateCaixa,isLoading: isCaixaLoading} = useSWR<Interfaces.Caixa>(`api/caixa/status`, async url => {
        const response = await api.get(url);
        return response.data;
    },{refreshWhenOffline: true,revalidateOnReconnect: true})
    
    return {caixa,mutateCaixa,isCaixaLoading}
}
export const useCaixaResumo = (use: boolean,caixaId?: number) => {
    const {data:caixaResumo,mutate: mutateCaixaResumo,isLoading: isLoadingCaixaResumo} = useSWR<Interfaces.CaixaResumo>(use? `api/caixa/resumo?caixaId=${caixaId}` : null, async url => {
        const response = await api.get(url);
        return response.data;
    },{refreshWhenOffline: true,revalidateOnReconnect: true})
    
    return {caixaResumo,mutateCaixaResumo,isLoadingCaixaResumo}
}
export const useEstacao = () => {
    const {data:estacoes,mutate: mutateEstacoes,isLoading: isEstacoesLoading} = useSWR<Interfaces.Estacao[]>(`api/estacao` , async url => {
        const response = await api.get(url);
        return response.data;
    },{refreshWhenOffline: true,revalidateOnReconnect: true})
    
    return {estacoes,mutateEstacoes,isEstacoesLoading}
}