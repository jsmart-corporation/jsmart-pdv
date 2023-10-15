import { ReactNode, createContext, useState } from "react"

interface IPropsData{
    children: ReactNode;
}
interface IContextData {
    loadingDialogAberto: boolean;
    message: string;
    AbrirDialogoLoading(message?: string): void;
    FechaDialogoLoading(): void;
}
export const LoadingDialogContext = createContext({} as IContextData)

export default function LoadingDialogProvider({children}: IPropsData) {
    const [loadingDialogAberto,setLoadingDialogAberto] = useState(false);
    const [message,setMessage] = useState<string>("");
    
    const AbrirDialogoLoading = (message?: string) => {
        setMessage(message?? "")
        setLoadingDialogAberto(true)
    }
    const FechaDialogoLoading = () => {
        setLoadingDialogAberto(false)
    }
  return (
    <LoadingDialogContext.Provider value={{loadingDialogAberto,message,FechaDialogoLoading,AbrirDialogoLoading}}>
        {children}
    </LoadingDialogContext.Provider>
  )
}
