import { Dialog,Paper, PaperProps, Slide } from '@mui/material'
import {IoClose} from 'react-icons/io5'
import { TransitionProps } from '@mui/material/transitions';
import React, { MouseEventHandler, useContext, useEffect, useState } from 'react'
import './style.css'
import { Ripple } from 'primereact/ripple';
import { JSTextField } from '../../../../../../UniversalComponents/MUI/TextField/CTextField';
import * as ComponentsContext from '../../ComponentsServices'
import * as PDVServices from '../../../contexts/PDVServices'
import Draggable from 'react-draggable';
import * as Interfaces from '../../../interfaces/Interface'
import * as AxiosServices from '../../../services/axiosservices/AXIOSService'
import { FormataMoeda, maskCurrency } from '../../../../../../common/utils';
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
      <Draggable   bounds="body" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }
export default function DialogoSangria() {
    const { DialogoSangriaAberto,FechaDialogoSangria} = useContext(ComponentsContext.SangriaDialogoContext)
    const { caixa } = useContext(PDVServices.CaixaContext)
    const [valor,setValor] = useState<string>('0.00')
    const [observacao,setObservacao] = useState<string>('')
    useEffect(() => {
        Limpar();
    },[DialogoSangriaAberto])
    const Limpar = () => {
        setValor('0.00')
        setObservacao('')
    }

  const Retirada = async () => {
    let AporteCaixa: Interfaces.AporteCaixa = {
      caixaId: caixa?.id!,
      tipo: Interfaces.TipoControleCaixa.Retirada,
      valor: parseFloat(valor),
      descricao: observacao,
    }

    try{
      let response = await AxiosServices.CaixaService.PostRetiradaAsync(AporteCaixa)
      if(response){
        FechaDialogoSangria();
        toast.success("Retirada Realizada com sucesso!")
      }
    }finally{
      
    }
  }
  return (
    <Dialog
        open={DialogoSangriaAberto}
        TransitionComponent={Transition}
        keepMounted
        PaperComponent={PaperComponent}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="dialogo-sangria">
            <div className="top" id="draggable-dialog-title">
                <span>Sangria</span>
                <div className="close-button p-ripple" onClick={() => FechaDialogoSangria()}>
                    <IoClose className='icon'/>
                    <Ripple/>
                </div>
            </div>
            <div className="middle">
                <JSTextField fullWidth label="Valor" value={maskCurrency(valor)} onChange={(e) => setValor(FormataMoeda(e.target.value))}/>
                <JSTextField fullWidth multiline rows={4} label="Observação" value={observacao} onChange={(e) => setObservacao(e.target.value)}/>
            </div>
            <div className="bottom">
                <div className="left">
                    <ButtonSangria type="clear" label='Limpar' onClick={() => Limpar()}/>
                </div>
                <div className="right">
                    <ButtonSangria type='cancel' label='Cancelar' onClick={() => FechaDialogoSangria()}/>
                    <ButtonSangria type='submit' label="Enviar" disabled={Number.parseFloat(valor) === 0} onClick={() => Retirada()}/>
                </div>
            </div>
        </div>
      </Dialog>
  )
}
type ButtonAportType = | 'submit'
| 'cancel'
| 'clear';
const ButtonSangria = ({type,label,onClick,disabled}: {type?: ButtonAportType,label?: string,onClick?: MouseEventHandler<HTMLDivElement>,disabled?: boolean}) => {
    return (
        <div className={`button-sangria ${type} ${disabled && 'disabled'} p-ripple` }onClick={onClick}>
            <span>{label}</span>
            <Ripple/>
        </div>
    )
}