import { ReactNode, createContext, useState } from 'react'

interface SangriaProviderData{
    children: ReactNode
}

interface ISangriaContext{
    DialogoSangriaAberto: boolean;
    AbreDialogoSangria(): void;
    FechaDialogoSangria(): void;
}

export const SangriaDialogoContext = createContext({} as ISangriaContext)

export function SangriaDialogoProvider({children} :SangriaProviderData) {
    const [DialogoSangriaAberto,setDialogoAportAberto] = useState<boolean>(false)

    const AbreDialogoSangria = () => {
        setDialogoAportAberto(true)
    }
    const FechaDialogoSangria = () => {
        setDialogoAportAberto(false)
    }

  return (
    <SangriaDialogoContext.Provider value={{DialogoSangriaAberto,AbreDialogoSangria,FechaDialogoSangria}}>
        {children}
    </SangriaDialogoContext.Provider>
  )
}
