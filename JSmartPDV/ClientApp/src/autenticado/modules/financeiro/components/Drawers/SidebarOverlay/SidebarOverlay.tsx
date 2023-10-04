import { useEffect, useRef } from 'react';
import { NavigationMenu } from '../../Menu/Menu';
import './style.css'
export default function SidebarOverlay({open,close}:{open: boolean,close(): void;}) {
  const sidebarOverlayRef = useRef(null); // Crie uma referência para o elemento sidebar-overlay

  useEffect(() => {
    function handleClickOutside(event: any) {
      // Verifique se o clique não ocorreu dentro do elemento sidebar-overlay
      if (sidebarOverlayRef.current && event.target === sidebarOverlayRef.current) {
        close(); // Feche a barra lateral apenas se o clique for no elemento sidebar-overlay
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [close]);
  return (
    <div className={'sidebar-overlay-fin ' + (!open ? 'open' : '')} ref={sidebarOverlayRef}>
        <div className="sidebar">
          <div className="top">
            <NavigationMenu fechaDrawer={() => close()}/>
          </div>
          <div className="bottom">
            <div className="left">
              <span className='nome'>Luan Rodrigues Ribeiro</span>
              <span className='role'>Administrador</span>
            </div>
          </div>
        </div>
    </div>
  )
}
