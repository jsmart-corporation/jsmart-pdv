import React, { MouseEventHandler, useContext, useEffect, useState } from 'react'
import { BiBarcodeReader } from 'react-icons/bi'
import { JSTextFieldLarge } from '../../../../../JSCommon/Components/JSTextField'
import './style.css'
import { HiPlus } from 'react-icons/hi'
import { CircularProgress } from '@mui/material'
import { Produto } from '../../../../../Common/Interfaces'
import { maskCurrency } from '../../../../../Utils/Formatacoes'
import { useProdutosRecomendados } from '../../../../../Common/Services/Swr/SwrServices'
import Logo from '../../../../../assets/LogoMarca.svg'
import LogoMiddle from '../../../../../assets/Logo.svg'

import moment from 'moment'
import ScanCodBarra from '../../../../../JSCommon/Components/ScanCodBarra'
import { GetProdutoCodigoBarraAsync } from '../../../../../Common/Services/Axios/ProdutoServices'
import { TransacaoContext } from '../../../../../Common/Context/TransacaoContext'
export default function ItensConsulta() {
    const {recomendados,isRecomendadosLoading} = useProdutosRecomendados()
    const [qtd,setQtd] = useState<number>(1)
    const [inputValue, setInputValue] = useState('');
    const [pesquisa,setPesquisa] = useState('')
    const {AdicionaItem} = useContext(TransacaoContext);

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const intervalID = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => {
        clearInterval(intervalID);
      };
    }, []);

    useEffect(() => {
        const handleKeyPress = (event: any) => {
          const key = event.key;
          
          if (/^[0-9]$/.test(key)) {
            setInputValue(inputValue + key);
          } else if (key === 'x') {
            if (inputValue !== '' && parseInt(inputValue) > 0) {
              setQtd(parseInt(inputValue, 10));
              setInputValue('');
              setPesquisa('')
            }
          }else if(key === 'Escape'){
            setInputValue('')
            setQtd(1);
          }
        };
    
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, [inputValue]);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setInputValue('');
        }, 1000);
    
        return () => {
          clearTimeout(timer);
        };
      }, [inputValue]);
  const BuscarProdutoCodigoBarra = async (resultado: string) => {
    console.log(resultado + " Result")
    try{
      let response = await GetProdutoCodigoBarraAsync(resultado)
      setPesquisa('')
      AdicionaItemTransacao(response,qtd)
      setInputValue('')
      console.log(response)
    }finally{

    }
  }

  

  const AdicionaItemTransacao = (item: Produto,quantidade: number) => {
    AdicionaItem(
      {
        id: item.id,
        descricao: item.nome,
        valor: item.valorUnidade * quantidade,
        quantidade: quantidade,
        valorUn: item.valorUnidade,
      }
    )
    if(qtd !== 1){
      setQtd(1)
    }
  }
  return (
    <div className='itens-consulta'>
      <ScanCodBarra OnScan={(x) => BuscarProdutoCodigoBarra(x)} deps={qtd} refreshTime={50}/>
      <div className="top">
        <JSTextFieldLarge 
        fullWidth
        onKeyDown={(e) => e.key === "Enter" && pesquisa !== "" ? null : null}
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder='Aguardando leitura do código de barras'
         InputProps={{
            startAdornment: (
              <div className='container-input'><BiBarcodeReader className="icon-filtro"/>{qtd > 1 && <div className='quantidade'><span>{qtd}x</span></div>}</div>
            ),
            endAdornment: (
                <React.Fragment> 
                  {pesquisa && <div className='button-add p-ripple' onClick={() => null}><HiPlus className="icon"/></div>}
                </React.Fragment>
            ),
        }}
      />
      </div>
      {isRecomendadosLoading ?
        <div className="loading-container" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',flex: 1}}>
          <CircularProgress sx={{color: 'var(--green)'}}/>
        </div> 
        :
        <div className="middle">
          <div className="logo">
              <img src={LogoMiddle} alt="" />
            </div>
          <div className="middle-content">
            
              { recomendados?.map((x: any) => <ProdutosRecomendados key={x.id} produto={x} onClick={() => AdicionaItemTransacao(x,qtd)}/>)}
          </div>
        </div>
        
      }
      <div className="bottom">
            <img src={Logo} />
            <span>{moment(time).format('HH:mm')}</span>
      </div>
    </div>
  )
}
const ProdutosRecomendados = ({produto,onClick}:{produto: Produto,onClick: MouseEventHandler<HTMLDivElement>}) => {
  
  return(
    <div className="recomendados-card p-ripple" onClick={onClick}>
      <div className="image-content">
        {produto.imagem && <img src={'data:image/jpeg;base64,'+produto.imagem} alt="" />}
      </div>
      <div className="labels">
        <div className="item-elips" >
          <span className='desc'>{produto.nome}</span>
        </div>
        
        <span className='valor'>{maskCurrency(produto.valorUnidade)}</span>
      </div>
    </div>
  )
}