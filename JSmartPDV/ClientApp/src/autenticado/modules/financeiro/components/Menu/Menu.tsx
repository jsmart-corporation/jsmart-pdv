import './style.css'
import {FaMoneyBillAlt, FaUsersCog} from 'react-icons/fa'
import {LuComputer} from 'react-icons/lu'
import {BsBank2} from 'react-icons/bs'
import {HiDesktopComputer,HiUsers} from 'react-icons/hi'
import {BiBarcodeReader, BiSolidPurchaseTag} from 'react-icons/bi'
import {TbDeviceDesktopAnalytics} from 'react-icons/tb'
import {Ripple} from 'primereact/ripple'
import { NavLink } from 'react-router-dom';


interface ITab {
  key: number;
  placeholder: string;
  pages: IPage[]
}
interface IPage {
    key: number;
    icon: any;
    link?: string;
    function?: () => void;
    placeholder: string;
    disabled?: boolean;
    isUsable?: boolean;
    isPage?: boolean;
  }
  
   
    
export function NavigationMenu({fechaDrawer} : {fechaDrawer(): void}) {

  
  const pages: ITab[] = [
    {
      key: 1,
      placeholder: 'modulos',
      pages: [
        {
          key: 1,
          icon: HiDesktopComputer,
          function: () => null,
          link: '/pdv/venda',
          placeholder: "PDV",
          isPage: true
        },
        {
          key: 2,
          icon: TbDeviceDesktopAnalytics,
          function: () => null,
          link: '/pdv/financeiro',
          placeholder: "Financeiro",
          isPage: true
        },
        
      ]
    },
    {
      key: 2,
      placeholder: 'Cadastros',
      pages: [
        {
          key: 2,
          icon: BiBarcodeReader,
          function: () => null,
          link: '/administrativo/produtos',
          placeholder: "Cadastro de Produtos",
          isPage: true
        },
        {
          key: 3,
          icon: HiUsers,
          function: () => null,
          link: '/administrativo/clientes',
          placeholder: "Cadastro de Clientes",
          isPage: true
        },
        {
          key: 4,
          icon: FaUsersCog,
          function: () => null,
          link: '/administrativo/usuarios',
          placeholder: "Cadastro de Usuarios",
          isPage: true
        },
        {
          key: 5,
          icon: FaMoneyBillAlt,
          function: () => null,
          link: '/administrativo/formaspagamento',
          placeholder: "Formas de Pagamentos",
          isPage: true
        },
        {
          key: 6,
          icon: BsBank2,
          function: () => null,
          link: '/administrativo/bancos',
          placeholder: "Contas Bancarias",
          isPage: true
        },
        {
          key: 7,
          icon: BiSolidPurchaseTag,
          function: () => null,
          link: '/administrativo/categorias',
          placeholder: "Cadastro de Categorias",
          isPage: true
        },
        {
          key: 8,
          icon: LuComputer,
          function: () => null,
          link: '/administrativo/estacoes',
          placeholder: "Estações",
          isPage: true
        },
      ]
    }
 
  ]

  return pages.map(x => (
    <div className="tabs-navigator">
      <div className="placeholder">
        <span>{x.placeholder}</span>
      </div>
      <div className="childrens">
        {x.pages.map((x) => (
          x.isPage ? <NavButton key={x.key} page={x}/> : <CommandButton key={x.key} page={x}/>))}
      </div>
    </div>
  ));
    
    
  
}

function NavButton({page}: {page: IPage}) {
  return(
    <NavLink to={page.link!} className={"nav-button p-ripple" + (page.disabled ? 'disabled' : '')} onClick={() => page.function ? page.function() : null}>

      <Ripple/>
      <page.icon className="icon"/>
      <span>{page.placeholder}</span>
    </NavLink>
  )
}
function CommandButton({page} : {page: IPage}){
  return(
    <div className={`command-button p-ripple` + (page.disabled ? 'disabled' : '')} onClick={() => page.function!()} >
      
      <Ripple/>
      <page.icon className="icon"/>
      <span>{page.placeholder}</span>

    </div>
  )
}
