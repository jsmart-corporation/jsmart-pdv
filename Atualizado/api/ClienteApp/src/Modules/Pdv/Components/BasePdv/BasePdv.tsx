import { ReactNode, useContext } from "react";
import './style.css'

import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import Sidebar from "../Sidebar/Sidebar";
import { GeralContext } from "../../../../Common/Context/GeralContext";
import Dialogs from "../Dialogs/Dialogs";
import Drawers from "../Drawers/Drawers";

interface BasePdvProps {
  children?: ReactNode;
}

export default function BasePdv({children}: BasePdvProps) {
  const {sidebar,setSidebar} = useContext(GeralContext)
  return (
    <div className='base-pdv'>
      <div className="top">
        <div className="left">
          <div
            className="menu-button p-ripple"
            onClick={() => {
              setSidebar(!sidebar)
            }}
          >
            {sidebar ? (
              <AiOutlineMenuFold className="icon" />
            ) : (
              <AiOutlineMenuUnfold className="icon" />
            )}
          </div>
          <h3>JSmart PDV</h3>
        </div>
        <div className="right">
            
        </div>
      </div> 
      <div className="pages">
        {children}
        <Sidebar open={sidebar} close={() => setSidebar(false)}/>
      </div>
      <Dialogs/>
      <Drawers/>
    </div>
  )
}