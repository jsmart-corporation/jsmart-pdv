import { useContext, useEffect, useRef } from 'react';
import './style.css'
import { GeralContext } from '../../../../Common/Context/GeralContext';
import { NavigationMenu } from '../MenuSidebar/MenuSidebar';
export default function Sidebar({open,close}:{open: boolean,close(): void;}) {
    const {user} = useContext(GeralContext)
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
  return (
    <div className={'sidebar-overlay-admin ' + (!open ? 'open' : '')} ref={sidebarOverlayRef}>
        <div className="sidebar">
          <div className="top">
            <NavigationMenu fechaDrawer={() => close()}/>
          </div>
          <div className="bottom">
            <div className="left">
              <span className='nome'>{user?.name}</span>
              <span className='role'>Administrador</span>
            </div>
          </div>
        </div>
    </div>
  )
}