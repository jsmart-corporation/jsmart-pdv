import { ReactNode, useContext, useState } from "react";
import './style.css'

import Drawers from "../Drawers/Drawers";
import Dialogs from "../Dialogs/Dialogs";
import { Ripple } from "primereact/ripple";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaCashRegister } from "react-icons/fa";
import * as ComponentsContext from '../ComponentsServices'
import * as PDVServices from '../../contexts/PDVServices'
import SidebarOverlay from "../Drawers/SidebarOverlay/SidebarOverlay";
import { MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { StyledFormControl, WhiteLabel, WhiteSelect } from "../../../../../UniversalComponents/MUI/WhiteSelect/WhiteSelect";
import { ContextGeral } from "../../../../context/ContextGeral";

interface BasePdvProps {
  children?: ReactNode;
}

export default function BasePdv({children}: BasePdvProps) {
  const { AbreDrawerSessao } = useContext(ComponentsContext.SessaoContext)
  const {caixa} = useContext(PDVServices.CaixaContext)
  const {estacaoSelecionada,TrocarEstacao,estacoes,sidebar,setSidebar} = useContext(ContextGeral)
  return (
    <div className='base-pdv'>
      <div className="top">
        <div className="left">
          <div
            className="menu-button p-ripple"
            onClick={() => {
              setSidebar(!sidebar);
            }}
          >
            {sidebar ? (
              <AiOutlineMenuFold className="icon" />
            ) : (
              <AiOutlineMenuUnfold className="icon" />
            )}
            <Ripple />  
          </div>
        </div>
        <div className="right">
            <div className="estacao-content">
            {/* <StyledFormControl  size="small">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={estacaoSelecionada}
                defaultValue={estacaoSelecionada}
                placeholder="Estacao"
                
                onChange={(x) => TrocarEstacao(x)}
              >
                <MenuItem disabled value={0} style={{display: 'none'}}>
                  <em>Selecione a Estacao</em>
                </MenuItem>
                {estacoes?.length === 0 && 
                <MenuItem disabled value={-1}>
                  <em>Nenhuma Estacao</em>
                </MenuItem>}
                {
                  estacoes?.map(x => 
                    <MenuItem  value={x.id} key={x.id}>
                      {x.nome}
                    </MenuItem>
                    )
                }
              </Select>
            </StyledFormControl> */}
            </div>
            {caixa && <div className="sessao-button" onClick={() => AbreDrawerSessao()}>
              <div className="span">Sessão</div>
              <FaCashRegister className="icon"/>
            </div>   }  
        </div>
      </div> 
      <div className="pages">
        {children}
        <SidebarOverlay open={sidebar} close={() => setSidebar(false)}/>
      </div>
      <Drawers/>
      <Dialogs/>
    </div>
  )
}