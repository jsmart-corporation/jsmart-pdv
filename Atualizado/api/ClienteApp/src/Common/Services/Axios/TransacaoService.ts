import { api } from "../../Api/AxiosApi";
import { TransacaoDTO } from "../../Interfaces";

export async function PostTransacaoAsync(transacao: TransacaoDTO) {
    return await api.post(`api/transacoes`,transacao);
  }