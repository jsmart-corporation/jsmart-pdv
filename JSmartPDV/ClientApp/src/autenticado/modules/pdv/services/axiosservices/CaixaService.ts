import api from "../../../../../common/API/axios";
import * as Interfaces from '../../interfaces/Interface'

export async function PostAbrirCaixaAsync(abertura: any) {
    return await api.post(`api/caixa/abertura`,abertura);
  }

  export async function PostAporteAsync(aporte: Interfaces.AporteCaixa) {
    return await api.post(`api/controlecaixa/aporte`,aporte);
  }
  export async function PostRetiradaAsync(retirada: Interfaces.AporteCaixa) {
    return await api.post(`api/controlecaixa/retirada`,retirada);
  }
  export async function PostFecharCaixaAsync(caixaId: number) {
    return await api.patch(`api/caixa/fechar?caixaid=${caixaId}`);
  }