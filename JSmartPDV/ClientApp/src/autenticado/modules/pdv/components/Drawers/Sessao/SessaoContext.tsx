import { ReactNode, createContext, useState } from 'react'

interface SessaoProviderData{
    children: ReactNode
}

interface ISessaoContext{
    drawerSessaoAberto: boolean;
    AbreDrawerSessao(): void;
    FechaDrawerSessao(): void;
}

export const SessaoContext = createContext({} as ISessaoContext)

export function SessaoProvider({children} :SessaoProviderData) {
    const [drawerSessaoAberto,setDrawerAportAberto] = useState<boolean>(false)

    const AbreDrawerSessao = () => {
        setDrawerAportAberto(true)
    }
    const FechaDrawerSessao = () => {
        setDrawerAportAberto(false)
    }

  return (
    <SessaoContext.Provider value={{drawerSessaoAberto,AbreDrawerSessao,FechaDrawerSessao}}>
        {children}
    </SessaoContext.Provider>
  )
}
