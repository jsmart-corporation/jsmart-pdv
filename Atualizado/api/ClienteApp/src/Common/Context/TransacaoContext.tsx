import { ReactNode, createContext, useState,SetStateAction } from "react"
import { FormaPagamento, IClientes, ItemTransacao, PagamentoTransacao, TipoTransacao, Transacao, TransacaoDTO, TransacaoItemDTO, TransacaoPagamentoDTO } from "../Interfaces";
import { PostTransacaoAsync } from "../Services/Axios/TransacaoService";

interface TransacaoProviderProps {
    children: ReactNode;
}

export enum TransacaoStatus {
  NovaTransacao = 0,
  Enviando = 1,
  Enviado = 2,
  Erro = 3,
  
}

interface ITransacaoContext{
    transacao: Transacao;
    AdicionaItem(item: ItemTransacao): void;
    CancelarTransacao(): void;
    RemoveItem(index: number): void;
    VerificarVendaAndamento(): boolean;
    AdicionaCliente(cliente: IClientes): void;
    RemoveClienteTransacao(): void;
    AdicionaPagamento(pagamento: PagamentoTransacao): void;
    RemovePagamento(index: number): void;
    FinalizaTransacao(caixaId: number): void;
    setStatusTransacao(value: SetStateAction<TransacaoStatus>): void;
    NovaTransacao(): void;
    statusTransacao: TransacaoStatus;
    ultimaTransacaoTroco: number;
}

export const TransacaoContext = createContext({} as ITransacaoContext)

