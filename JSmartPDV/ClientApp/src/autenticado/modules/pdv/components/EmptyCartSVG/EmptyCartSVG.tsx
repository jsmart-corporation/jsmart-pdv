import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web';
import EmptyCart from '../../../../../assets/EmptyCart.json'

export default function EmptyCartSVG() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef.current) {
          lottie.loadAnimation({
            container: containerRef.current,
            animationData: EmptyCart,
            renderer: 'svg',
            loop: true,
            autoplay: true,
          });
        }
      }, []);
  return (
    <div style={{display: 'flex', flexDirection: 'column', flex: 1,alignItems: 'center',justifyContent: 'center'}}>
        <div ref={containerRef} style={{ width: '300px', height: '300px' }}/>   
    </div> 
  )
}
