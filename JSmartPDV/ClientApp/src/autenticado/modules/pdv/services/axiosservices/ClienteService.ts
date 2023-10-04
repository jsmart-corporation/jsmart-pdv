import api from '../../../../../common/API/axios';

export async function GetClienteCPF(cpf: string) {
    return await api.get(`api/cliente/cpf?cpf=${cpf}`);
  }