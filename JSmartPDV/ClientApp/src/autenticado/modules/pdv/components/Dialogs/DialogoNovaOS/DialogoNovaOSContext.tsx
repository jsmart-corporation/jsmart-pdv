import { ReactNode, createContext, useState } from 'react'

interface NovaOSProviderData{
    children: ReactNode
}

interface INovaOSContext{
    DialogoNovaOSAberto: boolean;
    AbreDialogoNovaOS(): void;
    FechaDialogoNovaOS(): void;
}

export const NovaOSDialogoContext = createContext({} as INovaOSContext)

export function NovaOSDialogoProvider({children} :NovaOSProviderData) {
    const [DialogoNovaOSAberto,setDialogoAportAberto] = useState<boolean>(false)

    const AbreDialogoNovaOS = () => {
        setDialogoAportAberto(true)
    }
    const FechaDialogoNovaOS = () => {
        setDialogoAportAberto(false)
    }

  return (
    <NovaOSDialogoContext.Provider value={{DialogoNovaOSAberto,AbreDialogoNovaOS,FechaDialogoNovaOS}}>
        {children}
    </NovaOSDialogoContext.Provider>
  )
}
