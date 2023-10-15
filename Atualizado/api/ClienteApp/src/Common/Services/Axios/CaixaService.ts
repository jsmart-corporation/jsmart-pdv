import { api } from "../../Api/AxiosApi";

export async function PostAbrirCaixaAsync(abertura: any) {
    return await api.post(`api/caixa`,abertura);
  }