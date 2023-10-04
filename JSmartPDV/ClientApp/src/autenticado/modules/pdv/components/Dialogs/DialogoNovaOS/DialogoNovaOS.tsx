import { AppBar, Button, Dialog, Slide, Toolbar, Typography } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import * as ComponentsContext from '../../ComponentsServices'
import {IoChevronDownOutline} from 'react-icons/io5'
import './style.css'

import React, { MouseEventHandler, useContext } from 'react'
import { Ripple } from 'primereact/ripple';
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function DialogoNovaOS() {
    const {DialogoNovaOSAberto,FechaDialogoNovaOS} = useContext(ComponentsContext.NovaOSDialogoContext)
  return (
    <Dialog
        fullScreen
        open={DialogoNovaOSAberto}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <div className="nova-os-title">
            <div className="left">
                <div className="back-button p-ripple" onClick={() => FechaDialogoNovaOS()}>
                    <Ripple/>
                    <IoChevronDownOutline className='icon'/>
                </div>
                <span>Nova Ordem Serviço</span>
            </div>
            <div className="right">
                <ButtonAporte type='submit' label='Enviar'/>
            </div>
          </div>
        </AppBar>
    </Dialog>
  )
}
type ButtonAportType = | 'submit'
| 'cancel'
| 'clear';
const ButtonAporte = ({type,label,onClick,disabled}: {type?: ButtonAportType,label?: string,onClick?: MouseEventHandler<HTMLDivElement>,disabled?: boolean}) => {
    return (
        <div className={`button-aporte ${type} ${disabled && 'disabled'} p-ripple` }onClick={onClick}>
            <span>{label}</span>
            <Ripple/>
        </div>
    )
}