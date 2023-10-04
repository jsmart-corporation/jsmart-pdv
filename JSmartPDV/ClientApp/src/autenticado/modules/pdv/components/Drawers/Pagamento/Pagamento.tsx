import DrawerShell from '../DrawerShell'
import './style.css'
import { useContext, useEffect, useRef, useState } from 'react'
import * as ComponentsContext from '../../ComponentsServices'
import * as PDVServices from '../../../contexts/PDVServices'
import * as Interfaces from '../../../interfaces/Interface'
import * as SWRServices from '../../../services/swrservices/SWRServices'
import { JSTextField } from '../../../../../../UniversalComponents/MUI/TextField/CTextField'
import { Ripple } from 'primereact/ripple'
import { FormataMoeda, maskCurrency, removerLetrasEPontos } from '../../../../../../common/utils'
import { BsCheckLg } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { TransacaoStatus } from '../../../contexts/TransacaoContext'

export default function Pagamento() {
  const {FechaDrawerPagamento,drawerPagamentoAberto,AbreDrawerPagamento} = useContext(ComponentsContext.PagamentoContext)
  const {transacao,AdicionaPagamento,RemovePagamento,FinalizaTransacao,CancelarTransacao,setStatusTransacao} = useContext(PDVServices.TransacaoContext)
  const {caixa} = useContext(PDVServices.CaixaContext)
  const valorInputRef = useRef<HTMLInputElement>(null)
  const [totalRestante,setTotalRestante] = useState<number>(0)
  const [totalPago,setTotalPago] = useState<number>(0)
  const [tipoSelecionado,setTipoSelecionado] = useState<Interfaces.FormaPagamento | null>(null)
  const {metodosPagamento} = SWRServices.useMetodosPagamento()
  const [metodoSelecionado,setMetodoSelecionado] = useState<Interfaces.MetodoPagamento | null>(null)
  const [valor,setValor] = useState<string>('0.00')
  const [nsu,setNsu] = useState<string>('')

  const HandleChangeType = (type: Interfaces.FormaPagamento) => {
    if(!metodosPagamento) return;
    if(type === tipoSelecionado){
      setTipoSelecionado(null)
      if(metodoSelecionado){
        setMetodoSelecionado(null)
      }
    }else{
      if(type === Interfaces.FormaPagamento.Dinheiro){
        var getPagamentoDinheiro = metodosPagamento.find(x => x.formaPagamento === type)
        if(getPagamentoDinheiro){
          setMetodoSelecionado(getPagamentoDinheiro)
          setTipoSelecionado(type)
          return;
        }
      }else{
        setTipoSelecionado(type)

      }
    }
  }
  useEffect(() => {
    if(!drawerPagamentoAberto){
      setTipoSelecionado(null)
      setMetodoSelecionado(null)
    }
  },[drawerPagamentoAberto])
  useEffect(() => {
    if (!drawerPagamentoAberto){   
        return;
    };
    setTotalRestante(transacao.Total - totalPago);
    
  }, [drawerPagamentoAberto, transacao.Total, totalPago]);
  useEffect(() => {
    if(tipoSelecionado !== Interfaces.FormaPagamento.Dinheiro){
      setMetodoSelecionado(null)
    }
    setNsu('')
    setValor('0.00')
  },[tipoSelecionado])
  useEffect(() => {
    if(totalRestante > 0) {
      setValor(totalRestante.toString())
    }
  },[metodoSelecionado])
  useEffect(() => {
    let valorTotalPago = 0;
    transacao.Pagamentos.map(({ Valor }) => {
        valorTotalPago += Valor;
    });
    setTotalPago(valorTotalPago);
}, [transacao.Pagamentos]);
  
  const ConverterTipoPagamentoString = (tipo: Interfaces.FormaPagamento) => {
      let descricao = '';
      switch(tipo){
        case Interfaces.FormaPagamento.Dinheiro:
          descricao = 'Dinheiro';
          break;
        case Interfaces.FormaPagamento.Credito:
          descricao = 'Crédito';
          break;
        case Interfaces.FormaPagamento.Debito:
          descricao = 'Débito';
          break;
        case Interfaces.FormaPagamento.Outros:
          descricao = 'Outros';
          break;    
      }
      return descricao
  }
  const AdicionarPagamento = () => {
    if(parseFloat(valor) === 0) return;
    if(parseFloat(valor) > totalRestante && metodoSelecionado?.formaPagamento !== Interfaces.FormaPagamento.Dinheiro){
      toast.warn("Valor maior que o restante")
      return;
    }

      let Pagamento = new Interfaces.PagamentoTransacao();
        Pagamento.Descricao = metodoSelecionado?.descricao!;
        Pagamento.FinMetodoPagamentoId = metodoSelecionado?.id!;
        Pagamento.FormaPagamento = metodoSelecionado?.formaPagamento!;
        Pagamento.Valor = parseFloat(valor);
        Pagamento.Nsu = nsu === '' ? null : nsu;
        Pagamento.CaixaId = caixa?.id!;
        Pagamento.Porcentagem = metodoSelecionado?.porcentagem!;
        Pagamento.DiasPrevisao = metodoSelecionado?.diasPrevisao!;
      AdicionaPagamento(Pagamento)
      setTipoSelecionado(null)
      setMetodoSelecionado(null)
      setTotalPago(totalPago + parseFloat(valor));
  }
  const VerificaRemovePagamento = (pagamento: Interfaces.PagamentoTransacao,index: number) =>{
      RemovePagamento(index);
      setTotalPago(totalPago - pagamento.Valor);
  }
  const Finaliza = async() => {
    try{
      setStatusTransacao(TransacaoStatus.Enviando)
      FechaDrawerPagamento();
      await FinalizaTransacao(caixa?.id!)
      setStatusTransacao(TransacaoStatus.Enviado)
      CancelarTransacao()
    }catch{
      AbreDrawerPagamento();
      toast.error("OPS: Ocorreu um erro, caso o problema persistir entre em contato com o suporte!")
      setStatusTransacao(TransacaoStatus.Erro)
    }
    finally{

    }
  }
  return (
    <DrawerShell
      title="Finaliza Venda"
      dialogWidth={500}
      open={drawerPagamentoAberto}
      onClose={() => FechaDrawerPagamento()}
      content={
      <div className='finalizar-venda'>
        <div className="resumo">
          <span className="total">Total: {maskCurrency(transacao.Total)}</span>
          {totalRestante >= 0 ? 
            <span className="restante">Restante: {maskCurrency(totalRestante)}</span>
              :
            <span className="troco">Troco: {maskCurrency(totalRestante * -1)}</span> 
          }
        </div>
        <div className="pagamentos-tipo">
            <div className={"pagamento p-ripple " + (tipoSelecionado === Interfaces.FormaPagamento.Dinheiro ? 'selected' : '')} onClick={() => HandleChangeType(Interfaces.FormaPagamento.Dinheiro)}>
              <span>Dinheiro</span>
              <Ripple/>
            </div>
            <div className={"pagamento p-ripple " + (tipoSelecionado === Interfaces.FormaPagamento.Debito ? 'selected' : '')} onClick={() => HandleChangeType(Interfaces.FormaPagamento.Debito)}>
              <span>Débito</span>
              <Ripple/>
            </div>
            <div className={"pagamento p-ripple " + (tipoSelecionado === Interfaces.FormaPagamento.Credito ? 'selected' : '')} onClick={() => HandleChangeType(Interfaces.FormaPagamento.Credito)}>
              <span>Crédito</span>
              <Ripple/>
            </div>
            <div className={"pagamento p-ripple " + (tipoSelecionado === Interfaces.FormaPagamento.Outros ? 'selected' : '')} onClick={() => HandleChangeType(Interfaces.FormaPagamento.Outros)}>
              <span>Outros</span>
              <Ripple/>
            </div>
        </div>
        {
          tipoSelecionado ? <div className="pagamento-selecionado">
        
             {
              tipoSelecionado !== Interfaces.FormaPagamento.Dinheiro && 
              <div className="pagamentos-modal">
              <div className="itens">
                {metodosPagamento?.filter(x => x.formaPagamento === tipoSelecionado).map(x => 
                    <div className={"item p-ripple " + (metodoSelecionado?.id === x.id ? 'selected' : '')} key={x.id} onClick={() => setMetodoSelecionado(x)}>
                        <span>{x.descricao}</span>
                        <Ripple/>
                    </div>
                  )}
              </div>
            </div>
             }
          {metodoSelecionado && 
            <div className="dados-pagamento">
              <JSTextField ref={valorInputRef} onKeyDown={(e) => e.key === 'Enter' ? AdicionarPagamento() : null} label="Valor" value={maskCurrency(valor)} onChange={(e) => setValor(FormataMoeda(e.target.value))} fullWidth autoFocus/>
              {metodoSelecionado.usarNsu && 
                <JSTextField onKeyDown={(e) => e.key === 'Enter' ? AdicionarPagamento() : null} value={nsu} label="NSU" fullWidth onChange={(e) => setNsu(removerLetrasEPontos(e.target.value))}/>
              }
              <div className={"button-adicionar p-ripple " + (parseFloat(valor) === 0 ? 'disabled' : '')} onClick={() => AdicionarPagamento()}>
                <span>Adicionar</span>
                <Ripple/>
              </div>
              
            </div>
          }
          </div> : 
          <div className="pagamentos-realizados">
          {transacao.Pagamentos.map((x,index) => 
            <div className="pagamento-item" key={index}>
                <div className="left" onClick={() => VerificaRemovePagamento(x,index)}>
                  <AiFillDelete className="icon"/>
                </div>
                <div className="middle">
                    <span className="descricao">{x.Descricao}</span>
                    <span className="tipo">[Tipo: {ConverterTipoPagamentoString(x.FormaPagamento)}]  {x.Nsu !== null ?  `   [NSU: ${x.Nsu}]`  : ''}</span>
                </div>
                <div className="right">
                    <span className="valor">{maskCurrency(x.Valor)}</span>
                </div>
            </div>
          )}
      </div>
        }
        
        
        <div className={"finalizar-pagamento p-ripple " + (totalRestante > 0 ? 'disabled' : '')} onClick={() => Finaliza()}>
              <span>Finalizar</span>
              <BsCheckLg className="icon"/>
              <Ripple/>
          </div>
      </div>
    }/>
  )
}
