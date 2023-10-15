import React, { MouseEventHandler, useEffect, useRef } from 'react'
import CaixaAnim from '../../../../assets/CaixaSVG.json'
import lottie from 'lottie-web';
import './style.css'
export default function CaixaSVG({onClick}: {onClick: MouseEventHandler<HTMLDivElement>}) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef.current) {
          lottie.loadAnimation({
            container: containerRef.current,
            animationData: CaixaAnim,
            renderer: 'svg',
            loop: true,
            autoplay: true,
          });
        }
      }, []);
  return (
    <React.Fragment>
        <div className="abrir-caixa">
            <div ref={containerRef} style={{ width: '300px', height: '300px' }}/>
            <div className="button-abrir-caixa" onClick={onClick}>
                <span>Abrir Caixa</span>
            </div>
        </div> 
    </React.Fragment>
    
  )
}
