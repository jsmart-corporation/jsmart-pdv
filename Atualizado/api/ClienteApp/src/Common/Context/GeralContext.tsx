import { ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react"
import { LoadingDialogContext } from "../../JSCommon/Dialogs/LoadingDialog/LoadingDialogContext";
import { User } from "../Interfaces";
import { GetData } from "../Services/Axios/UserServices";
import { useNavigate } from "react-router-dom";

interface IPropsData{
    children: ReactNode
}
interface IContextData{
    authenticated: boolean;
    sidebar: boolean;
    setSidebar(value: SetStateAction<boolean>): void;
    user: User | null;
    Login(): void;
    LogOut(): void;
}

export const GeralContext = createContext({} as IContextData)

export default function GeralProvider({children}: IPropsData) {
    const [authenticated,setAuthenticated] = useState<boolean>(false);
    const [sidebar,setSidebar] = useState<boolean>(false);
    const [user,setUser] = useState<User | null>(null);
    const {AbrirDialogoLoading,FechaDialogoLoading} = useContext(LoadingDialogContext)
    const Navigate = useNavigate();
    useEffect(() => {
        const getStorageToken = sessionStorage.getItem("acess_token");
        if(getStorageToken){
            Login();
        }
    },[])

    const  Login = async () => {
        AbrirDialogoLoading("Resgatando Informações de usuario")
        try {
            let userData = await GetDataAsync()
            setUser(userData);
            setAuthenticated(true)
            console.log(userData)
        }finally{
            FechaDialogoLoading()
        }
    }
    const GetDataAsync = async () => {
        return await GetData();
    }
    const LogOut = () => {
        sessionStorage.removeItem("acess_token");
        setUser(null);
        setAuthenticated(false)
        Navigate('/')
        setSidebar(false)
    }
  return (
    <GeralContext.Provider value={{sidebar,user,authenticated,Login,setSidebar,LogOut}}>
        {children}
    </GeralContext.Provider>
  )
}
