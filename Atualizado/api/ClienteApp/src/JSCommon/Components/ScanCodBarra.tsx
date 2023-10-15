import { useEffect } from 'react'

export default function ScanCodBarra({disabled,OnScan,deps,refreshTime}: {OnScan(code: string): void,deps?: any,refreshTime?: number,disabled?: boolean}) {
    useEffect(() => {
        if(disabled){
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
            }, refreshTime?? 50);
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
      }, [deps,refreshTime]);
  return <></>
}
