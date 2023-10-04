export interface Produto {
    id: number,
    descricao: string,
    valor: number,
    codigoDeBarra: string,
    imagem?: Uint8Array
}
export interface Estacao{
    id: number,
    nome: string
}
export interface Caixa{
    id: number,
    valorAbertura: number
    dataAbertura: Date
}
export class Transacao{
    Descontos: number = 0;
    Subtotal: number = 0;
    Cliente?: ClienteTransacao | null = null;
    Itens: ItemTransacao[] = []
    Pagamentos: PagamentoTransacao[] = [];
    Total: number = this.Subtotal  - this.Descontos;
}
export class ItemTransacao {
    id: number = 0
    descricao: string = ''
    quantidade: number = 0;
    valor: number = 0;
    valorUn: number = 0;
    imagem?: Uint8Array | null = null;
}
export class PagamentoTransacao {
    Descricao: string = '';
    FormaPagamento: FormaPagamento = FormaPagamento.Dinheiro;
    Valor: number = 0;
    Nsu?: string | null = null;
    FinMetodoPagamentoId: number = 0;
    Porcentagem: number = 0;
    DiasPrevisao: number = 0;
    CaixaId: number = 0;
}
export interface MetodoPagamento {
    id: number,
    formaPagamento: FormaPagamento,
    usarNsu: boolean,
    porcentagem: number,
    diasPrevisao: number,
    descricao: string
}

///DTOS POST

export class TransacaoDTO{
    Tipo: TipoTransacao = TipoTransacao.Venda;
    ValorTotal: number = 0;
    SubTotal: number = 0;
    Desconto:number = 0;
    CaixaId: number = 0;
    ClienteId: number | null = null;
    TransacaoItems: TransacaoItemDTO[] = []
    TransacaoPagamentos: TransacaoPagamentoDTO[] = []
}

export class TransacaoItemDTO{
    produtoId?: number | null = null;
    descricao: string = '';
    valorTotal: number = 0;
    valorUn: number = 0;
    quantidade: number = 0;
}
export class TransacaoPagamentoDTO{
    Descricao: string = '';
    FormaPagamento: FormaPagamento = FormaPagamento.Dinheiro;
    Valor: number = 0;
    Nsu?: string | null = null;
    FinMetodoPagamentoId: number = 0;
    PorcentagemPagamento: number = 0;
    DiasPrevisao: number = 0;
    ClienteId: number | null = null;
    CaixaId: number = 0;
}
export interface AporteCaixa {
    caixaId: number,
    valor: number,
    descricao?: string,
    tipo: TipoControleCaixa
}

export interface CaixaResumo {
  dinheiro: number,
  debito: number,
  credito: number,
  outros: number,
  aporte: number,
  retirada: number,
  transacoes: TransacaoResumo[];
}
export interface ClienteTransacao {
    id: number,
    nome: string,
    cpf: string,
}
export interface TransacaoResumo {
    id: number,
    tipo: TipoTransacao,
    valorTotal: number,
    dataVenda: Date,
    nome?: string | null,
    notaEmitida: boolean,
}
export enum TipoTransacao{
    Venda = 1,
    Os = 2,
    Devolucao = 3,
    Comanda = 4,
}
export enum TipoControleCaixa{
    Aporte = 1,
    Retirada = 2,
}
export enum FormaPagamento{
    Dinheiro = 1,
    Debito = 2,
    Credito = 3,
    Outros = 4,
}