export function TransacaoProvider({children} : TransacaoProviderProps) {
    const [transacao,setTransacao] = useState<Transacao>(new Transacao())
    const [statusTransacao,setStatusTransacao] = useState<TransacaoStatus>(TransacaoStatus.NovaTransacao)
    const [ultimaTransacaoTroco,setUltimaTransacaoTroco] = useState<number>(0)

    function AdicionaItem(item: ItemTransacao) {
      if(statusTransacao === TransacaoStatus.Enviado){
        NovaTransacao();
      }
      const novaTransacao = transacao;
      let existe = 0;

      novaTransacao.Itens.forEach((itemTransacao: ItemTransacao) => {
          if (itemTransacao.id == item.id) {
              itemTransacao.valor += item.valorUn * item.quantidade;
              itemTransacao.quantidade += item.quantidade;
              existe = 1;
          }
      });
      if (existe == 0) novaTransacao.Itens = [...novaTransacao.Itens, item];

      novaTransacao.Subtotal += item.valorUn * item.quantidade;

      SalvaTransacao(novaTransacao);
    }
    async function RemoveItem(index: number) {
      const novaTransacao = transacao;
      const item = novaTransacao.Itens[index];
  
      if (index === -1) index = novaTransacao.Itens.length - 1;
      if (!item) return;
  
      //Limpa regra de promoção
  
      if (item.valor < 0) {
        // AbreSnackbarNotificacao('Valor de desconto maior que o valor do produto.', false);
        return;
      }
  
      if (item.quantidade > 1) {
        item.quantidade -= 1;
        item.valor -= item.valorUn;
        novaTransacao.Subtotal -= item.valorUn;
      } else {
        novaTransacao.Subtotal -= item.valor;
        novaTransacao.Itens.splice(index, 1);
      }
      SalvaTransacao(novaTransacao);
    }
    // function DefineSubTotal(valor: number) {
    //   const novaTransacao = transacao;
    //   novaTransacao.Subtotal = valor;
  
    //   SalvaTransacao(novaTransacao);
    // }
    async function SalvaTransacao(transacao: Transacao) {
      transacao.Total =
          transacao.Subtotal  - transacao.Descontos;
  
  
      // localStorage.setItem('transacao', JSON.stringify(transacao));
  
      setTransacao({ ...transacao });
    }
    const CancelarTransacao = () => {
      setTransacao(new Transacao())
    }

    const VerificarVendaAndamento = ():boolean => {
      return transacao.Itens.length > 0 ? true : false;
    }
    const AdicionaCliente = (cliente: IClientes) => {
        setTransacao({...transacao, Cliente: cliente})
    }
    const RemoveClienteTransacao = () => {
      setTransacao({...transacao,Cliente: null})
    }
    function AdicionaPagamento(pagamento: PagamentoTransacao) {
      const novaTransacao = transacao;
      novaTransacao.Pagamentos.push(pagamento);
      SalvaTransacao(novaTransacao);
    }
    function RemovePagamento(index: number) {
      const novaTransacao = transacao;
      novaTransacao.Pagamentos.splice(index, 1);
      SalvaTransacao(novaTransacao);
    }

  const FinalizaTransacao = async(caixaId: number) => {
      let transacaoDTO = new TransacaoDTO()
      transacaoDTO.Desconto = transacao.Descontos
      transacaoDTO.SubTotal = transacao.Subtotal
      transacaoDTO.ValorTotal = transacao.Total
      transacaoDTO.Tipo = TipoTransacao.Venda
      transacaoDTO.ClienteId = transacao.Cliente?.id?? null;
      transacaoDTO.CaixaId = caixaId;
      
      transacao.Itens.forEach(element => {
        let transacaoItemDTO = new TransacaoItemDTO();
        transacaoItemDTO.descricao = element.descricao
        transacaoItemDTO.quantidade = element.quantidade
        transacaoItemDTO.valorTotal = element.valor
        transacaoItemDTO.valorUn = element.valorUn
        transacaoItemDTO.produtoId = element.id
        transacaoDTO.TransacaoItems.push(transacaoItemDTO)
      });
      transacao.Pagamentos.forEach(element => {
        let transacaoPagamentoDTO = new TransacaoPagamentoDTO();
        transacaoPagamentoDTO.CaixaId = element.CaixaId
        transacaoPagamentoDTO.Descricao = null,
        transacaoPagamentoDTO.DiasPrevisao = element.DiasPrevisao,
        transacaoPagamentoDTO.FormaPagamento = element.FormaPagamento,
        transacaoPagamentoDTO.ContaBancariaId = element.ContaBancariaId,
        transacaoPagamentoDTO.Nsu = element.Nsu,
        transacaoPagamentoDTO.Valor = element.Valor,
        transacaoPagamentoDTO.FinMetodoPagamentoId = element.FinMetodoPagamentoId
        transacaoPagamentoDTO.ClienteId = transacao.Cliente?.id?? null,
        transacaoPagamentoDTO.PorcentagemPagamento = element.Porcentagem,
        transacaoPagamentoDTO.numeroParcelas = element.NumeroParcelas
        transacaoPagamentoDTO.Pago = element.Pago
        transacaoDTO.TransacaoPagamentos.push(transacaoPagamentoDTO)
      });
      let valorTotalPago = 0;
      transacao.Pagamentos.map(({ Valor }) => {
        valorTotalPago += Valor;
      });
      let restante = transacao.Total - valorTotalPago;
      let troco = restante * -1
      if(troco > 0){
        var pagamentoTroco = transacaoDTO.TransacaoPagamentos.findIndex(x => x.FormaPagamento === FormaPagamento.Dinheiro)
        if(pagamentoTroco !== -1){
          let valorAnterior =  transacaoDTO.TransacaoPagamentos[pagamentoTroco].Valor;
          let valorAPagar = valorAnterior - troco
          console.log(valorAPagar)
          transacaoDTO.TransacaoPagamentos[pagamentoTroco].Valor = valorAPagar;
        }
      }
      await PostTransacaoAsync(transacaoDTO)
      
      setUltimaTransacaoTroco(restante === 0 ? 0 : troco)
  }
  const NovaTransacao = () => {
    setStatusTransacao(TransacaoStatus.NovaTransacao)
    setUltimaTransacaoTroco(0)
  }
  return (
    <TransacaoContext.Provider value={{transacao,AdicionaItem,CancelarTransacao,RemoveItem,VerificarVendaAndamento,AdicionaCliente,RemoveClienteTransacao,AdicionaPagamento,RemovePagamento,FinalizaTransacao,setStatusTransacao,statusTransacao,ultimaTransacaoTroco,NovaTransacao}}>
        {children}
    </TransacaoContext.Provider>
  )
}
