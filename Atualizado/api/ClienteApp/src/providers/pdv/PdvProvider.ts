import { TransacaoProvider } from '../../Common/Context/TransacaoContext'
import * as ComponentServices from '../../Modules/Pdv/Components/ComponentsServices'
import { PagamentoProvider } from '../../Modules/Pdv/Components/Drawers/Pagamento/PagamentoContext'

export default [
    ComponentServices.AbrirCaixaDialogoProvider,
    TransacaoProvider,
    PagamentoProvider
]