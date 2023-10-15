import useSWR from "swr";
import { api } from "../../Api/AxiosApi";
import { CaixaSessao, ContaBancaria, ICategoria, IClientes, IFormaPagamento, MetodoPagamento, Produto, Transacao, TransacaoFinanceiro, TransacaoPagamentoFinanceiro } from "../../Interfaces";

export const useContasBancarias = () => {
    const {data:contasBancarias, mutate, isLoading} = useSWR<ContaBancaria[]>(`api/contabancaria/all`, async url => {
        const response = await api.get(url);
        return response.data;
    },{refreshWhenOffline: true,revalidateOnReconnect: true})
    
    return {contasBancarias, mutate, isLoading}
}
export const useFormasPagamento = () => {
    const {data:formasPagamento, mutate, isLoading} = useSWR<IFormaPagamento[]>(`api/formaspagamento/all`, async url => {
        const response = await api.get(url);
        return response.data;
    },{refreshWhenOffline: true,revalidateOnReconnect: true})
    
    return {formasPagamento, mutate, isLoading}
}
export const useCategorias = () => {
    const {data:categorias, mutate, isLoading} = useSWR<ICategoria[]>(`api/categoria/all`, async url => {
        const response = await api.get(url);
        return response.data;
    },{refreshWhenOffline: true,revalidateOnReconnect: true})
    
    return {categorias, mutate, isLoading}
}
export const useProdutos = () => {
    const {data:produtos, mutate, isLoading} = useSWR<Produto[]>(`api/produto/all`, async url => {
        const response = await api.get(url);
        return response.data;
    },{refreshWhenOffline: true,revalidateOnReconnect: true})
    
    return {produtos, mutate, isLoading}
}
export const useClientes = () => {
    const {data:clientes, mutate, isLoading} = useSWR<IClientes[]>(`api/cliente/all`, async url => {
        const response = await api.get(url);
        return response.data;
    },{refreshWhenOffline: true,revalidateOnReconnect: true})
    
    return {clientes, mutate, isLoading}
}

export const useCaixaStatus = (auth: boolean) => {
    const {data:caixa,mutate: mutateCaixa,isLoading: isCaixaLoading} = useSWR<CaixaSessao>(auth ? `api/caixa/status` : null, async url => {
        const response = await api.get(url);
        return response.data;
    },{refreshWhenOffline: true,revalidateOnReconnect: true})
    
    return {caixa,mutateCaixa,isCaixaLoading}
}
export const useProdutosRecomendados = () => {
    const {data:recomendados,mutate,isLoading: isRecomendadosLoading} = useSWR<Produto[]>(`api/produto/recomendados`, async url => {
        const response = await api.get(url);
        return response.data;
    },{refreshWhenOffline: true,revalidateOnReconnect: true})
    
    return {recomendados,mutate,isRecomendadosLoading}
}
export const useMetodosPagamento = () => {
    const {data:metodosPagamento,mutate,isLoading} = useSWR<MetodoPagamento[]>(`api/formaspagamento/venda`, async url => {
        const response = await api.get(url);
        return response.data;
    },{refreshWhenOffline: true,revalidateOnReconnect: true})
    
    return {metodosPagamento,mutate,isLoading}
}
export const useFinTransacoes = () => {
    const {data:transacoes,mutate,isLoading} = useSWR<TransacaoFinanceiro[]>(`api/transacoes/all`, async url => {
        const response = await api.get(url);
        return response.data;
    },{refreshWhenOffline: true,revalidateOnReconnect: true})
    
    return {transacoes,mutate,isLoading}
}
export const useFinPlanejador = () => {
    const {data:pagamentos,mutate,isLoading} = useSWR<TransacaoPagamentoFinanceiro[]>(`api/transacoesPagamento/all`, async url => {
        const response = await api.get(url);
        return response.data;
    },{refreshWhenOffline: true,revalidateOnReconnect: true})
    
    return {pagamentos,mutate,isLoading}
}