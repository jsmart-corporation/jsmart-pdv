import { Dialog, InputLabel, MenuItem, Paper, PaperProps,  Select,  Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { useContext, useEffect, useState } from 'react'
import {IoClose} from 'react-icons/io5'
import './style.css'
import { JSTextField } from '../../../../../JSCommon/Components/JSTextField';
import { IClientes } from '../../../../../Common/Interfaces';
import { LoadingDialogContext } from '../../../../../JSCommon/Dialogs/LoadingDialog/LoadingDialogContext';
import { FaTrashAlt } from 'react-icons/fa';
import { JSSelect } from '../../../../../JSCommon/Components/JSSelect';
import { uf } from '../../../../../Common/Containts/ListasDrowDown';
import { DeleteClienteAsync, PatchClienteAsync, PostClienteAsync } from '../../../../../Common/Services/Axios/ClienteService';
import { removerLetrasEPontos } from '../../../../../Utils/Formatacoes';

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
  clienteEditar: IClientes | null,
  onClose(): void;
  onPost?(value: IClientes) :void;
  onEdit?(value: IClientes) :void;
  onRemove?(value: IClientes) :void;
}

export default function NovoCliente({aberto,clienteEditar,onClose,onPost,onEdit,onRemove}: IPropsData) {
  const [nome,setNome] = useState<string>('');
  const [cpf,setCpf] = useState<string>('');
  const [cnpj,setCnpj] = useState<string>('');
  const [IE,setIE] = useState<string>('');
  const [IS,setIS] = useState<string>('');
  const [telefone,setTelefone] = useState<string>('');
  const [email,setEmail] = useState<string>('');
  const [cep,setCep] = useState<string>('');
  const [endereco,setEndereco] = useState<string>('');
  const [complemento,setComplemento] = useState<string>('');
  const [cidade,setCidade] = useState<string>('');
  const [bairro,setBairro] = useState<string>('');
  const [tipo,setTipo] = useState(1)
  const [pessoa,setPessoa] = useState(1)
  const [ieIsento,setIeIsento] = useState(0)
  const [UF,setUF] = useState(999)

  const {AbrirDialogoLoading,FechaDialogoLoading} = useContext(LoadingDialogContext)
  useEffect(() => {
    if(!aberto){
      LimpaCampos()
    }
    if(clienteEditar){
      EditaCampos();
    }
  },[clienteEditar,aberto])

  const LimpaCampos = () => {
    setNome('')
    setCpf('')
    setCnpj('')
    setIE('')
    setIS('')
    setTelefone('')
    setEmail('')
    setCep('')
    setEndereco(''),
    setComplemento('')
    setCidade('')
    setBairro('')
    setTipo(1)
    setPessoa(1)
    setIeIsento(0)
    setUF(999)
  }
  const EditaCampos = () => {
    if(!clienteEditar) return;
    setNome(clienteEditar?.nome)
    setCpf(clienteEditar?.cpf?? '')
    setCnpj(clienteEditar?.cnpj?? '')
    setIE(clienteEditar?.inscricaoES?? '')
    setIS(clienteEditar?.inscricaoSU?? '')
    setTelefone(clienteEditar?.telefone?? '')
    setEmail(clienteEditar?.email?? '')
    setCep(clienteEditar?.cep?? '')
    setEndereco(clienteEditar?.endereco?? ''),
    setComplemento(clienteEditar?.complemento?? '')
    setCidade(clienteEditar?.cidade?? '')
    setBairro(clienteEditar?.bairro?? '')
    setTipo(clienteEditar?.tipo?? 0)
    setPessoa(clienteEditar?.pessoa?? 0)
    setIeIsento(clienteEditar?.ieIsento?? 0)
    setUF(clienteEditar?.uf?? 999)
  }

  const verify = () => {
    let status = true;
    if(nome == ""){
      status = false;
    }
    if(cpf == "" && pessoa === 1 && cpf.length === 11){
      status = false;
    }
    if(cnpj == "" && pessoa === 2){
      status = false;
    }
    return status;
  }
  const PostContaBancaria = async() => {
    let clienteDTO: IClientes = {
      id: 0,
      ieIsento: ieIsento,
      nome: nome,
      pessoa: pessoa,
      tipo: tipo,
      bairro: bairro,
      cpf: cpf,
      cidade: cidade,
      cep: cep,
      cnpj: cnpj,
      complemento: complemento,
      email: email,
      endereco: endereco,
      inscricaoES: IE,
      inscricaoSU: IS,
      telefone: telefone,
      uf: UF === 999 ? null : UF,
    }
    console.log(UF)
    AbrirDialogoLoading("Inserindo...")
    try{
      let result = await PostClienteAsync(clienteDTO)
      onPost!(result)
    }finally{
      FechaDialogoLoading()
    }
  }
  const PatchContaBancaria = async() => {
    let clienteDTO: IClientes = {
      id: clienteEditar?.id?? 0,
      ieIsento: ieIsento,
      nome: nome,
      pessoa: pessoa,
      tipo: tipo,
      bairro: bairro,
      cpf: cpf,
      cidade: cidade,
      cep: cep,
      cnpj: cnpj,
      complemento: complemento,
      email: email,
      endereco: endereco,
      inscricaoES: IE,
      inscricaoSU: IS,
      telefone: telefone,
      uf: UF === 999 ? null : UF,
      criadoEm: clienteEditar?.criadoEm,
      deletado: clienteEditar?.deletado,
      deletadoEm: clienteEditar?.deletadoEm
    }
    AbrirDialogoLoading("Editando...")
    try{
      let result = await PatchClienteAsync(clienteDTO)
      onEdit!(result)
    }finally{
      FechaDialogoLoading()
    }
  }
  const DeleteContaBancaria = async() => {

    AbrirDialogoLoading("Removendo...")
    try{
      let result = await DeleteClienteAsync(clienteEditar?.id?? 0)
      onRemove!(result)
    }finally{
      FechaDialogoLoading()
    }
  }
  const handleChangePessoa = (e: any) => {
    setPessoa(e.target.value);
    setCpf("");
    setCnpj("");
    setIE("");
    setIS("");
    setIeIsento(0);
  };
  const handleChangeIsento = (e: any) => {
    setIeIsento(e.target.value);
    setIE("");
  };
  return (
    <Dialog
        open={aberto}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="md"
        fullWidth
        PaperComponent={PaperComponent}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="novo-cliente">
          <div className="header">
            <span>{clienteEditar ? "Editar Cliente" : "Clientes"}</span>
            <div className="button-close" onClick={() => onClose()}>
              <IoClose/>
            </div>
          </div>
          <div className="middle">
            <div className="bottom">
              <JSTextField value={nome} error={nome == ""} onChange={(x) => setNome(x.target.value)} label="Nome" fullWidth/>
              <JSSelect sx={{width: 350}}>
                <InputLabel id="conta-destino">Tipo</InputLabel>
                <Select
                  labelId="conta-destino"
                  id="conta-destino-select"
                  value={tipo}
                  defaultValue={null}
                  placeholder="Tipo"
                  label="Tipo"
                  onChange={(x) => setTipo(parseInt(x.target.value as string)?? 0)}
                >
                  <MenuItem  value={1}>
                    Cliente
                  </MenuItem>
                  <MenuItem  value={2} >
                    Empresa
                  </MenuItem>
                  <MenuItem  value={3} >
                    Fornecedor
                  </MenuItem>
                  <MenuItem  value={4} >
                    Transportadora
                  </MenuItem>

                </Select>
              </JSSelect>
            </div>
            <div className="bottom">
              <JSSelect sx={{width: 350}}>
                <InputLabel id="conta-destino">Pessoa</InputLabel>
                <Select
                  labelId="conta-destino"
                  id="conta-destino-select"
                  value={pessoa}
                  defaultValue={null}
                  placeholder="Pessoa"
                  label="Pessoa"
                  onChange={(x) => handleChangePessoa(x)}
                >
                  <MenuItem value={1} >
                    Fisica
                  </MenuItem>
                  <MenuItem value={2} >
                    Juridica
                  </MenuItem>
                </Select>
              </JSSelect>
               
              {pessoa === 1 ? <JSTextField value={cpf} error={pessoa === 1 &&  cpf.length !== 11} inputProps={{ maxLength: 11 }} onChange={(x) => setCpf(removerLetrasEPontos(x.target.value))} label="CPF" fullWidth/>  : <JSTextField value={cnpj} error={pessoa === 2 &&  cpf.length !== 14} inputProps={{ maxLength: 14 }} onChange={(x) => setCnpj(removerLetrasEPontos(x.target.value))} label="CNPJ" fullWidth/> }
            </div>
              {pessoa === 2 &&  <div className="bottom">
                <JSSelect sx={{width: 350}}>
                  <InputLabel id="conta-destino">IE Isento</InputLabel>
                  <Select
                    labelId="conta-destino"
                    id="conta-destino-select"
                    value={ieIsento}
                    defaultValue={null}
                    placeholder="IE Isento"
                    label="IE Isento"
                    onChange={(x) => handleChangeIsento(x)}
                  >
                    <MenuItem  value={0}>
                      Não
                    </MenuItem>
                    <MenuItem  value={1}>
                      Sim
                    </MenuItem>
                  </Select>
                </JSSelect>
                <JSTextField value={IE} onChange={(x) => setIE(x.target.value)} label="Inscricão Estadual" fullWidth/>  
                <JSTextField value={IS} onChange={(x) => setIS(removerLetrasEPontos(x.target.value))} label="Inscrição Suframa" fullWidth/>  
              </div>}
            <div className="bottom">
              <JSTextField value={telefone} onChange={(x) => setTelefone(removerLetrasEPontos(x.target.value))} label="Telefone" fullWidth/>  
              <JSTextField value={email} onChange={(x) => setEmail(x.target.value)} label="E-mail" fullWidth/>  
            </div>
            <div className="bottom">
              <JSTextField value={cep} onChange={(x) => setCep(removerLetrasEPontos(x.target.value))} label="CEP" fullWidth/>  
              <JSTextField value={endereco} onChange={(x) => setEndereco(x.target.value)} label="Endereço" fullWidth/>  
            </div>
            <div className="bottom">
              <JSTextField value={complemento} onChange={(x) => setComplemento(x.target.value)} label="Complemento" fullWidth/>  
            </div>
            <div className="bottom">
              <JSSelect sx={{width: 350}}>
                <InputLabel id="conta-destino">UF</InputLabel>
                <Select
                  labelId="conta-destino"
                  id="conta-destino-select"
                  value={UF}
                  placeholder="UF"
                  label="UF"
                  onChange={(x) => setUF(parseInt(x.target.value as string)?? 0)}
                >
                  <MenuItem disabled value={999} style={{display: 'none'}}>
                    <em>UF</em>
                  </MenuItem>
                  {
                    uf.map(x => <MenuItem key={x.code} value={x.code}>{x.name}</MenuItem>)
                  }
                </Select>
              </JSSelect>
              <JSTextField value={cidade} onChange={(x) => setCidade(x.target.value)} label="Cidade" fullWidth/>  
              <JSTextField value={bairro} onChange={(x) => setBairro(x.target.value)} label="Bairro" fullWidth/>  
            </div>
          </div>
          <div className="bottom">
             {clienteEditar
              ?
              <div className="button-remove" onClick={() => DeleteContaBancaria()}>
                <FaTrashAlt className="icon"/>
              </div>
              :
              <div></div>}
              <div className={"button-salvar " + (!verify() ? 'disabled' : '')} onClick={() => {clienteEditar ? PatchContaBancaria() : PostContaBancaria()}}>
                <span>{clienteEditar ? "Editar" : "Salvar"}</span>
              </div>
          </div>
        </div>
      </Dialog>
  )
}
