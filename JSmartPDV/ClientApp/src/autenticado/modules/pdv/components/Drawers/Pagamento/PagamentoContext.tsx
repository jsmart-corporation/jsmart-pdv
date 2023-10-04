import { ReactNode, createContext, useState } from 'react'

interface PagamentoProviderData{
    children: ReactNode
}

interface IPagamentoContext{
    drawerPagamentoAberto: boolean;
    AbreDrawerPagamento(): void;
    FechaDrawerPagamento(): void;
}

export const PagamentoContext = createContext({} as IPagamentoContext)

export function PagamentoProvider({children} :PagamentoProviderData) {
    const [drawerPagamentoAberto,setDrawerAportAberto] = useState<boolean>(false)

    const AbreDrawerPagamento = () => {
        setDrawerAportAberto(true)
    }
    const FechaDrawerPagamento = () => {
        setDrawerAportAberto(false)
    }

  return (
    <PagamentoContext.Provider value={{drawerPagamentoAberto,AbreDrawerPagamento,FechaDrawerPagamento}}>
        {children}
    </PagamentoContext.Provider>
  )
}
