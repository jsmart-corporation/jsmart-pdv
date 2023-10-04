import api from "../../../../../common/API/axios";
import * as Interfaces from '../../interfaces/Interface'


export async function PostTransacaoAsync(transacao: Interfaces.TransacaoDTO) {
    return await api.post(`api/transacao/nova`,transacao);
  }


