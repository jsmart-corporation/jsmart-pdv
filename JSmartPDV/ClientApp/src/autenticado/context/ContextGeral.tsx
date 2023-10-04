import { SelectChangeEvent } from "@mui/material/Select";
import { ReactNode, SetStateAction, createContext, useEffect, useState } from "react"
import * as SWRServices from '../modules/pdv/services/swrservices/SWRServices'
import * as Interfaces from '../modules/pdv/interfaces/Interface'

interface ContextGeralProviderProps {
    children: ReactNode;
}

interface IGeralContext{
    autenticado: boolean;
    sidebar: boolean;
    setSidebar(value: SetStateAction<boolean>): void; 
    TrocarEstacao(event: SelectChangeEvent<unknown> | null): void;
    estacaoSelecionada: number | null
    estacoes: Interfaces.Estacao[] | undefined;
}
interface Estacao{
  estacao: number;
}
export const ContextGeral = createContext({} as IGeralContext)

export function ContextGeralProvider({children} : ContextGeralProviderProps) {
    const [autenticado,setAutenticado] = useState(false);
    const [estacaoSelecionada,setEstacaoSelecionada] = useState<number>(0)
    const {estacoes} = SWRServices.useEstacao()
    const [sidebar,setSidebar] = useState<boolean>(false);
   
    const TrocarEstacao = (event: SelectChangeEvent<unknown>) => {
      if(event){
        let estacaoID = parseInt(event.target.value as string)
        setEstacaoSelecionada(estacaoID?? 0);
        localStorage.setItem("estacao" , JSON.stringify({estacao: estacaoID}))
      }
    };

    useEffect(() => {
      if(estacoes){
        var localStorageEstacao = localStorage.getItem("estacao")
        if(localStorageEstacao){
          let JSONEstacao:Estacao = JSON.parse(localStorageEstacao)
          let index = estacoes.findIndex(x => x.id === JSONEstacao.estacao);
          if(index === -1){
            setEstacaoSelecionada(0)
          }else{
            setEstacaoSelecionada(JSONEstacao.estacao)
          }
        }else{
          setEstacaoSelecionada(0)
        }
      }
      
    },[estacoes])
  return (
    <ContextGeral.Provider value={{autenticado,TrocarEstacao,estacaoSelecionada,estacoes,sidebar,setSidebar}}>
        {children}
    </ContextGeral.Provider>
  )
}
