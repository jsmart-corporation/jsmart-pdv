import api from "../../../../../common/API/axios";

export async function GetProdutoCodigoDeBarra(codigoDeBarras: string) {
    return await api.get(`api/produto/codigobarra?codigobarra=${codigoDeBarras}`);
  }