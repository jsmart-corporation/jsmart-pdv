import { Dialog, Paper, PaperProps, Slide } from '@mui/material'
import {IoClose} from 'react-icons/io5'
import { TransitionProps } from '@mui/material/transitions';
import React, { MouseEventHandler, useContext, useEffect, useState } from 'react'
import './style.css'

import * as ComponentsContext from '../../ComponentsServices'

import { toast } from 'react-toastify';
import { CaixaContext } from '../../../../../Common/Context/CaixaContext';
import { FormatarDecimal, maskCurrency } from '../../../../../Utils/Formatacoes';
import { JSTextField } from '../../../../../JSCommon/Components/JSTextField';
import { PostAbrirCaixaAsync } from '../../../../../Common/Services/Axios/CaixaService';
import { LoadingDialogContext } from '../../../../../JSCommon/Dialogs/LoadingDialog/LoadingDialogContext';

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
  
export default function DialogoAbrirCaixa() {
    const { DialogoAbrirCaixaAberto,FechaDialogoAbrirCaixa} = useContext(ComponentsContext.AbrirCaixaDialogoContext)
    const {AbrirDialogoLoading,FechaDialogoLoading} = useContext(LoadingDialogContext)
    const {mutateCaixa} = useContext(CaixaContext)
    const [valor,setValor] = useState<string>('0.00')
    useEffect(() => {
        Limpar();
    },[DialogoAbrirCaixaAberto])
    const Limpar = () => {
        setValor('0.00')
    }
    const Abrir = async () => {
      let body = {
        valorAbertura: valor
      }
      AbrirDialogoLoading("Iniciando Caixa...")
      try{
        let response = await PostAbrirCaixaAsync(body)
        mutateCaixa(response)
        FechaDialogoAbrirCaixa()
        toast.success("Caixa Iniciado com sucesso!")
      }finally{
        FechaDialogoAbrirCaixa()
      }
    }


  return (
    <Dialog
        open={DialogoAbrirCaixaAberto}
        TransitionComponent={Transition}
        keepMounted
        PaperComponent={PaperComponent}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="dialogo-aporte">
            <div className="top" id="draggable-dialog-title">
                <span>Abrir Caixa</span>
                <div className="close-button p-ripple" onClick={() => FechaDialogoAbrirCaixa()}>
                    <IoClose className='icon'/>
                </div>
            </div>
            <div className="middle">
                <JSTextField fullWidth label="Valor" value={maskCurrency(valor)} onChange={(e) => setValor(FormatarDecimal(e.target.value))}/>

            </div>
            <div className="bottom">
                <div className="left">
                    <ButtonAbrirCaixa type="clear" label='Limpar' onClick={() => Limpar()}/>
                </div>
                <div className="right">
                    <ButtonAbrirCaixa type='cancel' label='Cancelar' onClick={() => FechaDialogoAbrirCaixa()}/>
                    <ButtonAbrirCaixa type='submit' label="Iniciar" onClick={() => Abrir()}/>
                </div>
            </div>
        </div>
      </Dialog>
  )
}
type ButtonAportType = | 'submit'
| 'cancel'
| 'clear';
const ButtonAbrirCaixa = ({type,label,onClick,disabled}: {type?: ButtonAportType,label?: string,onClick?: MouseEventHandler<HTMLDivElement>,disabled?: boolean}) => {
    return (
        <div className={`button-aporte ${type} ${disabled && 'disabled'} p-ripple` }onClick={onClick}>
            <span>{label}</span>
        </div>
    )
}