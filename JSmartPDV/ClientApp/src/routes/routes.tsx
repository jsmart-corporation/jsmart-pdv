import { useState } from 'react'
import PdvCompose from '../providers/pdv/PdvCompose';
import PdvProvider from '../providers/pdv/PdvProvider'
import FinanceiroProvider from '../providers/financeiro/FinanceiroProvider'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import BasePdv from '../autenticado/modules/pdv/components/BasePdv/BasePdv';
import VendaUnica from '../autenticado/modules/pdv/pages/VendaUnica/VendaUnica';
import OrdensServico from '../autenticado/modules/pdv/pages/OrdensServico/OrdensServico';
import Login from '../naoautenticado/pages/login/Login';
import BaseFinanceiro from '../autenticado/modules/financeiro/components/BaseFinanceiro/BaseFInanceiro';
import FinanceiroCompose from '../providers/financeiro/FinanceiroCompose';

export default function ModuleRoutes() {
    const [token,setToken] = useState(true)

    function PDVCompose(pagina?: any) {
        return token ? (
           <PdvCompose components={PdvProvider}>
                <BasePdv>
                    {pagina}
                </BasePdv>  
           </PdvCompose>
          
        ) : (
            <>
                <Navigate to="/login"/>
            </>
            
        );
    }
    function AdminComposeCompose(pagina?: any) {
        return token ? (
           <FinanceiroCompose components={FinanceiroProvider}>
                <BaseFinanceiro>
                    {pagina}
                </BaseFinanceiro>  
           </FinanceiroCompose>
          
        ) : (
            <>
                <Navigate to="/login"/>
            </>
            
        );
    }

  return (
    <BrowserRouter>
        <Routes>
            {/* PDV */}
            <Route path='/Login' element={token ? <Navigate to='/pdv/venda'/> : <Login/>}/>
            <Route  path='/pdv/venda' element={PDVCompose(<VendaUnica/>)}/>
            <Route path='/pdv/os' element={PDVCompose(<OrdensServico/>)}/>
            {/* Administrativo */}
            <Route path='/administrativo/produtos' element={AdminComposeCompose(<></>)}/>
            <Route path='/administrativo/clientes' element={AdminComposeCompose(<></>)}/>
            <Route path='/administrativo/usuarios' element={AdminComposeCompose(<></>)}/>
            <Route path='/administrativo/formaspagamento' element={AdminComposeCompose(<></>)}/>
            <Route path='/administrativo/bancos' element={AdminComposeCompose(<></>)}/>
            <Route path='/administrativo/categorias' element={AdminComposeCompose(<></>)}/>
            <Route path='/administrativo/estacoes' element={AdminComposeCompose(<></>)}/>
        </Routes>
    </BrowserRouter>
  )
}
