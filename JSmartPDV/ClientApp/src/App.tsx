import ModuleRoutes from "./routes/routes";
import "primereact/resources/themes/rhea/theme.css";   
import PrimeReact from "primereact/api"  
    
//core
import "primereact/resources/primereact.min.css";          
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import moment from "moment";
import { ContextGeralProvider } from "./autenticado/context/ContextGeral";
import { CaixaProvider } from "./autenticado/modules/pdv/contexts/CaixaContext";
         
function App() {
  PrimeReact.ripple = true;
  moment.locale("pt-br");
  return (
    <>
    <ContextGeralProvider>
      <CaixaProvider>
        <ModuleRoutes/>
        <ToastContainer/>
      </CaixaProvider>
    </ContextGeralProvider>
   
    </>
  )
}

export default App
