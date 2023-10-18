import { Checkbox, Dialog, FormControlLabel, InputLabel, MenuItem, Select, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { useContext, useEffect, useState } from 'react'
import {IoClose} from 'react-icons/io5'
import './style.css'
import { JSSelect } from '../../../../../JSCommon/Components/JSSelect';
import { JSTextField } from '../../../../../JSCommon/Components/JSTextField';
import { bandeiras, categoriasPagamento, credenciadoras } from '../../../../../Common/Containts/ListasDrowDown';
import { IFormaPagamento } from '../../../../../Common/Interfaces';

import { LoadingDialogContext } from '../../../../../JSCommon/Dialogs/LoadingDialog/LoadingDialogContext';
import { FaTrashAlt } from 'react-icons/fa';
import { useContasBancarias } from '../../../../../Common/Services/Swr/SwrServices';
import { FormatarInteiro, FormatarPorcentagem, maskPercent } from '../../../../../Utils/Formatacoes';
import { DeleteFormaPagamentoAsync, PatchFormaPagamentoAsync, PostFormaPagamentoAsync } from '../../../../../Common/Services/Axios/FormaPagamentoServices';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


interface IPropsData{
  aberto: boolean,
  formaPagamentoEditar: IFormaPagamento | null,
  onClose(): void;
  onPost?(value: IFormaPagamento) :void;
  onEdit?(value: IFormaPagamento) :void;
  onRemove?(value: IFormaPagamento) :void;
}
export interface IParcelas {
  parcela: number,
  taxa: string,
}


export default function NovaFormaPagamento({aberto,formaPagamentoEditar,onClose,onPost,onEdit,onRemove}: IPropsData) {
  const [banco,setBanco] = useState<number>(0);
  const [credenciadora,setCredenciadora] = useState<string>('');
  const [categoria,setCategoria] = useState<number>(99);
  const [bandeira,setBandeira] = useState<number>(99);
  const [dias,setDias] = useState<number>(0);
  const [taxa,setTaxa] = useState<string>('0.0');
  const [nsu,setNsu] = useState<boolean>(false);
  const [troco,setTroco] = useState<boolean>(true);
  const [baixaAutomatica,setBaixaAutomatica] = useState<boolean>(true);
  const [descricao,setDescricao] = useState<string>('Nova Forma Pagamento');
  const [parcelas,setParcelas] = useState<IParcelas[] | null>(null);
  const [parcelaSelecionada,setParcelaSelecionada] = useState<number>(1);
  const {AbrirDialogoLoading,FechaDialogoLoading} = useContext(LoadingDialogContext)
  const {contasBancarias,isLoading} = useContasBancarias()

  useEffect(() => {
    if(categoria === 3){
      setTaxa(parcelas?.find(x => x.parcela === parcelaSelecionada)?.taxa.toString()?? "0")
    }else{
      setTaxa("0.00")
      setParcelaSelecionada(1)
    }
  },[categoria,parcelaSelecionada])
  useEffect(() => {
    if(!aberto){
      LimpaCampos()
    }
    if(formaPagamentoEditar){
      EditaCampos();
    }
  },[formaPagamentoEditar,aberto])

  const LimpaCampos = () => {
    setBanco(0)
    setCategoria(99)
    setCredenciadora('')
    setBandeira(99)
    setDias(0)
    setTaxa('0.0')
    setNsu(false)
    setTroco(true)
    setParcelas(initParcelas())
    setDescricao('Nova Forma Pagamento')
  }
  const EditaCampos = () => {
    if(!formaPagamentoEditar) return;
    setBanco(formaPagamentoEditar.contaBancariaId?? 0)
    setCategoria(formaPagamentoEditar.categoriaPagamento?? null)
    setCredenciadora(formaPagamentoEditar.credenciadora?? '')
    setBandeira(formaPagamentoEditar.bandeira?? null)
    setDias(formaPagamentoEditar.diasFaturamento)
    setTaxa(formaPagamentoEditar.taxa.toString())
    setNsu(formaPagamentoEditar.codigoAutorizacao)
    setTroco(formaPagamentoEditar.aceitarTroco)
    setDescricao(formaPagamentoEditar.descricao)
    if(formaPagamentoEditar.parcelas){
      setParcelas(JSON.parse(formaPagamentoEditar.parcelas))
    }else{
      console.log("Nulo")
      setParcelas(initParcelas())
    }
    setBaixaAutomatica(formaPagamentoEditar.baixaAutomatica)
  }

  const verify = () => {
    let status = true;
    if(descricao == ""){
      status = false;
    }
    return status;
  }
  const PostContaBancaria = async() => {
    let contaDTO: IFormaPagamento = {
      aceitarTroco: troco,
      bandeira: bandeira,
      categoriaPagamento: categoria,
      codigoAutorizacao: nsu,
      descricao: descricao,
      diasFaturamento: dias,
      id: 0,
      taxa: parseFloat(taxa),
      credenciadora: credenciadora == '' ? null : credenciadora,
      contaBancariaId: banco == 0 ? null : banco,
      parcelas: JSON.stringify(parcelas),
      baixaAutomatica: baixaAutomatica
    }
    AbrirDialogoLoading("Inserindo...")
    try{
      let result = await PostFormaPagamentoAsync(contaDTO)
      onPost!(result)
    }finally{
      FechaDialogoLoading()
    }
  }
  const PatchContaBancaria = async() => {
    let formaPagamento: IFormaPagamento = {
      aceitarTroco: troco,
      bandeira: bandeira,
      categoriaPagamento: categoria,
      codigoAutorizacao: nsu,
      descricao: descricao,
      diasFaturamento: dias,
      id: formaPagamentoEditar?.id?? 0,
      taxa: parseFloat(taxa),
      credenciadora: credenciadora == '' ? null : credenciadora,
      contaBancariaId: banco == 0 ? null : banco,
      criadoEm: formaPagamentoEditar?.criadoEm,
      deletado: formaPagamentoEditar?.deletado,
      permantente: formaPagamentoEditar?.permantente,
      deletadoEm: formaPagamentoEditar?.deletadoEm,
      parcelas: categoria === 3 ? JSON.stringify(parcelas) : null,
      baixaAutomatica: baixaAutomatica
    }
    AbrirDialogoLoading("Editando...")
    try{
      let result = await PatchFormaPagamentoAsync(formaPagamento)
      onEdit!(result)
    }finally{
      FechaDialogoLoading()
    }
  }
  const DeleteContaBancaria = async() => {
    AbrirDialogoLoading("Removendo...")
    try{
      let result = await DeleteFormaPagamentoAsync(formaPagamentoEditar?.id?? 0)
      onRemove!(result)
    }finally{
      FechaDialogoLoading()
    }
  }
  const handleChangeTaxa = (value: string) => {
    if(categoria === 3){
      let index = parcelas?.findIndex(x => x.parcela === parcelaSelecionada);
      if(index){
        let parcelaEditar = [...parcelas!];
        parcelaEditar[index].taxa = FormatarPorcentagem(value);
        setParcelas(parcelaEditar)
      }
    }else{
      setTaxa(FormatarPorcentagem(value))
    }
  }
  const initParcelas = () =>{
    let parcelasDTO: IParcelas[] = [];
    for (let index = 0; index < 12; index++) {
      let newParcela: IParcelas = {
        parcela: index + 1,
        taxa: `${ index + 1 }.00`
      }
      parcelasDTO.push(newParcela)
      
    } 
      
    return parcelasDTO;
  }
  return (
    <Dialog
        open={aberto}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="md"
        fullWidth
      >
        <div className="nova-forma-pagamento">
          <div className="header">
            <span>{formaPagamentoEditar ? "Editar Forma Pagamento" : "Formas Pagamento"}</span>
            <div className="button-close" onClick={() => onClose()}>
              <IoClose/>
            </div>
          </div>
          <div className="middle">
            <div className="top">
            <JSTextField  disabled={formaPagamentoEditar?.permantente} value={descricao} onChange={(x) => setDescricao(x.target.value)} label="Descricao" fullWidth/>     
            </div>
            
            <div className="bottom">
              <JSSelect fullWidth>
                <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                <Select
                  disabled={formaPagamentoEditar?.permantente}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={categoria}
                  placeholder="Categoria"
                  label="Categoria"
                  onChange={(x) => setCategoria(parseInt(x.target.value as string)?? 0)}
                >
                  <MenuItem disabled value={0} style={{display: 'none'}}>
                    <em>Selecione o Banco</em>
                  </MenuItem>
                  {categoriasPagamento.map(x => <MenuItem disabled={x.code === 1} key={x.code} value={x.code}>{x.name}</MenuItem>)}
                </Select>
              </JSSelect>
              <JSSelect sx={{width: 350}}>
                <InputLabel id="demo-simple-select-label">Bandeira</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={bandeira}
                  placeholder="Bandeira"
                  label="Bandeira"
                  onChange={(x) => setBandeira(parseInt(x.target.value as string)?? 0)}
                >
                  
                  {bandeiras.map(x => <MenuItem key={x.code} value={x.code}>{x.name}</MenuItem>)}
                </Select>
              </JSSelect>
              <JSSelect disabled={isLoading} sx={{width: 350}}>
                <InputLabel id="conta-destino">Conta de Destino</InputLabel>
                <Select
                  labelId="conta-destino"
                  id="conta-destino-select"
                  value={banco}
                  defaultValue={null}
                  placeholder="Estacao"
                  label="Conta de Destino"
                  onChange={(x) => setBanco(parseInt(x.target.value as string)?? 0)}
                >
                  <MenuItem disabled value={0} style={{display: 'none'}}>
                    <em>Banco</em>
                  </MenuItem>
                  {contasBancarias?.map(x => <MenuItem key={x.id} value={x.id}>{x.descricao}</MenuItem>)}
                </Select>
              </JSSelect>
            </div>
            <div className="bottom">
              <JSSelect fullWidth>
                <InputLabel id="demo-simple-select-label">Credenciadora</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={credenciadora}
                  
                  placeholder="Credenciadora"
                  label="Credenciadora"
                  onChange={(x) => setCredenciadora(x.target.value as string)}
                >
                  <MenuItem disabled value={0} style={{display: 'none'}}>
                      <em>Credenciadora</em>
                  </MenuItem>
                  {credenciadoras.map(x => <MenuItem key={x.code} value={x.code}>{x.name}</MenuItem>)}
                </Select>
              </JSSelect>
              <JSTextField sx={{width: 350}} value={dias} onChange={(x) => setDias(Number(FormatarInteiro(x.target.value)))} label="Dias para Faturamento" />
              {
                categoria === 3 && <JSSelect sx={{width: 350}}>
                <InputLabel id="demo-simple-select-label">Parcelas</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={parcelaSelecionada}
                  placeholder="Bandeira"
                  label="Bandeira"
                  onChange={(_x) => setParcelaSelecionada(parseInt(_x.target.value as string)?? 1)}
                >
                  
                  {parcelas?.map(x => <MenuItem key={x.parcela} value={x.parcela}>{x.parcela}</MenuItem>)}
                </Select>
              </JSSelect>
              }
              <JSTextField sx={{width: 350}} value={categoria === 3 ? maskPercent(parcelas?.find(x => x.parcela === parcelaSelecionada)?.taxa?? "0") : maskPercent(taxa)} onChange={(x) => handleChangeTaxa(x.target.value)} label="Taxa" />
            </div>
            <div className="bottom">
            <FormControlLabel disabled={formaPagamentoEditar?.permantente} checked={nsu}  control={<Checkbox  onChange={(x: React.ChangeEvent<HTMLInputElement>) => setNsu(x.target.checked)} />} label="Código de Autorização (NSU)" />
            <FormControlLabel checked={troco} control={<Checkbox  onChange={(x: React.ChangeEvent<HTMLInputElement>) => setTroco(x.target.checked)} />} label="Aceitar Troco" />
            <FormControlLabel checked={baixaAutomatica} control={<Checkbox  onChange={(x: React.ChangeEvent<HTMLInputElement>) => setBaixaAutomatica(x.target.checked)} />} label="Baixa Automatica" />
            </div>
          </div>
          
          <div className="bottom">
             {formaPagamentoEditar  && !formaPagamentoEditar.permantente 
              ?  
              <div className="button-remove" onClick={() => DeleteContaBancaria()}>
                <FaTrashAlt className="icon"/>
              </div>
              : 
              <div></div>}
              <div className={"button-salvar " + (!verify() ? 'disabled' : '')} onClick={() => {formaPagamentoEditar ? PatchContaBancaria() : PostContaBancaria()}}>
                <span>{formaPagamentoEditar ? "Editar" : "Salvar"}</span>
              </div>
          </div>
        </div>
      </Dialog>
  )
}
