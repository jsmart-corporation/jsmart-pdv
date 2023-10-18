import { Autocomplete, Checkbox, CircularProgress, Dialog, FormControlLabel, InputLabel, MenuItem, Paper, PaperProps,  Select,  Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { useContext, useEffect, useState } from 'react'
import {IoClose} from 'react-icons/io5'
import './style.css'
import { JSTextField } from '../../../../../JSCommon/Components/JSTextField';
import { IClientes, IFormaPagamento, TransacaoPagamentoFinanceiro } from '../../../../../Common/Interfaces';
import { LoadingDialogContext } from '../../../../../JSCommon/Dialogs/LoadingDialog/LoadingDialogContext';
import { FaTrashAlt } from 'react-icons/fa';
import { MobileDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { JSSelect } from '../../../../../JSCommon/Components/JSSelect';
import { tipoTransacaoPagamento } from '../../../../../Common/Containts/ListasDrowDown';
import { useClienteFiltro, useFormasPagamento } from '../../../../../Common/Services/Swr/SwrServices';
import { FormatarDecimal, maskCurrency } from '../../../../../Utils/Formatacoes';
import { PostTransacaoPagamentoAsync } from '../../../../../Common/Services/Axios/TransacaoService';
import { IParcelas } from '../../../../Administrativo/Components/Dialogs/NovaFormaPagamento/NovaFormaPagamento';

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
  categoriaEditar?: TransacaoPagamentoFinanceiro | null,
  onClose(): void;
  onPost?(value: TransacaoPagamentoFinanceiro) :void;
  onEdit?(value: TransacaoPagamentoFinanceiro) :void;
  onRemove?(value: TransacaoPagamentoFinanceiro) :void;
}

export default function NovaTransacao({aberto,categoriaEditar,onClose,onPost,onEdit,onRemove}: IPropsData) {
  const [descricao,setDescricao] = useState<string>('');
  const [buscaCliente,setBuscaCliente] = useState<string>('');
  const [nsu,setNsu] = useState<string | null>('');
  const [valor,setValor] = useState<string>('0.00');
  const [dataMovimento,setDataMovimento] = useState(dayjs());
  const [dataPagamento,setDataPagamento] = useState(dayjs());
  const [pago,setPago] = useState<boolean>(false);
  const [formaPagamento,setFormaPagamento] = useState<number>(1);
  const [formaPagamentoSelecionada,setFormaPagamentoSelecionada]  = useState<IFormaPagamento | null>(null)
  const [tipoTransacao,setTipoTransacao] = useState<number>(0);
  const [numeroParcela,setNumeroParcela] = useState<number>(1);
  const [cliente,setCliente] = useState<IClientes | null>(null)
  const {formasPagamento,isLoading} = useFormasPagamento()
  const {clientes,isClienteLoading} = useClienteFiltro(buscaCliente)

  const {AbrirDialogoLoading,FechaDialogoLoading} = useContext(LoadingDialogContext)
  useEffect(() => {
    if(!aberto){
      LimpaCampos()
    }
    if(categoriaEditar){
      EditaCampos();
    }
  },[categoriaEditar,aberto])
  useEffect(() => {
    if(formasPagamento == undefined) return
    if(formasPagamento && formaPagamento){
      let forma = formasPagamento.find(x => x.id === formaPagamento)
      if(forma){
        setFormaPagamentoSelecionada(forma)
      }
    }
  },[formaPagamento,formasPagamento])
  const LimpaCampos = () => {
    setDescricao('')
    setFormaPagamento(1)
    setFormaPagamentoSelecionada(null)
    setCliente(null)
    setPago(false)
    setValor('0.00')
    setNsu(null)
    setBuscaCliente('')
    setNumeroParcela(1)
  }
  useEffect(() => {
    setNsu(null)
    setNumeroParcela(1)
  },[formaPagamentoSelecionada])
  const EditaCampos = () => {
    if(!categoriaEditar) return;
    setDescricao(categoriaEditar?.descricao)
  }

  const verify = () => {
    let status = true;
    if(descricao == ""){
      status = false;
    }
    return status;
  }
  const getTaxa = () => {
    if(tipoTransacao === 0){
      if(formaPagamentoSelecionada?.categoriaPagamento === 3){
        let parcelas:IParcelas[] = JSON.parse(formaPagamentoSelecionada.parcelas);
        return parseFloat(parcelas.find(x => x.parcela === numeroParcela)?.taxa?? "0.00");
      }else{
        return formaPagamentoSelecionada?.taxa?? 0
      }
    }else{
      return 0
    }
  }
  const PostContaBancaria = async() => {
    let pagamentoDto: TransacaoPagamentoFinanceiro = {
      caixaId: null,
      clienteId: cliente?.id?? null,
      descricao: descricao,
      id: 0,
      dataPagamentoEfetuado: pago ? dataPagamento : null,
      dataVencimento: dataMovimento,
      nsu: nsu,
      pago: pago,
      valor: parseFloat(valor),
      valorCalculado: parseFloat(valor),
      transacaoId: null,
      porcentagemPagamento: getTaxa(),
      formaPagamentoId: formaPagamento !== 0 ? formaPagamento : null,
      contaBancariaId: formaPagamento !== 0 ? formaPagamentoSelecionada?.contaBancariaId : null,
      categoriaPagamento: formaPagamentoSelecionada!.categoriaPagamento,
      tipoTransacao: tipoTransacao,
      numeroParcelas: formaPagamentoSelecionada?.categoriaPagamento === 3 ? numeroParcela : null,
    }
    
    AbrirDialogoLoading("Inserindo...")
    try{
      let result = await (await PostTransacaoPagamentoAsync(pagamentoDto)).data
      onPost!(result)
    }finally{
      FechaDialogoLoading()
    }
  }
  const PatchContaBancaria = async() => {
    // let categoriaDto: TransacaoPagamentoFinanceiro = {
    //   id: categoriaEditar?.id?? 0,
    //   descricao: descricao,
    // }
    // AbrirDialogoLoading("Editando...")
    // try{
    //   let result = await PatchCategoriaAsync(categoriaDto)
    //   onEdit!(result)
    // }finally{
    //   FechaDialogoLoading()
    // }
  }
  const DeleteContaBancaria = async() => {
    
    // AbrirDialogoLoading("Removendo...")
    // try{
    //   let result = await DeleteCategoriaAsync(categoriaEditar?.id?? 0)
    //   onRemove!(result)
    // }finally{
    //   FechaDialogoLoading()
    // }
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
        <div className={"nova-transacao " + (tipoTransacao === 1 ? "dispensa" : "")}>
          <div className="header">
            <span>{categoriaEditar ? "Editar Transacao" : "Nova Transacao"}</span>
            <div className="button-close" onClick={() => onClose()}>
              <IoClose/>
            </div>
          </div>
          <div className="middle">
            <div className="top">
              <div className="bottom">
                <JSTextField value={maskCurrency(valor)} onChange={(x) => setValor(FormatarDecimal(x.target.value))} sx={{maxWidth: 150}} label="Valor" fullWidth/>
                <JSTextField value={descricao} onChange={(x) => setDescricao(x.target.value)} label="Descricao" fullWidth/>
              </div>
              <div className="bottom">
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
                {
                (formaPagamentoSelecionada && tipoTransacao === 0 && formaPagamentoSelecionada.categoriaPagamento === 3 ) &&
                formaPagamentoSelecionada.parcelas && 
                  <JSSelect fullWidth sx={{maxWidth: 100}}>
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
                  {formaPagamentoSelecionada?.codigoAutorizacao && tipoTransacao === 0 && <JSTextField value={nsu} onChange={(x) => setNsu(x.target.value)} label="NSU" fullWidth sx={{maxWidth: 200}}/>}
                <MobileDatePicker sx={{minWidth: 150}}value={dataMovimento} onChange={(newValue) => setDataMovimento(newValue?? dayjs)}  label="Data Movimento" defaultValue={dayjs('2022-04-17')} />
              </div>
              
              <div className="bottom">
              <JSSelect fullWidth sx={{maxWidth: 250}}>
                <InputLabel id="demo-simple-select-label">Tipo Transacao</InputLabel>
                  <Select
                    // disabled={formaPagamentoEditar?.permantente}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tipoTransacao}
                    placeholder="Tipo Transacao"
                    label="Tipo Transacao"
                    onChange={(x) => setTipoTransacao(parseInt(x.target.value as string)?? 0)}
                  >
                    <MenuItem disabled value={0} style={{display: 'none'}}>
                      <em>Selecione</em>
                    </MenuItem>
                    {tipoTransacaoPagamento.map(x => <MenuItem  key={x.code} value={x.code}>{x.name}</MenuItem>)}
                  </Select>
                </JSSelect>
                <FormControlLabel  checked={pago} control={<Checkbox  onChange={(x: React.ChangeEvent<HTMLInputElement>) => setPago(x.target.checked)} />} label="Pago" />
                {pago &&
                <MobileDatePicker value={dataPagamento} onChange={(newValue) => setDataPagamento(newValue?? dayjs)} sx={{width: 140}} label="Data Pagamento" />
                }
              </div>
             
              <div className="bottom">
              <Autocomplete
                        options={clientes??[]}
                        noOptionsText="Nenhum Cliente"
                        loading={isClienteLoading}
                        loadingText="Consultando..."
                        // autoHighlight={true}
                        isOptionEqualToValue={(option,value) => option.id === value.id}
                        onChange={(_event, newValue) => {
                          setCliente(newValue)
                        }}
                        getOptionLabel={(options: IClientes) => options.nome}
                        fullWidth
                       
                        renderOption={(props: any, option: IClientes) => {
                            return (
                                <li {...props} key={option.id}>
                                    {option.nome}
                                </li>
                            );
                        }}
                        renderInput={(params) => (
                            <JSTextField
                                {...params}
                                autoFocus
                                label="Buscar Cliente"
                                variant="outlined"
                                value={buscaCliente}
                                onChange={(e) => setBuscaCliente(e.target.value)}
                                // inputRef={inputRef}
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {isClienteLoading ? <CircularProgress color="inherit" size={20} /> : null}
                                            {params.InputProps.endAdornment}
                                        </React.Fragment>
                                    ),
                                }}
                                name="Consultar Clientes"
                                fullWidth
                            />
                        )}
                    />
              </div>
            
            </div>
          </div>
          <div className="bottom">
             {categoriaEditar
              ?  
              <div className="button-remove" onClick={() => DeleteContaBancaria()}>
                <FaTrashAlt className="icon"/>
              </div>
              : 
              <div></div>}
              <div className={"button-salvar " + (!verify() ? 'disabled' : '')} onClick={() => {categoriaEditar ? PatchContaBancaria() : PostContaBancaria()}}>
                <span>{categoriaEditar ? "Editar" : "Salvar"}</span>
              </div>
          </div>
        </div>
      </Dialog>
  )
}
