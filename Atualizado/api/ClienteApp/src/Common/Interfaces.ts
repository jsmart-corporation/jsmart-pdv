
export interface User{
    name: string;
}
export interface CaixaSessao{
    id: number,
    valorAbertura: number
    dataAbertura: Date
}
export interface ContaBancaria{
    id: number,
    descricao: string,
    agencia?: string,
    conta?: string,
    banco: number,
    permanente?: boolean,
    criadoEm?: Date
}
export interface IFormaPagamento {
    id: number;
    descricao: string;
    categoriaPagamento: number;
    bandeira: number;
    contaBancariaId: number | null;
    contaBancaria?: ContaBancaria | null;
    credenciadora?: string | null;
    diasFaturamento: number;
    taxa: number;
    codigoAutorizacao: boolean;
    aceitarTroco: boolean;
    permantente?: boolean;
    criadoEm?: Date;
    deletado?: boolean;
    deletadoEm?: Date | null;
    parcelas: any;
    baixaAutomatica: boolean;
}
export interface ICategoria{
    id: number;
    descricao: string;
    criadoEm?: Date;
    deletado?: boolean;
    deletadoEm?: Date;
}
export interface IClientes{
    id: number;
    nome: string;
    tipo: number;
    pessoa: number;
    telefone?: string;
    email?: string;
    ieIsento: number;
    cpf?: string;
    cnpj?: string;
    inscricaoES?: string;
    inscricaoSU?: string;
    cep?: string;
    endereco?: string;
    complemento?: string;
    uf?: number | null;
    cidade?: string;
    bairro?: string;
    criadoEm?: Date;
    deletado?: boolean;
    deletadoEm?: Date;
}

export interface Produto {
    id: number;
    codigo?: string | null;
    codBalanca?: string | null;
    nome: string;
    tipoProduto: number;
    valorUnidade: number;
    precoCusto?: number | null;
    tipoEstoque: string;
    estoqueAtual: number;
    minEstoque: number;
    agrupavel?: boolean;
    recomendado?: boolean;
    insumos: string | null;
    notificarImpressao: string | null;
    notificarLive: string | null;
    imagem?: string | null;
    categoriaId?: number | null;
    categoria?: ICategoria | null;
    criadoEm?: Date;
    deletado?: boolean;
    deletadoEm?: boolean;
    // fiscal
    aliquotaTranspacencia?: number | null;
    codBeneficio?: number | null;
    ncm: string;
    cest: string;
    origin: string;
    cfop: string;
    situacaoTributaria: string;
    reducIcms?: number | null;
    situacaoTributariaPIS: string;
    situacaoTributariaCOFINS: string;
    aliquotaPis?: number | null;
    aliquotaICMS?: number | null;
    aliquotaCOFINS?: number | null;
  }

  export class Transacao{
    Descontos: number = 0;
    Subtotal: number = 0;
    Cliente?: IClientes | null = null;
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
}
export class PagamentoTransacao {
    Descricao: string = '';
    FormaPagamento: FormaPagamento = FormaPagamento.Dinheiro;
    Valor: number = 0;
    Nsu?: string | null = null;
    FinMetodoPagamentoId: number = 0;
    ContaBancariaId: number | null = null;
    Porcentagem: number = 0;
    DiasPrevisao: number = 0;
    CaixaId: number = 0;
    NumeroParcelas: number | null = 0;
    Pago: boolean = false;
}
export interface ClienteTransacao {
    id: number,
    nome: string,
    cpf: string,
}
export enum FormaPagamento{
    Dinheiro = 1,
    Debito = 2,
    Credito = 3,
    Outros = 4,
}
// export interface MetodoPagamento {
//     id: number,
//     categoriaPagamento: FormaPagamento,
//     codigoAutorizacao: boolean,
//     taxa: number,
//     diasFaturamento: number,
//     descricao: string
// }
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
    Descricao: string | null = '';
    FormaPagamento: FormaPagamento = FormaPagamento.Dinheiro;
    ContaBancariaId: number | null = null;
    Valor: number = 0;
    Nsu?: string | null = null;
    FinMetodoPagamentoId: number | null = null;
    PorcentagemPagamento: number = 0;
    DiasPrevisao: number = 0;
    ClienteId: number | null = null;
    CaixaId: number | null = null;
    TipoTransacao: number = 0;
    numeroParcelas: number | null = null;
    Pago: boolean = false;
}

export enum TipoTransacao{
    Venda = 1,
    Os = 2,
    Devolucao = 3,
    Comanda = 4,
}
export interface TransacaoFinanceiro{
    Id: number;
    Tipo: TipoTransacao;
    ValorTotal: number;
    SubTotal: number;
    Desconto: number;
    ClienteId: number | null;
    Cliente: IClientes | null;
    CaixaId: number;
    DataVenda: Date;
    TransacaoItems: TransacaoItemFinanceiro[] | null;
    TransacaoPagamentos: TransacaoPagamentoFinanceiro[] | null;
    NotaEmitida: boolean;
    UserId: number;
    User: User | null;
}
export interface TransacaoItemFinanceiro{
    Id: number;
    TransacaoId: number;
    Transacao: Transacao | null;
    ProdutoId: number | null;
    Produto: Produto | null;
    Descricao: string;
    ValorTotal: number;
    ValorUn: number;
    Quantidade: number;
    DataInsercao: Date;
}
export interface TransacaoPagamentoFinanceiro{
    id: number;
    descricao: string;
    categoriaPagamento: number;
    valor: number;
    valorCalculado: number;
    nsu: string | null;
    porcentagemPagamento: number | null;
    formaPagamentoId: number | null;
    finMetodoPagamento?: IFormaPagamento | null;
    contaBancariaId?: number | null;
    contaBancaria?: ContaBancaria | null;
    clienteId: number | null;
    cliente?: IClientes | null;
    transacaoId: number | null;
    transacao?: Transacao | null;
    caixaId: number | null;
    dataPagamentoEfetuado: any;
    dataVencimento: any;
    pago: boolean;
    tipoTransacao: number;
    numeroParcelas: number | null;
}