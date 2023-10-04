import DialogoAbrirCaixa from "./AbrirCaixa/AbrirCaixa";
import DialogoAporte from "./DialogoAporte/DialogoAporte";
import DialogoNovaOS from "./DialogoNovaOS/DialogoNovaOS";
import DialogoSangria from "./DialogoRetirada/DialogoSangria";

const Dialogs = () => ([
    <>
        <DialogoAporte/>
        <DialogoSangria/>
        <DialogoNovaOS/>
        <DialogoAbrirCaixa/>
    </>
    
])
Dialogs.displayName = '';
export default Dialogs;