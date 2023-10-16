import { Dialog, MenuItem, Paper, PaperProps, Select, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { useContext, useEffect, useState } from 'react'
import {IoClose} from 'react-icons/io5'
import './style.css'
import { JSSelect } from '../../../../../JSCommon/Components/JSSelect';
import { JSTextField } from '../../../../../JSCommon/Components/JSTextField';
import { bancos } from '../../../../../Common/Containts/ListasDrowDown';
import { ContaBancaria } from '../../../../../Common/Interfaces';
import { DeleteContaBancariaAsync, PatchContaBancariaAsync, PostContaBancariaAsync } from '../../../../../Common/Services/Axios/ContasBancariasServices';
import { LoadingDialogContext } from '../../../../../JSCommon/Dialogs/LoadingDialog/LoadingDialogContext';
import { FaTrashAlt } from 'react-icons/fa';

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
      <Paper {...props} />  
  );
}

interface IPropsData{
  aberto: boolean,
  contaBancariaEditar: ContaBancaria | null,
  onClose(): void;
  onPost?(value: ContaBancaria) :void;
  onEdit?(value: ContaBancaria) :void;
  onRemove?(value: ContaBancaria) :void;
}

export default function NovaContaBancaria({aberto,contaBancariaEditar,onClose,onPost,onEdit,onRemove}: IPropsData) {
  const [banco,setBanco] = useState<number>(0);
  const [descricao,setDescricao] = useState<string>('');
  const [agencia,setAgencia] = useState<string>('');
  const [conta,setConta] = useState<string>('');
  const {AbrirDialogoLoading,FechaDialogoLoading} = useContext(LoadingDialogContext)
  useEffect(() => {
    if(!aberto){
      LimpaCampos()
    }
    if(contaBancariaEditar){
      EditaCampos();
    }
  },[contaBancariaEditar,aberto])

  const LimpaCampos = () => {
    setBanco(0)
    setDescricao('')
    setAgencia('')
    setConta('')
  }
  const EditaCampos = () => {
    if(!contaBancariaEditar) return;
    setBanco(contaBancariaEditar?.banco)
    setDescricao(contaBancariaEditar?.descricao)
    setAgencia(contaBancariaEditar?.agencia?? '')
    setConta(contaBancariaEditar?.conta?? '')
  }

  const verify = () => {
    let status = true;
    if(descricao == ""){
      status = false;
    }
    return status;
  }
  const PostContaBancaria = async() => {
    let contaDTO: ContaBancaria = {
      banco: banco,
      descricao: descricao,
      agencia: agencia,
      conta: conta,
      id: 0
    }
    AbrirDialogoLoading("Inserindo...")
    try{
      let result = await PostContaBancariaAsync(contaDTO)
      onPost!(result)
    }finally{
      FechaDialogoLoading()
    }
  }
  const PatchContaBancaria = async() => {
    let contaDTO: ContaBancaria = {
      banco: banco,
      descricao: descricao,
      agencia: agencia,
      conta: conta,
      id: contaBancariaEditar?.id?? 0
    }
    AbrirDialogoLoading("Editando...")
    try{
      let result = await PatchContaBancariaAsync(contaDTO)
      onEdit!(result)
    }finally{
      FechaDialogoLoading()
    }
  }
  const DeleteContaBancaria = async() => {
    
    AbrirDialogoLoading("Removendo...")
    try{
      let result = await DeleteContaBancariaAsync(contaBancariaEditar?.id?? 0)
      onRemove!(result)
    }finally{
      FechaDialogoLoading()
    }
  }
  return (
    <Dialog
        open={aberto}
        TransitionComponent={Transition}
        keepMounted
        PaperComponent={PaperComponent}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="nova-conta-bancaria">
          <div className="header">
            <span>{contaBancariaEditar ? "Editar Conta Bancaria" : "Contas Bancarias"}</span>
            <div className="button-close" onClick={() => onClose()}>
              <IoClose/>
            </div>
          </div>
          <div className="middle">
            <div className="top">
              <JSSelect fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={banco}
                  placeholder="Estacao"
                  
                  onChange={(x) => setBanco(parseInt(x.target.value as string)?? 0)}
                >
                  <MenuItem disabled value={0} style={{display: 'none'}}>
                    <em>Selecione o Banco</em>
                  </MenuItem>
                  {bancos.map(x => <MenuItem key={x.code} value={x.code}>{x.name}</MenuItem>)}
                </Select>
              </JSSelect>
            </div>
            <div className="bottom">
              <JSTextField value={descricao} onChange={(x) => setDescricao(x.target.value)} label="Descricao"  disabled={contaBancariaEditar?.permanente} fullWidth/>
              <JSTextField value={agencia} onChange={(x) => setAgencia(x.target.value)} label="Agencia" />
              <JSTextField value={conta} onChange={(x) => setConta(x.target.value)} label="Conta" />
            </div>
          </div>
          <div className="bottom">
             {contaBancariaEditar  && !contaBancariaEditar.permanente 
              ?  
              <div className="button-remove" onClick={() => DeleteContaBancaria()}>
                <FaTrashAlt className="icon"/>
              </div>
              : 
              <div></div>}
              <div className={"button-salvar " + (!verify() ? 'disabled' : '')} onClick={() => {contaBancariaEditar ? PatchContaBancaria() : PostContaBancaria()}}>
                <span>{contaBancariaEditar ? "Editar" : "Salvar"}</span>
              </div>
          </div>
        </div>
      </Dialog>
  )
}
