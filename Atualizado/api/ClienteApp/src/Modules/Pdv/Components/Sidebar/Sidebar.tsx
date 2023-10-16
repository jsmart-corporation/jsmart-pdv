import { useContext, useEffect, useRef } from 'react';
import './style.css'
import {BiExit} from 'react-icons/bi'
import { GeralContext } from '../../../../Common/Context/GeralContext';
import { NavigationMenu } from '../MenuSidebar/MenuSidebar';
import packageJson from '../../../../../package.json';
import Logo from '../../../../assets/LogoMarca.svg'
export default function Sidebar({open,close}:{open: boolean,close(): void;}) {
    const {user,LogOut} = useContext(GeralContext)
    const sidebarOverlayRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event: any) {

        if (sidebarOverlayRef.current && event.target === sidebarOverlayRef.current) {
            close(); 
        }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
        document.removeEventListener('click', handleClickOutside);
        };
    }, [close]);
    const getUserName = () => {
      let userName = user?.name;
      let userSplit = userName?.split(" ")[0];

      if(userSplit)
      return userSplit
    }
  return (
    <div className={'sidebar-overlay-admin ' + (!open ? 'open' : '')} ref={sidebarOverlayRef}>
        <div className="sidebar">
          <div className="top">
            <NavigationMenu fechaDrawer={() => close()}/>
          </div>
          <div className="bottom">
              <img src={Logo}/>
            <div className="left">
              <span className='nome'>{getUserName()}</span>
              <span className='role'>Administrador</span>
            </div>
            <div className="exit">
            <div className="exit-button" onClick={() => LogOut()}>
                <BiExit className="icon"/>
              </div>
            </div>
          </div>
          <div className="version">
            <span>Versão {packageJson.version}</span>
          </div>
        </div>
    </div>
  )
}