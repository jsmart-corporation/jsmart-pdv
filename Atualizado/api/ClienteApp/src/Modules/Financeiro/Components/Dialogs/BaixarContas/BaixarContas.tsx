import { Dialog, InputLabel, MenuItem, Paper, PaperProps,  Select,  Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { useContext, useEffect, useState } from 'react'
import {IoClose} from 'react-icons/io5'
import './style.css'
import { JSTextField } from '../../../../../JSCommon/Components/JSTextField';
import { IFormaPagamento, TransacaoPagamentoFinanceiro } from '../../../../../Common/Interfaces';
import { LoadingDialogContext } from '../../../../../JSCommon/Dialogs/LoadingDialog/LoadingDialogContext';
import { MobileDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { JSSelect } from '../../../../../JSCommon/Components/JSSelect';
import { useFormasPagamento } from '../../../../../Common/Services/Swr/SwrServices';
import { FormatarDecimal, maskCurrency } from '../../../../../Utils/Formatacoes';
import { IParcelas } from '../../../../Administrativo/Components/Dialogs/NovaFormaPagamento/NovaFormaPagamento';
import { MdPayment } from 'react-icons/md';
import { GiCardExchange } from 'react-icons/gi';
import { PostBaixaPagamentoAsync } from '../../../../../Common/Services/Axios/TransacaoService';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function PaperComponent(props: PaperProps) {
  return (
      <Paper  {...props} />  
  );
}

interface IPropsData{
  aberto: boolean,
  contas?: any[],
  total: number,
  onClose(): void;
  onPost?(value: TransacaoPagamentoFinanceiro[]) :void;
}

export default function BaixarContas({aberto,contas,total,onClose,onPost}: IPropsData) {
  const [nsu,setNsu] = useState<string | null>('');
  const [valor,setValor] = useState<string>('0.00');
  const [dataPagamento,setDataPagamento] = useState(dayjs());
  const [formaPagamento,setFormaPagamento] = useState<number>(1);
  const [formaPagamentoSelecionada,setFormaPagamentoSelecionada]  = useState<IFormaPagamento | null>(null)
  const [numeroParcela,setNumeroParcela] = useState<number>(1);
  const {formasPagamento,isLoading} = useFormasPagamento()

  const {AbrirDialogoLoading,FechaDialogoLoading} = useContext(LoadingDialogContext)
  useEffect(() => {
    if(!aberto){
      LimpaCampos()
    }else{
      setValor(total.toString())
    }
  },[aberto])
  useEffect(() => {
    if(formasPagamento === undefined) return
    if(formasPagamento && formaPagamento){
      let forma = formasPagamento.find(x => x.id === formaPagamento)
      if(forma !== undefined){
        setFormaPagamentoSelecionada(forma)
      }
    }
  },[formaPagamento,formasPagamento,aberto])
  const LimpaCampos = () => {
    setFormaPagamento(1)
    setFormaPagamentoSelecionada(null)
    setValor('0.00')
    setNsu(null)
    setNumeroParcela(1)
  }
  useEffect(() => {
    setNsu(null)
    setNumeroParcela(1)
  },[formaPagamentoSelecionada])
 
  const verify = () => {
    let status = true;
    if((total - parseFloat(valor)) < 0){
      status = false;
    }
    if(formaPagamentoSelecionada?.codigoAutorizacao && (nsu == null || nsu == "")){
      status = false;
    }
    return status;
  }
  
  const getRestante = () => {
    let restante = total - parseFloat(valor);
    if(restante > 0){
      return restante
    }else return 0.00
  }
  const RealizarBaixa = async () => {
    let parcelas:IParcelas[] = formaPagamentoSelecionada?.categoriaPagamento === 3 && formaPagamentoSelecionada.parcelas ? JSON.parse(formaPagamentoSelecionada.parcelas) : null;
    let baixaDto = {
      contas: contas,
      formaPagamentoId: formaPagamentoSelecionada?.id,
      nsu: nsu,
      contaBancariaId: formaPagamentoSelecionada?.contaBancariaId,
      valor: parseFloat(valor),
      parcelas: formaPagamentoSelecionada?.categoriaPagamento === 3 ? numeroParcela : null,
      dataPagamento: dataPagamento,
      dias: formaPagamentoSelecionada?.diasFaturamento,
      porcentagem: parcelas ? parcelas.find(x => x.parcela === numeroParcela)?.taxa : formaPagamentoSelecionada?.taxa
    }
    if(getRestante() > 0){

    }else{
      AbrirDialogoLoading("Realizando Baixa, Aguarde...")
      try{
        let response = (await PostBaixaPagamentoAsync(baixaDto)).data;
        onPost!(response);
      }finally{
        FechaDialogoLoading()
      }
    }
    console.log(contas)
  }
  return (
    <Dialog
        open={aberto}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="md"
        PaperComponent={PaperComponent}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={"baixar-contas"}>
          <div className="header">
            <span>Baixar Contas</span>
            <div className="button-close" onClick={() => onClose()}>
              <IoClose/>
            </div>
          </div>
          <div className="middle">
            
            <div className="left">
              <div className="row">
                  <MdPayment className="icon"/>
                  <div className="right">
                    <div className="valor">
                      {maskCurrency(total)}
                    </div>
                    <div className="restante">Total</div>
                  </div>
              </div>
              <div className="row">
                  <GiCardExchange className="icon small"/>
                  <div className="right">
                    <div className="valor">
                      {maskCurrency(getRestante())}
                    </div>
                    <div className="restante">Restante</div>
                  </div>
              </div>
            </div>
            <div className="top">
              <div className="bottom">
                <JSTextField value={maskCurrency(valor)} onChange={(x) => setValor(FormatarDecimal(x.target.value))} sx={{maxWidth: 180}} label="Valor" fullWidth/>
                <JSSelect fullWidth >
                  <InputLabel id="demo-simple-select-label">Forma Pagamento</InputLabel>
                  <Select
                    disabled={isLoading}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formaPagamento}
                    placeholder="Forma Pagamento"
                    label="Forma Pagamento"
                    onChange={(x) => setFormaPagamento(parseInt(x.target.value as string)?? 0)}
                  >
                    <MenuItem disabled value={0} style={{display: 'none'}}>
                      <em>Selecione</em>
                    </MenuItem>
                    {formasPagamento?.map(x => <MenuItem  key={x.id} value={x.id}>{x.descricao}</MenuItem>)}
                  </Select>
                </JSSelect>
                
                
              </div>
              <div className="bottom">
              {
                (formaPagamentoSelecionada && formaPagamentoSelecionada.categoriaPagamento === 3 ) &&
                formaPagamentoSelecionada.parcelas && 
                  <JSSelect fullWidth sx={{maxWidth: 180}}>
                    <InputLabel id="demo-simple-select-label">Parcelas</InputLabel>
                    <Select
                      // disabled={formaPagamentoEditar?.permantente}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={numeroParcela}
                      placeholder="Parcelas"
                      label="Tipo Transacao"
                      onChange={(x) => setNumeroParcela(parseInt(x.target.value as string)?? 0)}
                    >
                      <MenuItem disabled value={0} style={{display: 'none'}}>
                        <em>Selecione</em>
                      </MenuItem>
                      {JSON.parse(formaPagamentoSelecionada.parcelas).map((x: IParcelas) => <MenuItem  key={x.parcela} value={x.parcela}>{x.parcela}</MenuItem>)}
                    </Select>
                  </JSSelect>                  
                }
                  {formaPagamentoSelecionada?.codigoAutorizacao &&  <JSTextField value={nsu} onChange={(x) => setNsu(x.target.value)} label="NSU" fullWidth/>}
                
                <MobileDatePicker value={dataPagamento} onChange={(newValue) => setDataPagamento(newValue?? dayjs)} sx={{width: 180,minWidth: 180}} label="Data Pagamento" />
                
                {/* <MobileDatePicker sx={{minWidth: 150}}value={dataMovimento} onChange={(newValue) => setDataMovimento(newValue?? dayjs)}  label="Data Movimento" defaultValue={dayjs('2022-04-17')} /> */}
              </div>
            </div>
          </div>
          <div className="bottom">
              <div className="div"></div>
              <div className={"button-salvar " + (!verify() ? 'disabled' : '')} onClick={() => RealizarBaixa()}>
                <span>Salvar</span>
              </div>
          </div>
        </div>
      </Dialog>
  )
}
