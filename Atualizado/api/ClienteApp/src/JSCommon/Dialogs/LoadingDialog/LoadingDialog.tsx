
import { CircularProgress, Dialog, DialogContent } from '@mui/material';
import { useContext } from 'react';
import './style.css'
import { LoadingDialogContext } from './LoadingDialogContext';

export default function LoadingDialog() {
  const {loadingDialogAberto,message} = useContext(LoadingDialogContext)  
  return (
    <Dialog
    open={loadingDialogAberto}
    keepMounted
    onClose={() => null}
    style={{zIndex: 1400}}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogContent >
        <div className="loading-dialog">
            <CircularProgress sx={{color: 'var(--green)'}} />
            {message && <span>{message}</span>}
        </div>
    </DialogContent>
    
  </Dialog>
  )
}

