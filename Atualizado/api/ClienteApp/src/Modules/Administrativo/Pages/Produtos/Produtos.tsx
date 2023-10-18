import JSDataGrid from '../../../../JSCommon/Components/JSDataGrid'
import "./style.css";
import { FiPlus } from "react-icons/fi";
import { GridColDef } from '@mui/x-data-grid';
import { AiFillEdit } from 'react-icons/ai';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Produto } from '../../../../Common/Interfaces';
import { useProdutos } from '../../../../Common/Services/Swr/SwrServices';
import NovoProduto from '../../Components/Dialogs/NovoProduto/NovoProduto';
import { maskCurrency } from '../../../../Utils/Formatacoes';
import { InputAdornment } from '@mui/material';
import { JSTextField } from '../../../../JSCommon/Components/JSTextField';
import { BiBarcodeReader } from 'react-icons/bi';

export default function Produtos() {
  const [novoProduto,setNovoProduto] = useState(false);
  const {produtos,isLoading,mutate} = useProdutos();
  const [produtoEditar,setProdutoEditar] = useState<Produto | null>(null)

  const columnsPayment: GridColDef[] = [
    {
      field: "nome",
      headerName: "Produto",
      flex: 1,
      hideable: false,
      
    },
    {
      field: "categoria",
      headerName: "Categoria",
      flex: 1,
      hideable: false,
      renderCell(params) {
        return params.row.categoria?.descricao ? params.row.categoria.descricao : "Sem Categoria";
      },
    },
    {
      field: "valorUnidade",
      headerName: "Preço",
      flex: 1,
      hideable: false,
      renderCell(params) {
        return maskCurrency(params.value);
      },
    },
    {
      field: "estoqueAtual",
      headerName: "Estoque Atual",
      flex: 1,
      hideable: false,
      renderCell(params) {
        return params.value;
      },
    },
    {
      field: "codigo",
      headerName: "Código Barras",
      flex: 1,
      hideable: false,
      renderCell(params) {
        return params.value === "" ? "Sem Codigo" : params.value;
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
            onClick={() => {setProdutoEditar(params.row); setNovoProduto(true)}}
            data-pr-tooltip="Editar"
          >
            <AiFillEdit />
          </div>
        );
      },
    },
  ];
  const AddContaBancaria = (value: Produto) => {
    mutate([...produtos?? [],value])
    setNovoProduto(false)
  }
  const EditarContaBancaria = (value: Produto) => {
    let findConta = produtos!.findIndex(x => x.id === value.id);
    let contaClone = [...produtos!];
    contaClone[findConta] = value;
    mutate(contaClone)
    setProdutoEditar(null)
    setNovoProduto(false)
  }
  const DeletarContaBancaria = (value: Produto) => {
    let findConta = produtos!.findIndex(x => x.id === value.id);
    let contaClone = [...produtos!];
    contaClone.splice(findConta,1);
    mutate(contaClone)
    setProdutoEditar(null)
    setNovoProduto(false)
  }
  return (
    <div className="categoria">
    <div className="top">
        <div className="left">
          <BiBarcodeReader className="icon" />
          <span>Produtos</span>
        </div>
        <div className="right">
        <JSTextField 
            size='small'
            placeholder='Buscar Produtos'
            InputProps={{
              startAdornment: (
                  <InputAdornment position="start">
                      <SearchIcon />
                  </InputAdornment>
              ),
             
            }}
          />
          <div
            className="button blue p-ripple"
            onClick={() => setNovoProduto(true)}
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
          rows={produtos?? []}
          columns={columnsPayment}
          disableColumnMenu
          density="compact"
          columnHeaderHeight={80}
          loading={isLoading}
          getRowId={(row: any) => row.id}
          disableRowSelectionOnClick
          localeText={{
            noRowsLabel: "Sem Informações",
            MuiTablePagination: {
              labelRowsPerPage: "Itens por pagina",
            },
          }}
        />
      </div>
        <NovoProduto aberto={novoProduto} onClose={() => {setNovoProduto(false); produtoEditar && setProdutoEditar(null)}} onPost={(x) => AddContaBancaria(x)} produtoEditar={produtoEditar} onEdit={(x) => EditarContaBancaria(x)} onRemove={(x) => DeletarContaBancaria(x)}/>
    </div>
  )
}
