import './style.css'
import {HiDesktopComputer} from 'react-icons/hi'
import {GiBlackBook} from 'react-icons/gi'
import {MdAttachMoney,MdMoneyOffCsred,MdAdminPanelSettings} from 'react-icons/md'
import {Ripple} from 'primereact/ripple'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react'
import * as ComponentsServices from '../ComponentsServices'
import * as PDVContexts from '../../contexts/PDVServices'

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
  const {AbreDialogoAporte} = useContext(ComponentsServices.AporteDialogoContext)
  const {AbreDialogoSangria} = useContext(ComponentsServices.SangriaDialogoContext)
  const {caixa} = useContext(PDVContexts.CaixaContext)

  const pages: IPage[] = [
    {
      key: 1,
      icon: HiDesktopComputer,
      function: () => fechaDrawer(),
      link: '/pdv/venda',
      placeholder: "Venda",
      isPage: true
    },
    {
      key: 2,
      icon: GiBlackBook,
      function: () => fechaDrawer(),
      link: '/pdv/os',
      placeholder: "Ordens de Serviços",
      isPage: true
    },
    {
      key: 3,
      icon: MdAttachMoney,
      function: () => AbreDialogoAporte(),
      placeholder: "Aporte Caixa",
      disabled: !caixa,
      isPage: false
    },
    {
      key: 5,
      icon: MdMoneyOffCsred,
      function: () => AbreDialogoSangria(),
      placeholder: "Retirada Caixa",
      disabled: !caixa,
      isPage: false
    },
    {
      key: 6,
      icon: MdAdminPanelSettings,
      link: '/administrativo/produtos',
      placeholder: "Admistrativo",
      isPage: true
    },
  ]

  return pages.map((x) => (
    x.isPage ? <NavButton key={x.key} page={x}/> : <CommandButton key={x.key} page={x}/>
  ))
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
