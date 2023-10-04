import * as GeralServices from '../../autenticado/context/GeralServices'
import * as ComponentsService from '../../autenticado/modules/pdv/components/ComponentsServices'
import * as PDVServices from '../../autenticado/modules/pdv/contexts/PDVServices'

export default [
    //Geral

    //PDV
    PDVServices.TransacaoProvider,
    

    //Drawers
    ComponentsService.PagamentoProvider,
    ComponentsService.AporteDialogoProvider,
    ComponentsService.SangriaDialogoProvider,
    ComponentsService.AbrirCaixaDialogoProvider,
    ComponentsService.NovaOSDialogoProvider,
    ComponentsService.PagamentoProvider,
    ComponentsService.SessaoProvider
]