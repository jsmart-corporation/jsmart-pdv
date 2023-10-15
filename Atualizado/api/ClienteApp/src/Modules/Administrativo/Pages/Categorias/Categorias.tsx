import JSDataGrid from '../../../../JSCommon/Components/JSDataGrid'
import "./style.css";
import { FiPlus } from "react-icons/fi";
import { CiBank } from "react-icons/ci";
import { GridColDef } from '@mui/x-data-grid';
import { AiFillEdit } from 'react-icons/ai';
import { useState } from 'react';
import { bancos } from '../../../../Common/Containts/ListasDrowDown';
import { ICategoria } from '../../../../Common/Interfaces';
import { useCategorias } from '../../../../Common/Services/Swr/SwrServices';
import NovaCategoria from '../../Components/Dialogs/NovaCategoria/NovaCategoria';

export default function Categorias() {
  const [novaCategoria,setNovaCategoria] = useState(false);
  const {categorias,isLoading,mutate} = useCategorias();
  const [categoriaEditar,setCategoriaEditar] = useState<ICategoria | null>(null)

  const columnsPayment: GridColDef[] = [
    {
      field: "descricao",
      headerName: "Categoria",
      flex: 1,
      hideable: false,
      renderCell(params) {
        return bancos.find(x => x.code === params.value)?.name;
      },
    },
    

    {
      field: "buttons",
      headerName: "",
      width: 80,
      sortable: false,
      hideable: false,
      renderCell(params) {
        return (
          <div
            className="edit-button p-ripple"
            onClick={() => {setCategoriaEditar(params.row); setNovaCategoria(true)}}
            data-pr-tooltip="Editar"
          >
            <AiFillEdit />
          </div>
        );
      },
    },
  ];
  const AddContaBancaria = (value: ICategoria) => {
    mutate([...categorias?? [],value])
    setNovaCategoria(false)
  }
  const EditarContaBancaria = (value: ICategoria) => {
    let findConta = categorias!.findIndex(x => x.id === value.id);
    let contaClone = [...categorias!];
    contaClone[findConta] = value;
    mutate(contaClone)
    setCategoriaEditar(null)
    setNovaCategoria(false)
  }
  const DeletarContaBancaria = (value: ICategoria) => {
    let findConta = categorias!.findIndex(x => x.id === value.id);
    let contaClone = [...categorias!];
    contaClone.splice(findConta,1);
    mutate(contaClone)
    setCategoriaEditar(null)
    setNovaCategoria(false)
  }
  return (
    <div className="categoria">
    <div className="top">
        <div className="left">
          <CiBank className="icon" />
          <span>Categorias</span>
        </div>
        <div className="right">
          <div
            className="button blue p-ripple"
            onClick={() => setNovaCategoria(true)}
          >
            <FiPlus />
          </div>
        </div>
      </div>
      <div
        style={{
          height: "calc(100vh - 170px)",
          width: "100%",
          padding: "0 20px",
        }}
      >
      <JSDataGrid
          rows={categorias?? []}
          columns={columnsPayment}
          disableColumnMenu
          density="compact"
          columnHeaderHeight={80}
          loading={isLoading}
          getRowId={(row) => row.id}
          disableRowSelectionOnClick
          localeText={{
            noRowsLabel: "Sem Informações",
            MuiTablePagination: {
              labelRowsPerPage: "Itens por pagina",
            },
          }}
        />
      </div>
        <NovaCategoria aberto={novaCategoria} onClose={() => {setNovaCategoria(false); categoriaEditar && setCategoriaEditar(null)}} onPost={(x) => AddContaBancaria(x)} categoriaEditar={categoriaEditar} onEdit={(x) => EditarContaBancaria(x)} onRemove={(x) => DeletarContaBancaria(x)}/>
    </div>
  )
}
