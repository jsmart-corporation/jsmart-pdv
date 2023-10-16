import JSDataGrid from '../../../../JSCommon/Components/JSDataGrid'
import "./style.css";
import { FiPlus } from "react-icons/fi";
import { CiBank } from "react-icons/ci";
import { GridColDef } from '@mui/x-data-grid';
import { AiFillEdit } from 'react-icons/ai';
import { useState } from 'react';
import NovaContaBancaria from '../../Components/Dialogs/NovaContaBancaria/NovaContaBancaria';
import { useContasBancarias } from '../../../../Common/Services/Swr/SwrServices';
import { bancos } from '../../../../Common/Containts/ListasDrowDown';
import { ContaBancaria } from '../../../../Common/Interfaces';

export default function ContasBancarias() {
  const [novaContaBancaria,setNovaContaBancaria] = useState(false);
  const {contasBancarias,isLoading,mutate} = useContasBancarias();
  const [contaBancariaEditar,setContaBancariaEditar] = useState<ContaBancaria | null>(null)

  const columnsPayment: GridColDef[] = [
    {
      field: "banco",
      headerName: "Banco",
      flex: 1,
      minWidth: 250,
      hideable: false,
      renderCell(params) {
        return bancos.find(x => x.code === params.value)?.name;
      },
    },
    {
      field: "descricao",
      headerName: "Descricao",
      width: 300,
      hideable: false,
    },

    {
      field: "agencia",
      headerName: "Agencia",
      width: 130,
      hideable: false,
      renderCell(params) {
        return params.value ? params.value : "Nenhuma";
      },
    },
    {
      field: "conta",
      headerName: "Conta",
      width: 130,
      hideable: false,
      renderCell(params) {
        return params.value ? params.value : "Nenhuma";
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
          params.row.permanente !== true && <div
            className="edit-button p-ripple"
            onClick={() => {setContaBancariaEditar(params.row); setNovaContaBancaria(true)}}
            data-pr-tooltip="Editar"
          >
            <AiFillEdit />
          </div>
        );
      },
    },
  ];
  const AddContaBancaria = (value: ContaBancaria) => {
    mutate([...contasBancarias?? [],value])
    setNovaContaBancaria(false)
  }
  const EditarContaBancaria = (value: ContaBancaria) => {
    let findConta = contasBancarias!.findIndex(x => x.id === value.id);
    let contaClone = [...contasBancarias!];
    contaClone[findConta] = value;
    mutate(contaClone)
    setContaBancariaEditar(null)
    setNovaContaBancaria(false)
  }
  const DeletarContaBancaria = (value: ContaBancaria) => {
    let findConta = contasBancarias!.findIndex(x => x.id === value.id);
    let contaClone = [...contasBancarias!];
    contaClone.splice(findConta,1);
    mutate(contaClone)
    setContaBancariaEditar(null)
    setNovaContaBancaria(false)
  }
  return (
    <div className="conta-bancaria">
    <div className="top">
        <div className="left">
          <CiBank className="icon" />
          <span>Contas Bancárias</span>
        </div>
        <div className="right">
          <div
            className="button blue p-ripple"
            onClick={() => setNovaContaBancaria(true)}
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
          rows={contasBancarias?? []}
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
        <NovaContaBancaria aberto={novaContaBancaria} onClose={() => {setNovaContaBancaria(false); contaBancariaEditar && setContaBancariaEditar(null)}} onPost={(x) => AddContaBancaria(x)} contaBancariaEditar={contaBancariaEditar} onEdit={(x) => EditarContaBancaria(x)} onRemove={(x) => DeletarContaBancaria(x)}/>
    </div>
  )
}
