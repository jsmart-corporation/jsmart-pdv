import JSDataGrid, { CustomCheckbox } from '../../../../JSCommon/Components/JSDataGrid'
import "./style.css";
import { CiBank } from "react-icons/ci";
import { GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { useFinPlanejador } from '../../../../Common/Services/Swr/SwrServices';
import { maskCurrency } from '../../../../Utils/Formatacoes';
import moment from 'moment';
import { FiPlus } from 'react-icons/fi';
import NovaTransacao from '../../Components/Dialogs/NovaTransacao/NovaTransacao';
import { useEffect, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import {HiOutlineDocumentDownload} from 'react-icons/hi'
import BaixarContas from '../../Components/Dialogs/BaixarContas/BaixarContas';
import { RiExchangeDollarFill } from 'react-icons/ri';


export default function Planejador() {
  
  const {pagamentos,isLoading} = useFinPlanejador();
  const [novaTransacao,setNovaTransacao] = useState(false)
  const [pagamentosSelecionados,setPagamentosSelecionados] = useState<GridRowSelectionModel>([])
  const [baixarContas,setBaixarContas] = useState<boolean>(false);
  const columnsPayment: GridColDef[] = [
    {
      field: "descricao",
      headerName: "Descricao",
      flex: 1,
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
        return <span className={"value-label " + (params.row.tipoTransacao === 1 ? "dispensa" : "")}>{params.row.tipoTransacao === 1 ? "- " + maskCurrency(params.value) : "+ " + maskCurrency(params.value)}</span>;
      },
    },
    {
      field: "dataPagamentoEfetuado",
      headerName: "Pagamento",
      width: 150,
      hideable: false,
      renderCell(params) {
        return <span className={"pago " + (params.value ? "transparente" : "") } >{params.value ? moment(params.value).format('l') : "Sem Data" }</span>;
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
      field: "finMetodoPagamento",
      headerName: "Forma Pagamento",
      width: 200,
      hideable: false,
      renderCell(params) {
        return params.value ? params.value.descricao : "Sem Pagamento";
      },
    },
    {
      field: "contaBancaria",
      headerName: "Conta",
      flex: 1,
      hideable: false,
      renderCell(params) {
        return <span className={"pago " + (params.value ? "transparente" : "") } >{params.value ? params.value.descricao : "Sem Conta"}</span>;
      },
    },
    {
      field: "cliente",
      headerName: "Cliente",
      flex: 1,
      hideable: false,
      renderCell(params) {
        return <span className={"pago " + (params.value ? "transparente" : "") } >{params.value ? params.value.nome : "Sem Cliente" }</span>;
      },
    },
    {
      field: "pago",
      headerName: "Pago",
      width: 100,
      hideable: false,
      renderCell(params) {
        return <span className={"pago " + (params.value ? "sim" : "") } >{params.value ? "Sim" : "Não"}</span>;
      },
    },
    {
      field: "buttons",
      headerName: "",
      width: 80,
      sortable: false,
      hideable: false,
      renderCell(_params) {
        return (
          <div
            className="edit-button p-ripple"
            onClick={() => null}
            data-pr-tooltip="Editar"
          >
            <AiFillEdit />
          </div>
        );
      },
    },
  ];
  const getTotalContas = () => {
      let valor = 0;
      pagamentos?.filter(x => pagamentosSelecionados.includes(x.id)).map(x => {
        valor += x.valor
      })
    return valor;
  }
 const handleClickNewTransaction =() =>{
  setNovaTransacao(true)
 }
 useEffect(() => {
  if(pagamentosSelecionados.length > 0){

  }
 },[pagamentosSelecionados])
  return (
    <div className="planejador">
    <div className="top">
        <div className="left">
          <RiExchangeDollarFill className="icon" />
          <span>Planejador</span>
        </div>
        <div className="right">
          {
            pagamentosSelecionados.length > 0 && 
            <div
              className="button-baixar p-ripple"
              onClick={() => setBaixarContas(!baixarContas)}
              >
              <HiOutlineDocumentDownload className="icon"/>
              <span>Baixar Contas</span>
            </div>
          }
          <div
            className="button blue p-ripple"
            onClick={() => handleClickNewTransaction()}
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
          rows={pagamentos?? []}
          checkboxSelection
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setPagamentosSelecionados(newRowSelectionModel);
          }}
          rowSelectionModel={pagamentosSelecionados}
          columns={columnsPayment}
          disableColumnMenu
          isRowSelectable={x => x.row.pago === false}
          disableColumnSelector
          density="compact"
          columnHeaderHeight={80}
          loading={isLoading}
          getRowId={(row) => row.id}
          rowCount={50}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          localeText={{
            noRowsLabel: "Sem Informações",
            MuiTablePagination: {
              labelRowsPerPage: "Itens por pagina",
            },
          }}
          components={{
            BaseCheckbox: CustomCheckbox, // Substitua "CustomCheckbox" pelo seu componente personalizado, se necessário
          }}
        />
      </div>
      <NovaTransacao aberto={novaTransacao} onClose={() => setNovaTransacao(false)}/>
      <BaixarContas aberto={baixarContas} onClose={() => setBaixarContas(false)} total={getTotalContas()} contas={pagamentosSelecionados}/>
    </div>
  )
}
