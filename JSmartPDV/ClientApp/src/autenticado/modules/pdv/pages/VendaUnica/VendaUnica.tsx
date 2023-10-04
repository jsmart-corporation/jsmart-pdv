import { Splitter, SplitterPanel, SplitterResizeEndEvent } from 'primereact/splitter'
import { useContext, useEffect, useRef } from 'react'
import * as PDVContext from '../../contexts/PDVServices'
import * as ComponentsContext from '../../components/ComponentsServices'
import './style.css'
import ItensConsulta from './ItensConsulta/ItensConsulta'
import Transacao from './Transacao/Transacao'
import CaixaSVG from '../../components/CaixaSVG/CaixaSVG'
export default function VendaUnica() {
  const {caixa} = useContext(PDVContext.CaixaContext)
  const {AbreDialogoAbrirCaixa} = useContext(ComponentsContext.AbrirCaixaDialogoContext)

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
    <div className='venda-unica'>
      {
        !caixa ? 
          <CaixaSVG onClick={() => AbreDialogoAbrirCaixa()}/>
          : 
        <>
          <Splitter
            style={{margin: '10px 3%', height: '100%', border: 'none', gap: 2,background: 'transparent' }}
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
