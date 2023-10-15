import { Dialog, Paper, PaperProps,  Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { useContext, useEffect, useState } from 'react'
import {IoClose} from 'react-icons/io5'
import './style.css'
import { JSTextField } from '../../../../../JSCommon/Components/JSTextField';
import {  ICategoria } from '../../../../../Common/Interfaces';
import { LoadingDialogContext } from '../../../../../JSCommon/Dialogs/LoadingDialog/LoadingDialogContext';
import { FaTrashAlt } from 'react-icons/fa';
import { DeleteCategoriaAsync, PatchCategoriaAsync, PostCategoriaAsync } from '../../../../../Common/Services/Axios/CategoriaServices';

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
  categoriaEditar: ICategoria | null,
  onClose(): void;
  onPost?(value: ICategoria) :void;
  onEdit?(value: ICategoria) :void;
  onRemove?(value: ICategoria) :void;
}

export default function NovaCategoria({aberto,categoriaEditar,onClose,onPost,onEdit,onRemove}: IPropsData) {
  const [descricao,setDescricao] = useState<string>('');

  const {AbrirDialogoLoading,FechaDialogoLoading} = useContext(LoadingDialogContext)
  useEffect(() => {
    if(!aberto){
      LimpaCampos()
    }
    if(categoriaEditar){
      EditaCampos();
    }
  },[categoriaEditar,aberto])

  const LimpaCampos = () => {
    setDescricao('')

  }
  const EditaCampos = () => {
    if(!categoriaEditar) return;
    setDescricao(categoriaEditar?.descricao)

  }

  const verify = () => {
    let status = true;
    if(descricao == ""){
      status = false;
    }
    return status;
  }
  const PostContaBancaria = async() => {
    let categoriaDto: ICategoria = {
      id: 0,
      descricao: descricao,
    }
    AbrirDialogoLoading("Inserindo...")
    try{
      let result = await PostCategoriaAsync(categoriaDto)
      onPost!(result)
    }finally{
      FechaDialogoLoading()
    }
  }
  const PatchContaBancaria = async() => {
    let categoriaDto: ICategoria = {
      id: categoriaEditar?.id?? 0,
      descricao: descricao,
    }
    AbrirDialogoLoading("Editando...")
    try{
      let result = await PatchCategoriaAsync(categoriaDto)
      onEdit!(result)
    }finally{
      FechaDialogoLoading()
    }
  }
  const DeleteContaBancaria = async() => {
    
    AbrirDialogoLoading("Removendo...")
    try{
      let result = await DeleteCategoriaAsync(categoriaEditar?.id?? 0)
      onRemove!(result)
    }finally{
      FechaDialogoLoading()
    }
  }
  return (
    <Dialog
        open={aberto}
        TransitionComponent={Transition}
        keepMounted
        PaperComponent={PaperComponent}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="nova-conta-bancaria">
          <div className="header">
            <span>{categoriaEditar ? "Editar Categoria" : "Categorias"}</span>
            <div className="button-close" onClick={() => onClose()}>
              <IoClose/>
            </div>
          </div>
          <div className="middle">
            <div className="bottom">
              <JSTextField value={descricao} onChange={(x) => setDescricao(x.target.value)} label="Descricao" fullWidth/>
            </div>
          </div>
          <div className="bottom">
             {categoriaEditar
              ?  
              <div className="button-remove" onClick={() => DeleteContaBancaria()}>
                <FaTrashAlt className="icon"/>
              </div>
              : 
              <div></div>}
              <div className={"button-salvar " + (!verify() ? 'disabled' : '')} onClick={() => {categoriaEditar ? PatchContaBancaria() : PostContaBancaria()}}>
                <span>{categoriaEditar ? "Editar" : "Salvar"}</span>
              </div>
          </div>
        </div>
      </Dialog>
  )
}
