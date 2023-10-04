import { MouseEventHandler, useContext, useEffect, useState } from 'react'
import './style.css'
import { CircularProgress } from '@mui/material'
import {JSTextFieldLarge } from '../../../../../../UniversalComponents/MUI/TextField/CTextField'
import {BiBarcodeReader} from 'react-icons/bi'
import {HiPlus} from 'react-icons/hi'
import { Ripple } from 'primereact/ripple'
import Logo from '../../../../../../assets/LogoMarca.svg'
import LogoMiddle from '../../../../../../assets/Logo.svg'
import * as AxiosServices from '../../../services/axiosservices/AXIOSService'
import * as SwrServices from '../../../services/swrservices/SWRServices'
import * as Interfaces from '../../../interfaces/Interface'
import * as PDVServices from '../../../contexts/PDVServices'
import React from 'react'
import { maskCurrency, removerLetrasEPontos } from '../../../../../../common/utils'
import ScanCodBarra from '../../../../../../UniversalComponents/ScanCodBarra/ScanCodBarra'
import moment from 'moment'

export default function ItensConsulta() {
    const [qtd,setQtd] = useState<number>(1)
    const [inputValue, setInputValue] = useState('');
    const [pesquisa,setPesquisa] = useState('')
    const {recomendados,isRecomendadosLoading} = SwrServices.useProdutosRecomendados()
    const [valorSelecionado, setValorSelecionado] = useState<Interfaces.Produto | null>(null);
    const {AdicionaItem} = useContext(PDVServices.TransacaoContext);

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
        if(valorSelecionado){
          AdicionaItemTransacao(valorSelecionado,qtd)
          setValorSelecionado(null)
        }
    },[valorSelecionado])
 
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

    const BuscarCodigoBarra = async (codigoBarra: string) => {
      try{
        var response:Interfaces.Produto = (await AxiosServices.ProdutoService.GetProdutoCodigoDeBarra(codigoBarra)).data;
        setPesquisa('')
        AdicionaItemTransacao(response,qtd)
        setInputValue('')
      }finally{
        
      }
    }
  
    const AdicionaItemTransacao = (item: Interfaces.Produto,quantidade: number) => {
      AdicionaItem(
        {
          id: item.id,
          descricao: item.descricao,
          valor: item.valor * quantidade,
          quantidade: quantidade,
          valorUn: item.valor,
          imagem: item.imagem
        }
      )
      if(qtd !== 1){
        setQtd(1)
      }
    }
  return (
    <div className='itens-consulta'>
      <ScanCodBarra OnScan={(x) => BuscarCodigoBarra(x)} Deps={qtd} RefreshTime={50}/>
      <div className="top">
        <JSTextFieldLarge 
        fullWidth
        onKeyDown={(e) => e.key === "Enter" && pesquisa !== "" ? BuscarCodigoBarra(pesquisa) : null}
        value={pesquisa}
        onChange={(e) => setPesquisa(removerLetrasEPontos(e.target.value))}
        placeholder='Aguardando leitura do código de barras'
         InputProps={{
            startAdornment: (
              <div className='container-input'><BiBarcodeReader className="icon-filtro"/>{qtd > 1 && <div className='quantidade'><span>{qtd}x</span></div>}</div>
            ),
            endAdornment: (
                <React.Fragment> 
                  {pesquisa && <div className='button-add p-ripple' onClick={() => BuscarCodigoBarra(pesquisa)}><HiPlus className="icon"/><Ripple/></div>}
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
        <div className="middle-content">
          <div className="logo">
            <img src={LogoMiddle} alt="" />
          </div>
         { recomendados?.map((x: any) => <ProdutosRecomendados key={x.id} produto={x} onClick={() => AdicionaItemTransacao(x,qtd)}/>)}
        </div>
      }
      <div className="bottom">
            <img src={Logo} />
            <span>{moment(time).format('HH:mm')}</span>
      </div>
    </div>
  )
}


const ProdutosRecomendados = ({produto,onClick}:{produto: Interfaces.Produto,onClick: MouseEventHandler<HTMLDivElement>}) => {
  
    return(
      <div className="recomendados-card p-ripple" onClick={onClick}>
        <div className="image-content">
          <img src={'data:image/webp;base64,'+produto.imagem} alt="" />
        </div>
        <div className="labels">
          <span className='desc'>{produto.descricao}</span>
          <span className='valor'>{maskCurrency(produto.valor)}</span>
        </div>
        <Ripple/>
      </div>
    )
}