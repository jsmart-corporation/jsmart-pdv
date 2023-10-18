import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from '../Unauthorized/Pages/Login/Login'
import Home from '../Modules/Administrativo/Pages/Home/Home'
import GeralProvider from '../Common/Context/GeralContext'
import BaseAdmin from '../Modules/Administrativo/Components/BaseAdmin/BaseAdmin'
import ContasBancarias from '../Modules/Administrativo/Pages/ContasBancarias/ContasBancarias'
import FormasPagamento from '../Modules/Administrativo/Pages/FormasPagamentos/FormasPagamento'
import Categorias from '../Modules/Administrativo/Pages/Categorias/Categorias'
import Clientes from '../Modules/Administrativo/Pages/Clientes/Clientes'
import Produtos from '../Modules/Administrativo/Pages/Produtos/Produtos'
import BasePdv from '../Modules/Pdv/Components/BasePdv/BasePdv'
import CaixaProvider from '../Common/Context/CaixaContext'
import Venda from '../Modules/Pdv/Pages/Venda/Venda'
import PdvCompose from '../providers/pdv/PdvCompose'
import PdvProvider from '../providers/pdv/PdvProvider'
import BaseFinanceiro from '../Modules/Financeiro/Components/BaseFinanceiro/BaseFinanceiro'
import FinVendas from '../Modules/Financeiro/Pages/Vendas/Vendas'
import Planejador from '../Modules/Financeiro/Pages/Planejador/Planejador'


export default function Router() {
  const AdmininCompose = (children: any) => {
    return (
      <>
          <BaseAdmin>
            {children}
          </BaseAdmin>
      </>
    )
  }
  const FinCompose = (children: any) => {
    return (
      <>
          <BaseFinanceiro>
            {children}
          </BaseFinanceiro>
      </>
    )
  }
  const PDVCompose = (children: any) => {
    return (
      <>
        <PdvCompose components={PdvProvider}>
          <BasePdv>
              {children}
          </BasePdv>
        </PdvCompose>   
      </>
    )
  }
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<GeralProvider><Login/></GeralProvider>}/>

            {/* ADMINISTRATIVO */}
            <Route path='/admin/home' element={<GeralProvider>{AdmininCompose(<Home/>)}</GeralProvider>}/>
            <Route path='/admin/bancos' element={<GeralProvider>{AdmininCompose(<ContasBancarias/>)}</GeralProvider>}/>
            <Route path='/admin/pagamentos' element={<GeralProvider>{AdmininCompose(<FormasPagamento/>)}</GeralProvider>}/>
            <Route path='/admin/categorias' element={<GeralProvider>{AdmininCompose(<Categorias/>)}</GeralProvider>}/>
            <Route path='/admin/clientes' element={<GeralProvider>{AdmininCompose(<Clientes/>)}</GeralProvider>}/>
            <Route path='/admin/produtos' element={<GeralProvider>{AdmininCompose(<Produtos/>)}</GeralProvider>}/>

            {/* PDV */}
            <Route path='/pdv/venda' element={<GeralProvider><CaixaProvider>{PDVCompose(<Venda/>)}</CaixaProvider></GeralProvider>}/>

            {/* FINANCEIRO */}
            <Route path='/fin/home' element={<GeralProvider>{FinCompose(<></>)}</GeralProvider>}/>
            <Route path='/fin/vendas' element={<GeralProvider>{FinCompose(<FinVendas/>)}</GeralProvider>}/>
            <Route path='/fin/planejador' element={<GeralProvider>{FinCompose(<Planejador/>)}</GeralProvider>}/>

        </Routes>
    </BrowserRouter>
  )
}
