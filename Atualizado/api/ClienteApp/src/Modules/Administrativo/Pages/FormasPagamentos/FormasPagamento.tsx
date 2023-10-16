import JSDataGrid from '../../../../JSCommon/Components/JSDataGrid'
import "./style.css";
import { FiPlus } from "react-icons/fi";
import { GridColDef } from '@mui/x-data-grid';
import { AiFillEdit } from 'react-icons/ai';
import { useState } from 'react';
import {  useFormasPagamento } from '../../../../Common/Services/Swr/SwrServices';
import { bandeiras, categoriasPagamento } from '../../../../Common/Containts/ListasDrowDown';
import { IFormaPagamento } from '../../../../Common/Interfaces';
import { FaMoneyBillAlt } from 'react-icons/fa';
import NovaFormaPagamento from '../../Components/Dialogs/NovaFormaPagamento/NovaFormaPagamento';

export default function FormasPagamento() {
  const [novaFormaPagamento,setNovaFormaPagamento] = useState(false);
  const {formasPagamento,isLoading,mutate} = useFormasPagamento();
  const [formaPagamentoEditar,setFormaPagamentoEditar] = useState<IFormaPagamento | null>(null)

  const columnsPayment: GridColDef[] = [
    {
      field: "descricao",
      headerName: "Descrição",
      flex: 1,
      minWidth: 250,
      hideable: false,
    },
    {
      field: "categoriaPagamento",
      headerName: "Categoria",
      width: 280,
      hideable: false,
      renderCell(params) {
        return categoriasPagamento.find(x => x.code === params.value)?.name;

      },
    },
    {
      field: "bandeira",
      headerName: "Bandeira",
      width: 130,
      hideable: false,
      renderCell(params) {
        return bandeiras.find(x => x.code === params.value)?.name;
      },
    },
    {
      field: "conta",
      headerName: "Conta de Destino",
      width: 150,
      hideable: false,
      renderCell(params) {
        return params.row.contaBancaria?.descricao ? params.row.contaBancaria.descricao : "Nenhuma";
      },
    },
    {
      field: "diasFaturamento",
      headerName: "Dias para Faturamento",
      width: 200,
      hideable: false,
    },
    {
      field: "taxa",
      headerName: "Taxa (%)",
      width: 100,
      hideable: false,
    },
    {
      field: "buttons",
      headerName: "",
      width: 80,
      hideable: false,
      renderCell(params) {
        return (
          params.row.permantente !== true && <div
          className="edit-button p-ripple"
          onClick={() => {setFormaPagamentoEditar(params.row); setNovaFormaPagamento(true)}}
          data-pr-tooltip="Editar"
        >
          <AiFillEdit />
        </div>
        );
      },
    },
  ];
  console.log(formasPagamento)
  const AddContaBancaria = (value: IFormaPagamento) => {
    mutate([...formasPagamento?? [],value])
    setNovaFormaPagamento(false)
  }
  const EditarContaBancaria = (value: IFormaPagamento) => {
    let findConta = formasPagamento!.findIndex(x => x.id === value.id);
    let contaClone = [...formasPagamento!];
    contaClone[findConta] = value;
    mutate(contaClone)
    setFormaPagamentoEditar(null)
    setNovaFormaPagamento(false)
  }
  const DeletarContaBancaria = (value: IFormaPagamento) => {
    let findConta = formasPagamento!.findIndex(x => x.id === value.id);
    let contaClone = [...formasPagamento!];
    contaClone.splice(findConta,1);
    mutate(contaClone)
    setFormaPagamentoEditar(null)
    setNovaFormaPagamento(false)
  }
  return (
    <div className="conta-bancaria">
    <div className="top">
        <div className="left">
          <FaMoneyBillAlt className="icon" />
          <span>Formas de Pagamento</span>
        </div>
        <div className="right">
          <div
            className="button blue p-ripple"
            onClick={() => setNovaFormaPagamento(true)}
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
          rows={formasPagamento?? []}
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
        <NovaFormaPagamento aberto={novaFormaPagamento} onClose={() => {setNovaFormaPagamento(false); formaPagamentoEditar && setFormaPagamentoEditar(null)}} onPost={(x) => AddContaBancaria(x)} formaPagamentoEditar={formaPagamentoEditar} onEdit={(x) => EditarContaBancaria(x)} onRemove={(x) => DeletarContaBancaria(x)}/>
    </div>
  )
}
