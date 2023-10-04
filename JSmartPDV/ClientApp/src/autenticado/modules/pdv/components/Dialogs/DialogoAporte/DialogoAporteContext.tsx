import { ReactNode, createContext, useState } from 'react'

interface AporteProviderData{
    children: ReactNode
}

interface IAporteContext{
    DialogoAporteAberto: boolean;
    AbreDialogoAporte(): void;
    FechaDialogoAporte(): void;
}

export const AporteDialogoContext = createContext({} as IAporteContext)

export function AporteDialogoProvider({children} :AporteProviderData) {
    const [DialogoAporteAberto,setDialogoAportAberto] = useState<boolean>(false)

    const AbreDialogoAporte = () => {
        setDialogoAportAberto(true)
    }
    const FechaDialogoAporte = () => {
        setDialogoAportAberto(false)
    }

  return (
    <AporteDialogoContext.Provider value={{DialogoAporteAberto,AbreDialogoAporte,FechaDialogoAporte}}>
        {children}
    </AporteDialogoContext.Provider>
  )
}
