
import { useContext, useEffect } from 'react'

import './style.css'
import { Splitter, SplitterPanel, SplitterResizeEndEvent } from 'primereact/splitter'
import { CaixaContext } from '../../../../Common/Context/CaixaContext'
import * as ComponentServices from '../../Components/ComponentsServices'
import CaixaSVG from '../../Components/CaixaSVG/CaixaSVG'
import ItensConsulta from './ItensConsulta/ItensConsulta'
import Transacao from './Transacao/Transacao'
export default function Venda() {
    const {caixa} = useContext(CaixaContext)
    const {AbreDialogoAbrirCaixa} = useContext(ComponentServices.AbrirCaixaDialogoContext)
    useEffect(() => {
        document.title = "JSmart - Venda"
    },[])
    

 
    const handleSplitterDragEnd = (position: SplitterResizeEndEvent) => {
      let valor = position.sizes
      localStorage.setItem('splitterPosition', JSON.stringify(valor)); // Converte para string antes de salvar
    };

    const getLocal = () => {
      var valor = localStorage.getItem('splitterPosition');
      if(valor !== null){
        return JSON.parse(valor)
      }  
      else
        return [55,40];
    }
  return (
    <div className='venda'>
      {
        !caixa ? 
          <CaixaSVG onClick={() => AbreDialogoAbrirCaixa()}/>
          : 
        <>
          <Splitter
            style={{margin: '10px 3%', height: '100%', border: 'none', gap: 2,background: 'transparent'}}
            onResizeEnd={handleSplitterDragEnd}
          >
            <SplitterPanel size={getLocal()[0]} minSize={40} className="flex-panel" style={{ display: 'flex', flex: 1 }}>
              <ItensConsulta />
            </SplitterPanel>
            <SplitterPanel size={getLocal()[1]} minSize={40} className="flex-panel" style={{ display: 'flex', flex: 1 }}>
              <Transacao />
            </SplitterPanel>
          </Splitter> 
        </>
      }
       
      
    
    </div>
  )
}
