import React, { useContext } from "react";
import "./style.css";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Ripple } from "primereact/ripple";
import SidebarOverlay from "../Drawers/SidebarOverlay/SidebarOverlay";
import { ContextGeral } from "../../../../context/ContextGeral";
import { FaCashRegister } from "react-icons/fa";
import * as ComponentsContext from '../../../pdv/components/ComponentsServices'
import * as PDVServices from '../../../pdv/contexts/PDVServices'
import Drawers from "../Drawers/Drawers";



export default function BaseFinanceiro({
  children,
}: {
  children?: React.ReactNode;
}) {
  const {sidebar,setSidebar} = useContext(ContextGeral)

  const { AbreDrawerSessao } = useContext(ComponentsContext.SessaoContext)
  const {caixa} = useContext(PDVServices.CaixaContext)
  return (
    <div className='base-financeiro'>
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
          <h3>Administrativo</h3>
        </div>
        <div className="right">
            {/* <div className="estacao-content">
            <StyledFormControl  size="small">
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
                    <MenuItem  value={x.id}>
                      {x.nome}
                    </MenuItem>
                    )
                }
              </Select>
            </StyledFormControl>
            </div> */}
            {caixa && <div className="sessao-button" onClick={() => AbreDrawerSessao()}>
              <div className="span">Sessão</div>
              <FaCashRegister className="icon"/>
            </div>   }  
        </div>
      </div> 
      <div className="pages">
        {children}
        <Drawers/>
        <SidebarOverlay open={sidebar} close={() => setSidebar(!sidebar)}/>
      </div>
    </div>
  );
}