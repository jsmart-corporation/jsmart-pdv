import { Box, Checkbox, Chip, Dialog, FormControlLabel, InputLabel, ListItemText, MenuItem, OutlinedInput, Paper, PaperProps,  Select,  SelectChangeEvent,  Slide, Tab} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { useContext, useEffect, useRef, useState } from 'react'
import {IoClose} from 'react-icons/io5'
import './style.css'
import { JSTextChips, JSTextField } from '../../../../../JSCommon/Components/JSTextField';
import { Produto } from '../../../../../Common/Interfaces';
import { LoadingDialogContext } from '../../../../../JSCommon/Dialogs/LoadingDialog/LoadingDialogContext';
import { FaTrashAlt } from 'react-icons/fa';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext, TabList } from '@mui/lab';
import { JSSelect } from '../../../../../JSCommon/Components/JSSelect';
import { FormatarDecimal, FormatarInteiro, FormatarPorcentagem, maskCurrency, maskPercent, removerLetrasEPontos, removerLetrasEPontosNegativo } from '../../../../../Utils/Formatacoes';
import { taxcfop, taxorigin, taxsituation, taxsituationPISCOFINS } from '../../../../../Common/Containts/ListasFiscal';
import { live, notify, types, unit } from '../../../../../Common/Containts/ListasDrowDown';
import { useCategorias } from '../../../../../Common/Services/Swr/SwrServices';
import { AiFillInfoCircle, AiOutlineUpload } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { DeleteProdutoAsync, PatchProdutoAsync, PostProdutoAsync } from '../../../../../Common/Services/Axios/ProdutoServices';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function PaperComponent(props: PaperProps) {
  return (
      <Paper {...props} />  
  );
}

