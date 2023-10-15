import JSDataGrid from '../../../../JSCommon/Components/JSDataGrid'
import "./style.css";
import { FiPlus } from "react-icons/fi";
import { GridColDef } from '@mui/x-data-grid';
import { AiFillEdit } from 'react-icons/ai';
import { useState } from 'react';
import { bancos, pessoa, tipoCliente } from '../../../../Common/Containts/ListasDrowDown';
import { IClientes } from '../../../../Common/Interfaces';
import { useClientes } from '../../../../Common/Services/Swr/SwrServices';

import { HiUsers } from 'react-icons/hi';
import { JSTextField } from '../../../../JSCommon/Components/JSTextField';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NovoCliente from '../../Components/Dialogs/NovoCliente/NovoCliente';

export default function Clientes() {
  const [novoCliente,setNovoCliente] = useState(false);
  const {clientes,isLoading,mutate} = useClientes();
  const [clienteEditar,setClienteEditar] = useState<IClientes | null>(null)

  const columnsPayment: GridColDef[] = [
    {
      field: "nome",
      headerName: "Cliente",
      flex: 1,
      hideable: false,
      renderCell(params) {
        return bancos.find(x => x.code === params.value)?.name;
      },
    },
    {
      field: "pessoa",
      headerName: "Pessoa",
      flex: 1,
      hideable: false,
      renderCell(params) {
        return pessoa.find(x => x.code === params.value)?.name;
      },
    },
    {
      field: "cpf",
      headerName: "Documento",
      flex: 1,
      hideable: false,
      renderCell(params) {
        return params.row.pessoa === 1 ? params.value : params.row.cnpj;
      },
    },
    {
      field: "telefone",
      headerName: "Telefone",
      flex: 1,
      hideable: false,
      renderCell(params) {
        return params.value == "" ? "Sem Telefone" : params.value;
      },
    },
    {
      field: "tipo",
      headerName: "Tipo",
      flex: 1,
      hideable: false,
      renderCell(params) {
        return tipoCliente.find(x => x.code === params.value)?.name;
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
            onClick={() => {setClienteEditar(params.row); setNovoCliente(true)}}
            data-pr-tooltip="Editar"
          >
            <AiFillEdit />
          </div>
        );
      },
    },
  ];
  const AddContaBancaria = (value: IClientes) => {
    mutate([...clientes?? [],value])
    setNovoCliente(false)
  }
  const EditarContaBancaria = (value: IClientes) => {
    let findConta = clientes!.findIndex(x => x.id === value.id);
    let contaClone = [...clientes!];
    contaClone[findConta] = value;
    mutate(contaClone)
    setClienteEditar(null)
    setNovoCliente(false)
  }
  const DeletarContaBancaria = (value: IClientes) => {
    let findConta = clientes!.findIndex(x => x.id === value.id);
    let contaClone = [...clientes!];
    contaClone.splice(findConta,1);
    mutate(contaClone)
    setClienteEditar(null)
    setNovoCliente(false)
  }
  return (
    <div className="clientes">
    <div className="top">
        <div className="left">
          <HiUsers className="icon" />
          <span>Clientes</span>
          <JSTextField 
            size='small'
            placeholder='Buscar Clientes'
            InputProps={{
              startAdornment: (
                  <InputAdornment position="start">
                      <SearchIcon />
                  </InputAdornment>
              ),
             
            }}
          />
        </div>
        <div className="right">
          <div
            className="button blue p-ripple"
            onClick={() => setNovoCliente(true)}
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
          rows={clientes?? []}
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
        <NovoCliente aberto={novoCliente} onClose={() => {setNovoCliente(false); clienteEditar && setClienteEditar(null)}} onPost={(x) => AddContaBancaria(x)} clienteEditar={clienteEditar} onEdit={(x) => EditarContaBancaria(x)} onRemove={(x) => DeletarContaBancaria(x)}/>
    </div>
  )
}
