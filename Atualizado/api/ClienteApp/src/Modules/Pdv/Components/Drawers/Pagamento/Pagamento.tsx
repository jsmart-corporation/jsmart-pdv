import DrawerShell from '../DrawerShell'
import './style.css'
import { useContext, useEffect, useRef, useState } from 'react'


import { Ripple } from 'primereact/ripple'

import { BsCheckLg } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { PagamentoContext } from './PagamentoContext'
import { TransacaoContext, TransacaoStatus } from '../../../../../Common/Context/TransacaoContext'
import { CaixaContext } from '../../../../../Common/Context/CaixaContext'
import { FormaPagamento, IFormaPagamento, PagamentoTransacao } from '../../../../../Common/Interfaces'
import { FormatarDecimal, maskCurrency, removerLetrasEPontos } from '../../../../../Utils/Formatacoes'
import { JSTextField } from '../../../../../JSCommon/Components/JSTextField'
import { useMetodosPagamento } from '../../../../../Common/Services/Swr/SwrServices'
import { InputLabel, MenuItem, Select } from '@mui/material'
import { JSSelect } from '../../../../../JSCommon/Components/JSSelect'
import { IParcelas } from '../../../../Administrativo/Components/Dialogs/NovaFormaPagamento/NovaFormaPagamento'
import { categoriasPagamento } from '../../../../../Common/Containts/ListasDrowDown'

