import { ReactNode, createContext, useState } from 'react'

interface AbrirCaixaProviderData{
    children: ReactNode
}

interface IAbrirCaixaContext{
    DialogoAbrirCaixaAberto: boolean;
    AbreDialogoAbrirCaixa(): void;
    FechaDialogoAbrirCaixa(): void;
}

export const AbrirCaixaDialogoContext = createContext({} as IAbrirCaixaContext)

export function AbrirCaixaDialogoProvider({children} :AbrirCaixaProviderData) {
    const [DialogoAbrirCaixaAberto,setDialogoAportAberto] = useState<boolean>(false)

    const AbreDialogoAbrirCaixa = () => {
        setDialogoAportAberto(true)
    }
    const FechaDialogoAbrirCaixa = () => {
        setDialogoAportAberto(false)
    }

  return (
    <AbrirCaixaDialogoContext.Provider value={{DialogoAbrirCaixaAberto,AbreDialogoAbrirCaixa,FechaDialogoAbrirCaixa}}>
        {children}
    </AbrirCaixaDialogoContext.Provider>
  )
}
