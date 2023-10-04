import './style.css'
import {BiCheck} from 'react-icons/bi'
import { MouseEventHandler, useContext, useEffect, useState } from 'react'
import {AiFillDelete } from 'react-icons/ai'
import {RiCloseFill} from 'react-icons/ri'
import * as PDVServices from '../../../contexts/PDVServices'
import * as ComponentServices from '../../../components/ComponentsServices'
import * as AXIOSServices from '../../../services/axiosservices/AXIOSService'
import * as Interfaces from '../../../interfaces/Interface'
import { FormatarInteiro, ValidaCpf, maskCurrency } from '../../../../../../common/utils'
import { Ripple } from 'primereact/ripple'
import { CircularProgress, InputAdornment } from '@mui/material'
import { JSTextField } from '../../../../../../UniversalComponents/MUI/TextField/CTextField'
import { AccountCircle } from '@mui/icons-material'
import { toast } from 'react-toastify'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SallerFinish from '../../../../../../UniversalComponents/SallerFinish/SallerFinish'
import { TransacaoStatus } from '../../../contexts/TransacaoContext'
import EmptyCartSVG from '../../../components/EmptyCartSVG/EmptyCartSVG'

export default function Transacao() {
    const {transacao,CancelarTransacao,RemoveItem,AdicionaCliente,RemoveClienteTransacao,statusTransacao,ultimaTransacaoTroco,NovaTransacao} = useContext(PDVServices.TransacaoContext)
    const {AbreDrawerPagamento} = useContext(ComponentServices.PagamentoContext)
    const [deletar,setDeletar] = useState<boolean>(false)
    const [loadingCpf,setLoadingCpf] = useState(false)

    const [cpf,setCpf] = useState('')
    const HandleDeleteClick = () => {
        setDeletar(!deletar)
    }
    const HandleClickItemTransacao = (index: number) => {
        if(deletar){
            RemoveItem(index)
            setDeletar(false)
        }
    }
    useEffect(() => {
        if(deletar){
            setDeletar(false)
        }
    },[transacao])
    const BuscarClienteCPF = async() => {
        const cpfValidado = ValidaCpf(cpf);
        if(!cpfValidado) {toast.error("CPF Invalido"); return}
        setLoadingCpf(true)
        try{
            const response:Interfaces.ClienteTransacao = (await AXIOSServices.ClienteSercice.GetClienteCPF(cpf)).data
            AdicionaCliente(response)
            setCpf('')
        }finally{
            setLoadingCpf(false)
        }
    }
    const HandleClickFinalizar = () => {
        if(statusTransacao === TransacaoStatus.Enviado){
            NovaTransacao();
        }else if((statusTransacao === TransacaoStatus.NovaTransacao || statusTransacao === TransacaoStatus.Erro ) && transacao.Itens.length > 0){
            AbreDrawerPagamento();
        }else{
            toast.warn("Não é possivel finalizar uma venda sem produtos.")
        }
    }
  return (
    <div className='transacao'>
        <div className="top">
            {statusTransacao === TransacaoStatus.Enviando || statusTransacao === TransacaoStatus.Enviado ? 
                <SallerFinish finalizado={statusTransacao} troco={ultimaTransacaoTroco}/>
                    :
                <React.Fragment>
                    <div className="itens-transacao">
                        {transacao.Itens.length === 0 ? <EmptyCartSVG/> :
                        <div className="itens">
                            {
                                transacao.Itens.map((x,index) => <ItemTransacao item={x} key={index} deletar={deletar} onClick={() => HandleClickItemTransacao(index)}/>)
                            }
                        </div>
                        }
                        
                    </div>
                    
                    <div className="cliente">                          
                        <div className={"deletar-button p-ripple"+ (transacao.Itens.length === 0 ? "disabled" : '') } onClick={() => CancelarTransacao()}>
                            <RiCloseFill className="icon"/>
                        </div>
                        <div className={"deletar-button p-ripple " + (deletar ? 'delete' : '')} onClick={() => HandleDeleteClick()}>
                            <AiFillDelete className="icon"/>
                        </div>
                        {transacao.Cliente ?  
                            <div className="cliente-content">
                                <div className="left">
                                    <span >Cliente: <span className="nome"> {transacao.Cliente.nome}</span></span>
                                    <span >CPF: <span className="cpf">{transacao.Cliente.cpf}</span></span>
                                </div>
                                <div className="right">
                                    <div className="button-remover" onClick={() => RemoveClienteTransacao()}>
                                        <span>Remover</span>
                                    </div>
                                </div>
                            </div>
                            :
                            <JSTextField 
                                onKeyDown={(e) => e.key === 'Enter' ? BuscarClienteCPF() : null}
                                value={cpf}
                                disabled={loadingCpf}
                                onChange={(e) => setCpf(FormatarInteiro(e.target.value))}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        loadingCpf ? 
                                        <InputAdornment position="start">
                                            <CircularProgress sx={{color: 'var(--green)'}}/>
                                        </InputAdornment> : null
                                    ),
                                    }}
                                    label="CPF do cliente"
                                    placeholder='CPF'
                                fullWidth
                            />
                        }
                    </div>
                </React.Fragment> 
            }
            
        </div>
        <div className={"bottom p-ripple "} onClick={() => HandleClickFinalizar()}>
            {statusTransacao === TransacaoStatus.Enviado ? 
                <div className="enviado">
                    <span>Nova Venda</span>
                </div>
                :
                <div className="enviar">
                    <BiCheck className="icon"/>
                    <span className='total'>{maskCurrency(transacao.Total)}</span>
                </div>
            } 
            <Ripple/>
        </div>
    </div>
  )
}

const ItemTransacao = ({item,deletar,onClick} : {item: Interfaces.ItemTransacao,deletar: boolean,onClick: MouseEventHandler<HTMLDivElement>}) => {
    return (
        <div className={"item-transacao p-ripple " + (deletar ? 'delete' : '')} onClick={onClick}>
            <div className="left">
                <div className="quantidade">
                    {!deletar ? 
                        <span className="qtd">
                            {item.quantidade}x
                        </span>
                        :
                        <AiFillDelete className="icon"/>
                    }
                    
                </div>
                <div className="informacao">
                    <span className="nome">
                        {item.descricao}
                    </span>
                    <span className="unitario">
                        {maskCurrency(item.valorUn)}
                    </span>
                </div>
            </div>
            <div className="right">
                <span className="valortotal">
                        {maskCurrency(item.valor)}
                </span>
            </div>
            <Ripple/>
        </div>
    )
}