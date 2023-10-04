import { ReactNode, createContext, useState } from "react";
import * as Interfaces from '../interfaces/Interface'
import * as SWRServices from '../services/swrservices/SWRServices'

interface CaixaProviderData {
    children: ReactNode;
}

interface ICaixaContext{
    caixa: Interfaces.Caixa | undefined;
    mutateCaixa: any;
}

export const CaixaContext = createContext({} as ICaixaContext)


export  function CaixaProvider({children}: CaixaProviderData) {
  const {caixa,isCaixaLoading,mutateCaixa} = SWRServices.useCaixaStatus();
  return (
    <CaixaContext.Provider value={{caixa,mutateCaixa}}>
        {children}
    </CaixaContext.Provider>
  )
}