interface IPropsData{
  aberto: boolean,
  produtoEditar: Produto | null,
  onClose(): void;
  onPost?(value: Produto) :void;
  onEdit?(value: Produto) :void;
  onRemove?(value: Produto) :void;
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export default function NovoProduto({aberto,produtoEditar,onClose,onPost,onEdit,onRemove}: IPropsData) {
  const [tab, setTab] = React.useState('1');
  const [descricao,setDescricao] = useState<string>('Novo Produto');
  const [codigoBarras,setCodigoBarras] = useState<string>('');
  const [precoUnidade,setPrecoUnidade] = useState<string>('0.00');
  const [precoCusto,setPrecoCusto] = useState<string>('0.00');
  const [estoqueAtual,setEstoqueAtual] = useState<string>('150');
  const [estoqueMinimo,setEstoqueMinimo] = useState<string>('0');
  const [cest,setCest] = useState<string>('00000000');
  const [codBeneficioFiscal,setCodBeneficioFiscal] = useState<string>('0');
  const [ncm,setNcm] = useState<string>('00000000');
  const [aliqTransparencia,setAliqTransparencia] = useState<string>('0.00');
  const [aliqIcms,setAliqIcms] = useState<string>('0.00');
  const [reducBcIcms,setReducBcIcms] = useState<string>('0.00');
  const [aliqPis,setAliqPis] = useState<string>('0.00');
  const [aliqCofins,setAliqCofins] = useState<string>('0.00');
  const [origin,setOrigin] = useState<string>('0');
  const [cfop,setCfop] = useState<string>('5101');
  const [situacaoTributaria,setSituacaoTributaria] = useState<string>('400');
  const [situacaoTributariaPis,setSituacaoTributariaPis] = useState<string>('08');
  const [situacaoTributariaCofins,setSituacaoTributariaCofins] = useState<string>('08');
  const [tipo,setTipo] = useState<number>(0);
  const [unidade,setUnidade] = useState<string>('und');
  const [categoria,setCategoria] = useState<number>(0);
  const [insumos, setInsumos] = React.useState<string[]>([])
  const [codigoBalanca,setCodigoBalanca] = useState<string>('0');
  const [imagem,setImagem] = React.useState<string | null>(null)
  const [notificarImpressao, setNotificarImpressao] = React.useState<string[]>([]);
  const [notificarInstantaneamente, setNotificarInstantaneamente] = React.useState<string[]>([]);
  const [agrupavel, setAgrupavel] = React.useState<boolean>(true);
  const [recomendado, setRecomendado] = React.useState<boolean>(false);
  
  const {AbrirDialogoLoading,FechaDialogoLoading} = useContext(LoadingDialogContext)
  const {categorias,isLoading} = useCategorias();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = () => {
    if(fileInputRef == null) return;
    fileInputRef?.current?.click();
  };
  const handleFileChange = (event:any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        let base = base64Image.split(';base64,').pop();
        console.log(base)
        // Faça algo com a imagem em base64 (por exemplo, exibir ou enviar para o servidor)
        setImagem(base);
      };
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    if(!aberto){
      LimpaCampos()
    }
    if(produtoEditar){
      EditaCampos();
    }
  },[produtoEditar,aberto])

  const LimpaCampos = () => {
    setTab('1');
    setDescricao('Novo Produto');
    setCodigoBarras('');
    setPrecoUnidade('0.00');
    setPrecoCusto('0.00');
    setEstoqueAtual('150');
    setEstoqueMinimo('0');
    setCest('00000000');
    setCodBeneficioFiscal('0');
    setNcm('00000000');
    setAliqTransparencia('0.00');
    setAliqIcms('0.00');
    setReducBcIcms('0.00');
    setAliqPis('0.00');
    setAliqCofins('0.00');
    setOrigin('0');
    setCfop('5101');
    setSituacaoTributaria('400');
    setSituacaoTributariaPis('08');
    setSituacaoTributariaCofins('08');
    setTipo(0);
    setUnidade('und');
    setCategoria(0);
    setInsumos([]);
    setCodigoBalanca('0');
    setImagem(null);
    setNotificarImpressao([]);
    setNotificarInstantaneamente([]);
    setAgrupavel(true);
    setRecomendado(false);
  };
  const EditaCampos = () => {
    if(!produtoEditar) return;
    setDescricao(produtoEditar?.nome)
    setCodigoBarras(produtoEditar?.codigo?? '');
    setPrecoUnidade(produtoEditar?.valorUnidade.toString());
    setPrecoCusto(produtoEditar?.precoCusto?.toString()?? '0.00');
    setEstoqueAtual(produtoEditar?.estoqueAtual.toString());
    setEstoqueMinimo(produtoEditar?.minEstoque.toString());
    setCest(produtoEditar?.cest.toString());
    setCodBeneficioFiscal(produtoEditar?.codBeneficio?.toString()?? '0');
    setNcm(produtoEditar?.ncm.toString());
    setAliqTransparencia(produtoEditar?.aliquotaTranspacencia?.toString()?? '0.00');
    setAliqIcms(produtoEditar?.aliquotaICMS?.toString()?? '0.00');
    setReducBcIcms(produtoEditar?.reducIcms?.toString()?? '0.00');
    setAliqPis(produtoEditar?.aliquotaPis?.toString()?? '0.00');
    setAliqCofins(produtoEditar?.aliquotaCOFINS?.toString()?? '0.00');
    setOrigin(produtoEditar?.origin);
    setCfop(produtoEditar?.cfop);
    setSituacaoTributaria(produtoEditar?.situacaoTributaria);
    setSituacaoTributariaPis(produtoEditar?.situacaoTributariaPIS);
    setSituacaoTributariaCofins(produtoEditar?.situacaoTributariaCOFINS);
    setTipo(produtoEditar?.tipoProduto);
    setUnidade(produtoEditar?.tipoEstoque);
    setCategoria(produtoEditar?.categoriaId?? 0);
    setInsumos(JSON.parse(produtoEditar?.insumos?? ""));
    setCodigoBalanca(produtoEditar?.codBalanca?? '');
    setImagem(produtoEditar?.imagem?? null);
    setNotificarImpressao(JSON.parse(produtoEditar?.notificarImpressao?? ""));
    setNotificarInstantaneamente(JSON.parse(produtoEditar?.notificarLive?? ""));
    setAgrupavel(produtoEditar?.agrupavel?? true);
    setRecomendado(produtoEditar?.recomendado?? true);
  }

  const verify = () => {
    let status = true;
    if(descricao == ""){
      status = false;
    }
    return status;
  }
  const PostContaBancaria = async() => {
    let produtoDTO:Produto = {
      id: 0,
      cest: cest,
      cfop: cfop,
      insumos: JSON.stringify(insumos),
      minEstoque: parseFloat(estoqueMinimo),
      ncm: ncm,
      nome: descricao,
      notificarImpressao: JSON.stringify(notificarImpressao),
      notificarLive: JSON.stringify(notificarInstantaneamente),
      origin: origin,
      estoqueAtual: estoqueAtual !== "" ? parseFloat(estoqueAtual) : 0,
      situacaoTributaria: situacaoTributaria,
      situacaoTributariaCOFINS: situacaoTributariaCofins,
      situacaoTributariaPIS: situacaoTributariaPis,
      tipoEstoque: unidade,
      tipoProduto: tipo,
      valorUnidade: parseFloat(precoUnidade),
      agrupavel: agrupavel,
      aliquotaCOFINS: parseInt(aliqCofins),
      aliquotaICMS: parseInt(aliqIcms),
      aliquotaPis: parseInt(aliqPis),
      aliquotaTranspacencia: parseInt(aliqTransparencia),
      categoriaId: categoria === 0 ? null : categoria,
      codBalanca: codigoBalanca,
      codigo: codigoBarras,
      reducIcms: parseInt(reducBcIcms),
      imagem: imagem,
      precoCusto: parseInt(precoCusto),
      codBeneficio: parseInt(codBeneficioFiscal),
      recomendado: recomendado,
    }
    AbrirDialogoLoading("Inserindo...")
    try{
      let result = await PostProdutoAsync(produtoDTO)
      onPost!(result)
    }finally{
      FechaDialogoLoading()
    }
  }
  const PatchContaBancaria = async() => {
    let produtoDTO:Produto = {
      id: produtoEditar?.id?? 0,
      cest: cest,
      cfop: cfop,
      insumos: JSON.stringify(insumos),
      minEstoque: parseFloat(estoqueMinimo),
      ncm: ncm,
      nome: descricao,
      notificarImpressao: JSON.stringify(notificarImpressao),
      notificarLive: JSON.stringify(notificarInstantaneamente),
      origin: origin,
      estoqueAtual: (estoqueAtual !== "" && estoqueAtual !== "-") ? parseFloat(estoqueAtual) : 0,
      situacaoTributaria: situacaoTributaria,
      situacaoTributariaCOFINS: situacaoTributariaCofins,
      situacaoTributariaPIS: situacaoTributariaPis,
      tipoEstoque: unidade,
      tipoProduto: tipo,
      valorUnidade: parseFloat(precoUnidade),
      agrupavel: agrupavel,
      aliquotaCOFINS: parseInt(aliqCofins),
      aliquotaICMS: parseInt(aliqIcms),
      aliquotaPis: parseInt(aliqPis),
      aliquotaTranspacencia: parseInt(aliqTransparencia),
      categoriaId: categoria === 0 ? null : categoria,
      codBalanca: codigoBalanca,
      codigo: codigoBarras,
      reducIcms: parseInt(reducBcIcms),
      imagem: imagem,
      precoCusto: parseInt(precoCusto),
      codBeneficio: parseInt(codBeneficioFiscal),
      criadoEm: produtoEditar?.criadoEm,
      deletadoEm: produtoEditar?.deletadoEm,
      deletado: produtoEditar?.deletado,
      recomendado: recomendado,

    }
    AbrirDialogoLoading("Editando...")
    try{
      let result = await PatchProdutoAsync(produtoDTO)
      onEdit!(result)
    }finally{
      FechaDialogoLoading()
    }
  }
  const DeleteContaBancaria = async() => {
    
    AbrirDialogoLoading("Removendo...")
    try{
      let result = await DeleteProdutoAsync(produtoEditar?.id?? 0)
      onRemove!(result)
    }finally{
      FechaDialogoLoading()
    }
  }
  
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const handleChangeNotificarImpressao = (event: SelectChangeEvent<typeof notificarImpressao>) => {
    const {
      target: { value },
    } = event;
    setNotificarImpressao(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleChangeNotificarInstantaneamente = (event: SelectChangeEvent<typeof notificarImpressao>) => {
    const {
      target: { value },
    } = event;
    setNotificarInstantaneamente(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <Dialog
        open={aberto}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="md"
        PaperComponent={PaperComponent}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="nova-produto">
          <div className="header">
            <span>{produtoEditar ? "Editar Produto" : "Novo Produto"}</span>
            <div className="button-close" onClick={() => onClose()}>
              <IoClose/>
            </div>
          </div>
          <div className="middle">
            <div className="bottom">
              <JSTextField value={descricao} onChange={(x: any) => setDescricao(x.target.value)} label="Descricao" fullWidth/>
              <JSTextField value={codigoBarras} onChange={(x: any) => setCodigoBarras(removerLetrasEPontos(x.target.value))} label="Codigo de Barras" sx={{maxWidth: 250}} fullWidth/>
            </div>
            <div className="bottom">
              <JSSelect fullWidth>
                <InputLabel id="conta-destino">Tipo do Produto</InputLabel>
                <Select
                  labelId="conta-destino"
                  id="conta-destino-select"
                  value={tipo}
                  defaultValue={null}
                  placeholder="Tipo do Produto"
                  label="Tipo do Produto"
                  onChange={(x) => setTipo(parseInt(x.target.value as string)?? 0)}
                >
                  {types.map(x => <MenuItem key={x.code} value={x.code}>{x.name}</MenuItem>)}
                </Select>
              </JSSelect>
              <JSTextField value={maskCurrency(precoUnidade)} onChange={(x: any) => setPrecoUnidade(FormatarDecimal(x.target.value))} label="Preço por Unidade" sx={{maxWidth: 200}} fullWidth/>
              <JSTextField value={maskCurrency(precoCusto)} onChange={(x: any) => setPrecoCusto(FormatarDecimal(x.target.value))} label="Preço de Custo" sx={{maxWidth: 200}} fullWidth/>
            </div>
            <div className="bottom">
              <JSSelect fullWidth>
                <InputLabel id="conta-destino">Categoria</InputLabel>
                <Select
                  labelId="conta-destino"
                  id="conta-destino-select"
                  value={categoria}
                  disabled={isLoading}
                  placeholder="Categoria"
                  label="Categoria"
                  onChange={(x) => setCategoria(parseInt(x.target.value as string)?? 0)}
                >
                  <MenuItem value={0} style={{display: 'none'}} disabled>
                    <em>Selecionar</em>
                  </MenuItem>
                  {categorias?.map(x => <MenuItem value={x.id} key={x.id}>{x.descricao}</MenuItem>)}
                </Select>
              </JSSelect>
              <JSSelect fullWidth>
                <InputLabel id="conta-destino">Tipo de Estoque</InputLabel>
                <Select
                  labelId="conta-destino"
                  id="conta-destino-select"
                  value={unidade}
                  defaultValue={null}
                  placeholder="Tipo de Estoque"
                  label="Tipo de Estoque"
                  onChange={(x) => setUnidade(x.target.value as string)}
                >
                {unit.map(x => <MenuItem key={x.code} value={x.code}>{x.name}</MenuItem>)}

                </Select>
              </JSSelect>
              <JSTextField value={estoqueAtual} onChange={(x: any) => setEstoqueAtual(removerLetrasEPontosNegativo(x.target.value))} label="Estoque Atual" sx={{maxWidth: 180}} fullWidth/>
              <JSTextField value={estoqueMinimo} onChange={(x: any) => setEstoqueMinimo(FormatarInteiro(x.target.value))} label="Estoque Minimo" sx={{maxWidth: 180}} fullWidth/>
            </div>
          </div>
          <div className="tabs">
          <TabContext value={tab}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
              <Tab label="FISCAL" value="1" />
              <Tab label="ICMS" value="2" />
              <Tab label="PIS/COFINS" value="3" />
              <Tab label="INSUMOS" value="4" />
              <Tab label="OUTROS" value="5" />
            </TabList>
            <TabPanel value="1">
              <div className="tab">
                <div className="item-group">
                  <JSTextField value={ncm} onChange={(x: any) => setNcm(removerLetrasEPontos(x.target.value))} fullWidth label="NCM"/>
                  <JSTextField value={cest} onChange={(x: any) => setCest(removerLetrasEPontos(x.target.value))}fullWidth label="CEST"/>
                </div>
                <div className="item-group">
                  <JSTextField value={maskPercent(aliqTransparencia)} onChange={(x: any) => setAliqTransparencia(FormatarPorcentagem(x.target.value))} fullWidth label="Aliq. Transparência (%)"/>
                  <JSTextField value={codBeneficioFiscal} onChange={(x: any) => setCodBeneficioFiscal(FormatarInteiro(x.target.value))} fullWidth label="Cód Benefício Fiscal"/>
                </div>
              </div>
              </TabPanel>
            <TabPanel value="2">
              <div className="tab">
                <div className="item-group">
                  <JSSelect fullWidth>
                    <InputLabel id="conta-destino">Origin</InputLabel>
                    <Select
                      labelId="conta-destino"
                      id="conta-destino-select"
                      value={origin}
                      defaultValue={null}
                      placeholder="Origin"
                      label="Origin"
                      onChange={(x) => setOrigin(x.target.value as string)}
                    >
                    {taxorigin.map(x => <MenuItem key={x.code} value={x.code}>{x.name}</MenuItem>)}
                    </Select>
                  </JSSelect>
                </div>
                <div className="item-group">
                <JSSelect fullWidth>
                    <InputLabel id="conta-destino">CFOP</InputLabel>
                    <Select
                      labelId="conta-destino"
                      id="conta-destino-select"
                      value={cfop}
                      placeholder="CFOP"
                      label="CFOP"
                      onChange={(x) => setCfop(x.target.value as string)}
                    >
                      {taxcfop.map(x => <MenuItem key={x.code} value={x.code}>{x.name}</MenuItem>)}

                    </Select>
                  </JSSelect>
                  <JSTextField value={maskPercent(aliqIcms)} onChange={(x: any) => setAliqIcms(FormatarPorcentagem(x.target.value))} sx={{maxWidth: 200}} fullWidth label="Aliq. ICMS (%)"/>
                </div>
                <div className="item-group">
                <JSSelect fullWidth>
                    <InputLabel id="conta-destino">Situação Tributária</InputLabel>
                    <Select
                      labelId="conta-destino"
                      id="conta-destino-select"
                      value={situacaoTributaria}
                      defaultValue={null}
                      placeholder="Situação Tributária"
                      label="Situação Tributária"
                      onChange={(x) => setSituacaoTributaria(x.target.value as string)}
                    >
                      {taxsituation.map(x => <MenuItem key={x.code} value={x.code}>{x.name}</MenuItem>)}

                    </Select>
                  </JSSelect>
                  <JSTextField value={maskPercent(reducBcIcms)} onChange={(x: any) => setReducBcIcms(FormatarPorcentagem(x.target.value))} fullWidth sx={{maxWidth: 200}} label="Reduc BC ICMS (%)"/>
                </div>
              </div>
              </TabPanel>
            <TabPanel value="3"><div className="tab"> 
                <div className="item-group">
                  <JSSelect fullWidth>
                    <InputLabel id="conta-destino">Situação Tributária PIS</InputLabel>
                    <Select
                      labelId="conta-destino"
                      id="conta-destino-select"
                      value={situacaoTributariaPis}
                      defaultValue={null}
                      placeholder="Pessoa"
                      label="Situação Tributária PIS"
                      onChange={(x) => setSituacaoTributariaPis(x.target.value as string)}
                    >
                      {taxsituationPISCOFINS.map(x => <MenuItem key={x.code} value={x.code}>{x.name}</MenuItem>)}
                    </Select>
                  </JSSelect>
                  <JSTextField value={maskPercent(aliqPis)} onChange={(x: any) => setAliqPis(FormatarPorcentagem(x.target.value))} fullWidth sx={{maxWidth: 300}} label="Aliq. PIS (%)"/>
                </div>
                <div className="item-group">
                  <JSSelect fullWidth>
                    <InputLabel id="conta-destino">Situação Tributária COFINS</InputLabel>
                    <Select
                      labelId="conta-destino"
                      id="conta-destino-select"
                      value={situacaoTributariaCofins}
                      defaultValue={null}
                      placeholder="Pessoa"
                      label="Situação Tributária COFINS"
                      onChange={(x) => setSituacaoTributariaCofins(x.target.value as string)}
                    >
                      {taxsituationPISCOFINS.map(x => <MenuItem key={x.code} value={x.code}>{x.name}</MenuItem>)}
                    </Select>
                  </JSSelect>
                  <JSTextField value={maskPercent(aliqCofins)} onChange={(x: any) => setAliqCofins(FormatarPorcentagem(x.target.value))} fullWidth sx={{maxWidth: 300}} label="Aliq. COFINS (%)"/>
                </div>
              </div></TabPanel>
              <TabPanel value='4'>
                  <div className="insumo-tab">
                    <div className="info">
                      <AiFillInfoCircle className="icon"/>
                      <span>Sómente utilizado no modo de venda "Listas"</span>
                    </div>
                    <JSTextChips value={insumos} onChange={(x) => setInsumos(x)} label="Insumos" fullWidth placeholder='Escreva e pressione ENTER'/>
                  </div>
              </TabPanel>
              <TabPanel value='5'>
                  <div className="outros">
                    <div className="left">
                        <div className="row">
                          <JSSelect fullWidth>
                            <InputLabel id="conta-destino">Notificar por Impressão</InputLabel>
                            <Select
                              labelId="conta-destino"
                              id="conta-destino-select"
                              value={notificarImpressao}
                              multiple
                              onChange={handleChangeNotificarImpressao}
                              input={<OutlinedInput placeholder='Notificar por Impressão' label="Notificar por Impressão" />}
                              renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                  {selected.map((x:any) => (
                                    <Chip key={x} label={notify.find(y => y.code === parseInt(x))?.name} />
                                  ))}
                                </Box>
                              )}
                              MenuProps={MenuProps}
                            >
                             {notify.map((x) => (
                                <MenuItem key={x.name} value={x.code.toString()}>
                                  <Checkbox checked={notificarImpressao.indexOf(x.code.toString()) > -1} />
                                  <ListItemText primary={x.name} />
                                </MenuItem>
                              ))}
                            </Select>
                          </JSSelect>
                        </div>
                        <div className="row">
                        <JSSelect fullWidth>
                            <InputLabel id="conta-destino">Notificar Instantaneamente</InputLabel>
                            <Select
                              labelId="conta-destino"
                              id="conta-destino-select"
                              value={notificarInstantaneamente}
                              multiple
                              onChange={handleChangeNotificarInstantaneamente}
                              input={<OutlinedInput placeholder='Notificar Instantaneamente' label="Notificar Instantaneamente" />}
                              renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                  {selected.map((x:any) => (
                                    <Chip key={x} label={live.find(y => y.code === parseInt(x))?.name} />
                                  ))}
                                </Box>
                              )}
                              MenuProps={MenuProps}
                            >
                             {live.map((x) => (
                                <MenuItem key={x.name} value={x.code.toString()}>
                                  <Checkbox checked={notificarInstantaneamente.indexOf(x.code.toString()) > -1} />
                                  <ListItemText primary={x.name} />
                                </MenuItem>
                              ))}
                            </Select>
                          </JSSelect>
                        </div>
                        <div className="row">
                          <JSTextField value={codigoBalanca} onChange={(x: any) => setCodigoBalanca(FormatarInteiro(x.target.value))} fullWidth sx={{maxWidth: 300}} label="Código na Balança"/>
                          <FormControlLabel checked={agrupavel}  control={<Checkbox  onChange={(x: React.ChangeEvent<HTMLInputElement>) => setAgrupavel(x.target.checked)} />} label="Item Agrupavel" />
                          <FormControlLabel checked={recomendado}  control={<Checkbox  onChange={(x: React.ChangeEvent<HTMLInputElement>) => setRecomendado(x.target.checked)} />} label="Recomendado" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="image-content">
                          {imagem ? <img src={`data:image/jpeg;base64,${imagem}`} alt='Imagem'/> :
                            <div className="no-img">

                            </div>
                          }
                        </div>
                        <div className={"button " + (imagem ? 'remove' : '')} onClick={() => {imagem ? setImagem(null) : handleFileSelect()}}>
                          {imagem ? 
                          <>
                            <BsFillTrashFill className="icon"/>
                            <span>Remover</span>
                          </>
                          : 
                          <>
                            <AiOutlineUpload className="icon"/>
                            <span>Imagem</span>
                          </>
                          }
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          style={{ display: 'none' }}
                          ref={fileInputRef}
                          onChange={handleFileChange}
                        />
                    </div>
                  </div>
              </TabPanel>
          </TabContext>
            
          </div>
          <div className="bottom">
             {produtoEditar
              ?  
              <div className="button-remove" onClick={() => DeleteContaBancaria()}>
                <FaTrashAlt className="icon"/>
              </div>
              : 
              <div></div>}
              <div className={"button-salvar " + (!verify() ? 'disabled' : '')} onClick={() => {produtoEditar ? PatchContaBancaria() : PostContaBancaria()}}>
                <span>{produtoEditar ? "Editar" : "Salvar"}</span>
              </div>
          </div>
        </div>
      </Dialog>
  )
}
