import './style.css'
import {HiDesktopComputer} from 'react-icons/hi'
import {BiBarcodeReader, BiHome} from 'react-icons/bi'
import {TbDeviceDesktopAnalytics} from 'react-icons/tb'
import { NavLink } from 'react-router-dom';
import { MouseEventHandler, useContext } from 'react';
import { TransacaoContext } from '../../../../Common/Context/TransacaoContext';


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
  const {transacao} = useContext(TransacaoContext)
  
  const pages: ITab[] = [
    {
      key: 1,
      placeholder: 'Funcionalidades',
      pages: [
        {
          key: 1,
          icon: HiDesktopComputer,
          function: () => null,
          link: '/pdv/venda',
          placeholder: "Venda",
          isPage: true
        },
        {
          key: 2,
          icon: TbDeviceDesktopAnalytics,
          function: () => null,
          link: '/pdv/financeiro',
          placeholder: "Ordem de Serviço",
          isPage: true
        },
        
      ]
    },
    {
      key: 2,
      placeholder: 'Modulos',
      pages: [
        {
          key: 1,
          icon: BiHome,
          function: () => null,
          link: '/admin/home',
          placeholder: "Administrativo",
          isPage: true
        },
        {
          key: 2,
          icon: BiBarcodeReader,
          function: () => fechaDrawer(),
          link: '/fin/home',
          placeholder: "Financeiro",
          isPage: true
        },
        
      ]
    }
 
  ]
  function Verifica() {
   
      if (transacao.Itens.length > 0)
        return true
      else return false
    
    
  }
  return pages.map(x => (
    <div className="tabs-navigator" key={x.key}>
      <div className="placeholder">
        <span>{x.placeholder}</span>
      </div>
      <div className="childrens">
        {x.pages.map((x) => (
          x.isPage ? <NavButton key={x.key} page={x} onClick={() => Verifica()} disabled={Verifica()}/> : <CommandButton key={x.key} page={x}/>))}
      </div>
    </div>
  ));
    
    
  
}

function NavButton({page,onClick,disabled}: {page: IPage,onClick: MouseEventHandler<HTMLAnchorElement>,disabled: boolean}) {
  return(
    <NavLink to={page.link!} className={"nav-button p-ripple" + ((page.disabled || disabled )? ' disabled' : '')} onClick={onClick}>

      <page.icon className="icon"/>
      <span>{page.placeholder}</span>
    </NavLink>
  )
}
function CommandButton({page} : {page: IPage}){
  return(
    <div className={`command-button p-ripple` + (page.disabled ? 'disabled' : '')} onClick={() => page.function!()} >
      
      <page.icon className="icon"/>
      <span>{page.placeholder}</span>

    </div>
  )
}
