import React, { useEffect } from 'react'

export default function ScanCodBarra({Params,OnScan,Deps,RefreshTime}: {OnScan(code: string): void,Deps: any,RefreshTime?: number,Params?: boolean}) {
    useEffect(() => {
        if(Params){
            return;
        }
        let scannedValue = '';
        const handleBarcodeScanned = (event: any) => {
          const key = event.key;
          if (/^\d$/.test(key)) {
            scannedValue += key;
            clearTimeout(scannedValueTimeout);
            scannedValueTimeout = setTimeout(() => {
              scannedValue = '';
            }, RefreshTime?? 50);
          } else if (key === 'Enter' && scannedValue.length > 1) {
            OnScan(scannedValue);
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
      }, [Deps,RefreshTime]);
  return <></>
}
