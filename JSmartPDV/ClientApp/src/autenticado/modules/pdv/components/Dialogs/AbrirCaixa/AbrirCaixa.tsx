import { Dialog, Paper, PaperProps, Slide } from '@mui/material'
import {IoClose} from 'react-icons/io5'
import { TransitionProps } from '@mui/material/transitions';
import React, { MouseEventHandler, useContext, useEffect, useState } from 'react'
import './style.css'
import { Ripple } from 'primereact/ripple';
import { JSTextField } from '../../../../../../UniversalComponents/MUI/TextField/CTextField';
import Draggable from 'react-draggable';
import * as ComponentsContext from '../../ComponentsServices'
import * as PDVContexts from '../../../contexts/PDVServices'
import { FormataMoeda, maskCurrency } from '../../../../../../common/utils';
import * as AxiosServices from '../../../services/axiosservices/AXIOSService'
import { toast } from 'react-toastify';

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
      <Draggable disabled bounds="body" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }
  
export default function DialogoAbrirCaixa() {
    const { DialogoAbrirCaixaAberto,FechaDialogoAbrirCaixa} = useContext(ComponentsContext.AbrirCaixaDialogoContext)
    const {mutateCaixa} = useContext(PDVContexts.CaixaContext)
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
        try{
          let response = await AxiosServices.CaixaService.PostAbrirCaixaAsync(body)
          mutateCaixa(response)
          FechaDialogoAbrirCaixa()
          toast.success("Caixa Iniciado com sucesso!")
        }finally{

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
                    <Ripple/>
                </div>
            </div>
            <div className="middle">
                <JSTextField fullWidth label="Valor" value={maskCurrency(valor)} onChange={(e) => setValor(FormataMoeda(e.target.value))}/>

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
            <Ripple/>
        </div>
    )
}