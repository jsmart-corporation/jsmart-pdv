import JSDataGrid from '../../../../JSCommon/Components/JSDataGrid'
import "./style.css";
import { CiBank } from "react-icons/ci";
import { GridColDef } from '@mui/x-data-grid';
import { categoriasPagamento } from '../../../../Common/Containts/ListasDrowDown';
import { useFinPlanejador } from '../../../../Common/Services/Swr/SwrServices';
import { maskCurrency } from '../../../../Utils/Formatacoes';
import moment from 'moment';

export default function Planejador() {
  
  const {pagamentos,isLoading} = useFinPlanejador();
  

  const columnsPayment: GridColDef[] = [
    {
      field: "descricao",
      headerName: "Descricao",
      width: 140,
      hideable: false,
      renderCell(params) {
        return params.value;
      },
    },
    {
      field: "valorCalculado",
      headerName: "Valor",
      width: 140,
      hideable: false,
      renderCell(params) {
        return maskCurrency(params.value);
      },
    },
    {
      field: "dataPagamentoEfetuado",
      headerName: "Vencimento/Pagamento",
      width: 140,
      hideable: false,
      renderCell(params) {
        return moment(params.value).format('l');
      },
    },
    {
      field: "dataVencimento",
      headerName: "Movimento",
      width: 140,
      hideable: false,
      renderCell(params) {
        return moment(params.value).format('l');
      },
    },
    {
      field: "categoriaPagamento",
      headerName: "Categoria",
      flex: 1,
      hideable: false,
      renderCell(params) {
        return categoriasPagamento.find(x => x.code === params.value)?.name;
      },
    },
    {
      field: "finMetodoPagamento",
      headerName: "Conta",
      flex: 1,
      hideable: false,
      renderCell(params) {
        return params.value ? params.value.contaBancaria.descricao : "Sem Conta";
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
      field: "pago",
      headerName: "Pago",
      flex: 1,
      hideable: false,
      renderCell(params) {
        return params.value ? "Sim" : "Não";
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
          <span>Planejador</span>
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
          rows={pagamentos?? []}
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
