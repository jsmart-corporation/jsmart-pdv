import JSDataGrid from '../../../../JSCommon/Components/JSDataGrid'
import "./style.css";
import { CiBank } from "react-icons/ci";
import { GridColDef } from '@mui/x-data-grid';
import {tipoTransacao } from '../../../../Common/Containts/ListasDrowDown';
import { useFinTransacoes } from '../../../../Common/Services/Swr/SwrServices';
import { maskCurrency } from '../../../../Utils/Formatacoes';
import moment from 'moment';

export default function FinVendas() {
  
  const {transacoes,isLoading} = useFinTransacoes();
  

  const columnsPayment: GridColDef[] = [
    {
      field: "id",
      headerName: "Codigo",
      width: 140,
      hideable: false,
      renderCell(params) {
        return params.id;
      },
    },
    {
      field: "tipo",
      headerName: "Tipo",
      width: 140,
      hideable: false,
      renderCell(params) {
        return tipoTransacao.find(x => x.code == params.value)?.name;
      },
    },
    {
      field: "valorTotal",
      headerName: "Valor",
      width: 140,
      hideable: false,
      renderCell(params) {
        return maskCurrency(params.value);
      },
    },
    {
      field: "desconto",
      headerName: "Desconto",
      width: 140,
      hideable: false,
      renderCell(params) {
        return maskCurrency(params.value);
      },
    },
    {
      field: "cliente",
      headerName: "Cliente",
      flex: 1,
      hideable: false,
      renderCell(params) {
        return params.value ? params.value.nome : "Sem Cliente";
      },
    },
    {
      field: "dataVenda",
      headerName: "Data Encerramento",
      width: 170,
      hideable: false,
      renderCell(params) {
        return moment(params.value).format('l');
      },
    },
    {
      field: "user",
      headerName: "Vendedor",
      flex: 1,
      hideable: false,
      renderCell(params) {
        return params.value ? params.value.name : "Sem Vendedor";
      },
    },
    // {
    //   field: "buttons",
    //   headerName: "",
    //   width: 80,
    //   sortable: false,
    //   hideable: false,
    //   renderCell(_params) {
    //     return (
    //       <div
    //         className="edit-button p-ripple"
    //         onClick={() => null}
    //         data-pr-tooltip="Editar"
    //       >
    //         <AiFillEdit />
    //       </div>
    //     );
    //   },
    // },
  ];
 
  return (
    <div className="categoria">
    <div className="top">
        <div className="left">
          <CiBank className="icon" />
          <span>Vendas</span>
        </div>
        <div className="right">
          
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
          rows={transacoes?? []}
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
    </div>
  )
}
