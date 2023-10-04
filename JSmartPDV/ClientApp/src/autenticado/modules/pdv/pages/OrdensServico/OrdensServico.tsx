import { useContext, useEffect } from 'react'
import './style.css'

import {GiBlackBook} from 'react-icons/gi'
import {AiOutlinePlus} from 'react-icons/ai'
import { DataGrid } from '@mui/x-data-grid'
import * as ComponentsContext from '../../components/ComponentsServices'

export default function OrdensServico() {
  const {AbreDialogoNovaOS} = useContext(ComponentsContext.NovaOSDialogoContext)
  useEffect(() => {
    document.title = "JSmart - OS"
  },[])
  useEffect(() => {
    let scannedValue = '';

    const handleBarcodeScanned = (event: any) => {
      const key = event.key;

      if (/^\d$/.test(key)) {
        scannedValue += key;

        clearTimeout(scannedValueTimeout);
        scannedValueTimeout = setTimeout(() => {
          scannedValue = '';
        }, 50);
      } else if (key === 'Enter' && scannedValue.length > 1) {
        scannedValue = '';
      } else {
        scannedValue = '';
      }
    };

    let scannedValueTimeout:any;

    window.addEventListener('keydown', handleBarcodeScanned);

    return () => {
      window.removeEventListener('keydown', handleBarcodeScanned);
    };
  }, []);
  return (
    <div className='ordens-servico'>
      <div className="header">
        <div className="top">
          <div className="icon-container">
            <GiBlackBook className='icon'/>
          </div>
          <span>Orderns de Servico</span>
        </div>
        <div className="filters">
          <div className="left">
            {/* <JSTextField fullWidth label="Pesquisar"/> */}
          </div>
          <div className="right">
            <div className="nova-ordem-servico" onClick={() => AbreDialogoNovaOS()}>
              <AiOutlinePlus className='icon'/>
              <span>Nova</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid">
        <DataGrid rows={[]} columns={[]}/>
      </div>
    </div>
  )
}