export default function Pagamento() {
  const {FechaDrawerPagamento,drawerPagamentoAberto,AbreDrawerPagamento} = useContext(PagamentoContext)
  const {transacao,AdicionaPagamento,RemovePagamento,FinalizaTransacao,CancelarTransacao,setStatusTransacao} = useContext(TransacaoContext)
  const {caixa} = useContext(CaixaContext)
  const valorInputRef = useRef<HTMLInputElement>(null)
  const [totalRestante,setTotalRestante] = useState<number>(0)
  const [totalPago,setTotalPago] = useState<number>(0)
  const [tipoSelecionado,setTipoSelecionado] = useState<FormaPagamento | null>(null)
  const {metodosPagamento} = useMetodosPagamento()
  const [metodoSelecionado,setMetodoSelecionado] = useState<IFormaPagamento | null>(null)
  const [parcelaSelecionada,setParcelaSelecionada] = useState<number>(1);
  const [valor,setValor] = useState<string>('0.00')
  const [nsu,setNsu] = useState<string>('')

  const HandleChangeType = (type: FormaPagamento) => {
    if(!metodosPagamento) return;
    if(type === tipoSelecionado){
      setTipoSelecionado(null)
      if(metodoSelecionado){
        setMetodoSelecionado(null)
      }
    }else{
      if(type === FormaPagamento.Dinheiro){
        var getPagamentoDinheiro = metodosPagamento.find(x => x.categoriaPagamento === type)
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
    if(tipoSelecionado !== FormaPagamento.Dinheiro){
      setMetodoSelecionado(null)
    }
    setNsu('')
    setValor('0.00')
    setParcelaSelecionada(1)
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
  
  const ConverterTipoPagamentoString = (tipo: FormaPagamento) => {
      let descricao = '';
      switch(tipo){
        case FormaPagamento.Dinheiro:
          descricao = 'Dinheiro';
          break;
        case FormaPagamento.Credito:
          descricao = 'Crédito';
          break;
        case FormaPagamento.Debito:
          descricao = 'Débito';
          break;
        case FormaPagamento.Outros:
          descricao = 'Outros';
          break;    
      }
      return descricao
  }
  const AdicionarPagamento = () => {
    if(parseFloat(valor) === 0) return;
    if(parseFloat(valor) > totalRestante && metodoSelecionado?.categoriaPagamento !== FormaPagamento.Dinheiro){
      toast.warn("Valor maior que o restante")
      return;
    }
      let Parcelas:IParcelas[] | null = metodoSelecionado?.parcelas ? JSON.parse(metodoSelecionado?.parcelas) : null;
      let Pagamento = new PagamentoTransacao();
        Pagamento.Descricao = metodoSelecionado?.descricao!;
        Pagamento.ContaBancariaId = metodoSelecionado?.contaBancariaId?? null;
        Pagamento.FinMetodoPagamentoId = metodoSelecionado?.id!;
        Pagamento.FormaPagamento = metodoSelecionado?.categoriaPagamento!;
        Pagamento.Valor = parseFloat(valor);
        Pagamento.Nsu = nsu === '' ? null : nsu;
        Pagamento.CaixaId = caixa?.id!;
        Pagamento.Porcentagem = Parcelas ? parseFloat(Parcelas.find(x => x.parcela === parcelaSelecionada)?.taxa?? "0.00") : metodoSelecionado?.taxa!;
        Pagamento.DiasPrevisao = metodoSelecionado?.diasFaturamento!;
        Pagamento.NumeroParcelas = metodoSelecionado?.categoriaPagamento === 3 ? parcelaSelecionada : null;
        Pagamento.Pago = metodoSelecionado?.baixaAutomatica ? true : false;
      AdicionaPagamento(Pagamento)
      setTipoSelecionado(null)
      setMetodoSelecionado(null)
      setTotalPago(totalPago + parseFloat(valor));
      console.log(metodoSelecionado)
  }
  const VerificaRemovePagamento = (pagamento: PagamentoTransacao,index: number) =>{
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
            <div className={"pagamento p-ripple " + (tipoSelecionado === FormaPagamento.Dinheiro ? 'selected' : '')} onClick={() => HandleChangeType(FormaPagamento.Dinheiro)}>
              <span>Dinheiro</span>
              <Ripple/>
            </div>
            <div className={"pagamento p-ripple " + (tipoSelecionado === FormaPagamento.Debito ? 'selected' : '')} onClick={() => HandleChangeType(FormaPagamento.Debito)}>
              <span>Débito</span>
              <Ripple/>
            </div>
            <div className={"pagamento p-ripple " + (tipoSelecionado === FormaPagamento.Credito ? 'selected' : '')} onClick={() => HandleChangeType(FormaPagamento.Credito)}>
              <span>Crédito</span>
              <Ripple/>
            </div>
            <div className={"pagamento p-ripple " + (tipoSelecionado === FormaPagamento.Outros ? 'selected' : '')} onClick={() => HandleChangeType(FormaPagamento.Outros)}>
              <span>Outros</span>
              <Ripple/>
            </div>
        </div>
        {
          tipoSelecionado ? <div className="pagamento-selecionado">
        
             {
              tipoSelecionado !== FormaPagamento.Dinheiro && 
              <div className="pagamentos-modal">
              <div className="itens">
                {metodosPagamento?.filter(x => x.categoriaPagamento === tipoSelecionado).map(x => 
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
              <JSTextField ref={valorInputRef} onKeyDown={(e) => e.key === 'Enter' ? AdicionarPagamento() : null} label="Valor" value={maskCurrency(valor)} onChange={(e) => setValor(FormatarDecimal(e.target.value))} fullWidth autoFocus/>
              {metodoSelecionado.codigoAutorizacao && 
                <JSTextField onKeyDown={(e) => e.key === 'Enter' ? AdicionarPagamento() : null} value={nsu} label="NSU" fullWidth onChange={(e) => setNsu(removerLetrasEPontos(e.target.value))}/>
              }
              {metodoSelecionado.categoriaPagamento === 3 && 
              <JSSelect fullWidth sx={{maxWidth: 200}}>
                <InputLabel id="demo-simple-select-label">Nº Parcelas</InputLabel>
                <Select
                  // disabled={formaPagamentoEditar?.permantente}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={parcelaSelecionada}
                  placeholder="Nº Parcelas"
                  label="Nº Parcelas"
                  onChange={(x) => setParcelaSelecionada(parseInt(x.target.value as string)?? 0)}
                >
                  <MenuItem disabled value={0} style={{display: 'none'}}>
                    <em>Selecione</em>
                  </MenuItem>
                  {JSON.parse(metodoSelecionado.parcelas).map((x: IParcelas) => <MenuItem  key={x.parcela} value={x.parcela}>{x.parcela}</MenuItem>)}
                </Select>
              </JSSelect>
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
                    <span className="tipo">[Tipo: {ConverterTipoPagamentoString(x.FormaPagamento)}]  {x.Nsu !== null ?  `   [NSU: ${x.Nsu}]`  : ''} {x.NumeroParcelas !== null ? ` [Parcelas: ${x.NumeroParcelas}]` : ''}</span>
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
