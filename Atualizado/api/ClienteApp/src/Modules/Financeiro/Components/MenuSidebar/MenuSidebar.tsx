import './style.css'

import {HiDesktopComputer} from 'react-icons/hi'
import { BiCartDownload, BiHome} from 'react-icons/bi'
import {TbDeviceDesktopAnalytics} from 'react-icons/tb'
import { NavLink } from 'react-router-dom';
import { RiExchangeDollarFill } from 'react-icons/ri';


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
      placeholder: 'Modulos',
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
          link: '/admin/home',
          placeholder: "Administrativo",
          isPage: true
        },
        
      ]
    },
    {
      key: 2,
      placeholder: 'Gestão',
      pages: [
        {
          key: 1,
          icon: BiHome,
          function: () => fechaDrawer(),
          link: '/fin/home',
          placeholder: "Inicio",
          isPage: true
        },
        {
          key: 2,
          icon: RiExchangeDollarFill,
          function: () => fechaDrawer(),
          link: '/fin/planejador',
          placeholder: "Planejador",
          isPage: true
        },
        {
          key: 3,
          icon: BiCartDownload,
          function: () => fechaDrawer(),
          link: '/fin/vendas',
          placeholder: "Vendas",
          isPage: true
        },
      
      
      ]
    }
 
  ]

  return pages.map(x => (
    <div className="tabs-navigator" key={x.key}>
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
    <NavLink to={page.link!} className={"nav-button p-ripple" + (page.disabled ? ' disabled' : '')} onClick={() => page.function ? page.function() : null}>

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
