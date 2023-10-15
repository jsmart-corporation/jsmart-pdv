import React, { useContext } from "react";
import "./style.css";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import Sidebar from "../Sidebar/Sidebar";
import { GeralContext } from "../../../../Common/Context/GeralContext";

export default function BaseAdmin({
  children,
}: {
  children?: React.ReactNode;
}) {
  const {sidebar,setSidebar} = useContext(GeralContext)

  return (
    <div className='base-admin'>
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
   
          </div>
          <h3>Administrativo</h3>
        </div>
        <div className="right">
            
        </div>
      </div> 
      <div className="pages">
        {children}
        <Sidebar open={sidebar} close={() => setSidebar(false)}/>
      </div>
    </div>
  );
}