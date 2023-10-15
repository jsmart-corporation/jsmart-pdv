import React from 'react'
import './style.css'
import { TransacaoStatus } from '../../../../Common/Context/TransacaoContext'
import { maskCurrency } from '../../../../Utils/Formatacoes'

export default function SallerFinish({finalizado,troco}:{finalizado: TransacaoStatus,troco: number}) {
  
  return (
    <div className='sallerFinish'>   
        <div className='content'>
            <div className={"circle-loader " + (finalizado === TransacaoStatus.Enviado ? "load-complete" : "")}>
                <div className="checkmark draw"></div>
            </div>    
            {finalizado === TransacaoStatus.Enviado &&
              <div className="labels">
                <h5 style={{lineHeight: "1rem",fontSize: '1.3rem', color: '#333333'}}>VENDA FINALIZADA</h5>
          
                <React.Fragment>
                  <h4 style={{lineHeight: "1.5rem",fontSize: '1.5rem', color: '#333333'}}>Troco</h4>
                  <h2 style={{lineHeight: "1.5rem",fontSize: '2rem', color: '#333333'}}><b>{maskCurrency(troco)}</b></h2>     
                </React.Fragment>
              </div> 
            }
                           
        </div>   
  </div>
  )
}
