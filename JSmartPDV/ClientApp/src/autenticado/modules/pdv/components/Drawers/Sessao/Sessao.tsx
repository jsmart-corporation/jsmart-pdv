import DrawerShell from '../DrawerShell'
import './style.css'
import { useContext, useRef } from 'react'
import * as ComponentsContext from '../../ComponentsServices'
import * as Interfaces from '../../../interfaces/Interface'
import {BsCheckLg} from 'react-icons/bs'
import * as ServiceContext from '../../../contexts/PDVServices'
import * as SWRServices from '../../../services/swrservices/SWRServices'
import * as AxiosServices from '../../../services/axiosservices/AXIOSService'
import { Ripple } from 'primereact/ripple'
import { Divider} from '@mui/material'
import {SlOptionsVertical} from 'react-icons/sl'
import { toast } from 'react-toastify'
import { maskCurrency } from '../../../../../../common/utils'
import moment from 'moment'
import { MenuItem } from 'primereact/menuitem'
import { Menu } from 'primereact/menu'
export default function Sessao() {
  const {FechaDrawerSessao,drawerSessaoAberto} = useContext(ComponentsContext.SessaoContext)
  const {VerificarVendaAndamento} = useContext(ServiceContext.TransacaoContext)
  const {caixa,mutateCaixa} = useContext(ServiceContext.CaixaContext)
  const {caixaResumo,isLoadingCaixaResumo} = SWRServices.useCaixaResumo(drawerSessaoAberto,caixa?.id)
  const FinalizarSessao = async () => {
     
      try{
        await AxiosServices.CaixaService.PostFecharCaixaAsync(caixa?.id!);
        mutateCaixa(null)
        FechaDrawerSessao();
        toast.success("Caixa Finalizado com sucesso!")
      }finally{
        
      }
  }
  return (
    <DrawerShell
            title="Resumo da Sessão"
            dialogWidth={600}
            open={drawerSessaoAberto}
            onClose={() => FechaDrawerSessao()}
            content={
              <>
                  {/* <LinearProgress color="success" /> */}
                  <div className='sessao'>
                    {/* <Skeleton variant="rectangular" width='100%' height={60} sx={{borderRadius: 1}}/>
                    {isResumoTransacaoLoading && <Skeleton variant="rectangular" width='100%' height='100%' sx={{borderRadius: 1,mt: 2}}/>} */}
                    <div className="pagamentos-efetuados">
                      <div className="info">
                        <span className="forma">
                          Forma
                        </span>
                        <span className="valor">
                          Valor
                        </span>
                      </div>
                      <Divider></Divider>
                      {
                        (caixaResumo?.dinheiro?? 0) > 0 && 
                        <div className="item-info">
                          <span className="tipo">
                            Dinheiro
                          </span>
                          <span className="valor">
                            {maskCurrency((caixaResumo?.dinheiro?? 0 )- (caixaResumo?.retirada?? 0))}
                          </span>
                        </div> 
                        
                      }
                      {
                        (caixaResumo?.debito?? 0) > 0 && 
                        <div className="item-info">
                          <span className="tipo">
                            Débito
                          </span>
                          <span className="valor">
                            {maskCurrency(caixaResumo?.debito)}
                          </span>
                        </div> 
                        
                      }
                      {
                        (caixaResumo?.credito?? 0) > 0 && 
                        <div className="item-info">
                          <span className="tipo">
                            Crédito
                          </span>
                          <span className="valor">
                            {maskCurrency(caixaResumo?.credito)}
                          </span>
                        </div> 
                        
                      }
                      {
                        (caixaResumo?.outros?? 0) > 0 && 
                        <div className="item-info">
                          <span className="tipo">
                            Outros
                          </span>
                          <span className="valor">
                            {maskCurrency(caixaResumo?.outros)}
                          </span>
                        </div> 
                        
                      }
                      {
                        (caixaResumo?.aporte?? 0) > 0 && 
                        <div className="item-info">
                          <span className="tipo">
                            Aporte
                          </span>
                          <span className="valor">
                            {maskCurrency(caixaResumo?.aporte)}
                          </span>
                        </div> 
                        
                      }
                      {
                        (caixaResumo?.retirada?? 0) > 0 && 
                        <div className="item-info">
                          <span className="tipo">
                            Retirada
                          </span>
                          <span className="valor">
                            {maskCurrency(caixaResumo?.retirada)}
                          </span>
                        </div> 
                        
                      }
                      <Divider></Divider>
                      <div className="total">
                        <span className="forma">
                          Total
                        </span>
                        <span className="Valor">
                          {caixaResumo ? maskCurrency(caixaResumo.credito + caixaResumo.debito + caixaResumo.dinheiro + caixaResumo.outros + caixaResumo.aporte - caixaResumo.retirada) : "R$0,00"}
                        </span>
                      </div>
                    </div>
                    
                    {/* <span>Vendas Recentes</span> */}
                    <div className="resumo">  
                        {caixaResumo?.transacoes?.map(x => 
                          <ResumoTransacaoItem item={x}/>
                          )}
                    </div>
                  </div>
                  <div className="finalizar-sessao p-ripple" onClick={() => FinalizarSessao()}>
                      <span>Finalizar Sessão</span>
                      <BsCheckLg className="icon"/>
                      <Ripple/>
                  </div>
              </>
            }/>
  )
}

const ResumoTransacaoItem = ({item}:{item: Interfaces.TransacaoResumo}) => {
  const menuRight = useRef<Menu>(null);
  const items: MenuItem[] = [
    {
        label: 'Ações',
        items: [
            {
                label: item.notaEmitida ? "Imprimir NFC-e" : "Emitir NFC-e",
                icon: 'pi pi-refresh',
                command: () => {

                },
            },
            {
                label: 'Emitir Conta',
                icon: 'pi pi-times',
                command: () => {
                },
            },
            {
              label: 'Reabrir',
              icon: 'pi pi-times',
              command: () => {
              },
              visible: item.tipo == Interfaces.TipoTransacao.Comanda
          }
        ]
    },
   
  ];
  return (
    <div className='resumo-transacao-item' key={item.id}>
      <div className="left">
        <span className="numero">
          Nº: {item.id}
        </span>
        <span className="valor">
          Total: {maskCurrency(item.valorTotal)}
        </span>
        {item.nome && 
          <span className="valor">
            Cliente: {item.nome}
          </span>
        }
      </div>
      <div className="right"> 
        {
          <span>{moment(item.dataVenda).format('LT')}</span>
        }
        <div className="botao-acao p-ripple" onClick={(event) => menuRight.current?.toggle(event)}>
          <SlOptionsVertical className="icon"/>
          <Ripple/>

        </div>
        <Menu style={{marginTop: '5px'}} model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="left" />

      </div>
    </div>
  )
}