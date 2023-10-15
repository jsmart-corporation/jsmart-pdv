import { ReactNode, createContext, useContext, useEffect } from "react";
import { useCaixaStatus } from "../Services/Swr/SwrServices";
import { GeralContext } from "./GeralContext";
import { CaixaSessao } from "../Interfaces";
import { LoadingDialogContext } from "../../JSCommon/Dialogs/LoadingDialog/LoadingDialogContext";

interface IPropsData{
    children: ReactNode
}
interface ICaixaContext{
    caixa: CaixaSessao | undefined;
    mutateCaixa: any;
}
export const CaixaContext = createContext({} as ICaixaContext)
export default function CaixaProvider({children} : IPropsData) {
    const {authenticated} = useContext(GeralContext)
    const {AbrirDialogoLoading,FechaDialogoLoading} = useContext(LoadingDialogContext)
    const {caixa,isCaixaLoading,mutateCaixa} = useCaixaStatus(authenticated);

    useEffect(() => {
        if(isCaixaLoading && authenticated){
            AbrirDialogoLoading("Consultando Caixa")
        }else if(authenticated && isCaixaLoading === false){
            FechaDialogoLoading()
        }
    },[isCaixaLoading])

  return (
    <CaixaContext.Provider value={{caixa,mutateCaixa}}>
        {children}
    </CaixaContext.Provider>
  )
}
