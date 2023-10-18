import { api } from "../../Api/AxiosApi";
import { TransacaoDTO, TransacaoPagamentoFinanceiro } from "../../Interfaces";

export async function PostTransacaoAsync(transacao: TransacaoDTO) {
  return await api.post(`api/transacoes`,transacao);
}
export async function PostTransacaoPagamentoAsync(transacao: TransacaoPagamentoFinanceiro) {
  return await api.post(`api/transacoespagamento/planejador`,transacao);
}
export async function PostBaixaPagamentoAsync(pagamento: any) {
  return await api.post(`api/transacoespagamento/baixa`,pagamento);
}