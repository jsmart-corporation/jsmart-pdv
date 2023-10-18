export interface Bancos {
    name: string;
    link: string | null;
    code: number;
}
export interface IType {
  name: string;
  code: number;
}
export interface Bandeira {
  name: string;
  code: number;
}
export interface CategoriaPagamento {
  name: string;
  code: number;
}
export interface Credenciadora {
  name: string;
  code: string;
}

export interface UF {
  name: string;
  code: number;
}
export interface IUnit {
  name: string;
  code: string;
  precision: number;
}
export interface Pessoa {
  name: string;
  code: number;
}
export interface TipoCliente {
  name: string;
  code: number;
}

export const bancos: Bancos[] = [
    {
      name: "0 - Outro",
      link: null,
      code: 0,
    },
    {
      name: "1 - Banco do Brasil",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135793453675061258/OIP.png",
      code: 1,
    },
    {
      name: "4 - Banco do Nordeste",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135793763680268418/Banco-do-Nordeste.png",
      code: 4,
    },
    {
      name: "33 - Santander",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135794576813215765/R.png",
      code: 33,
    },
    {
      name: "41 - Banrisul",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135796527596580915/banrisul-logo-2-1536x1016.png",
      code: 41,
    },
    {
      name: "70 - Banco BRB",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135796676074930238/brb-logo-1-599x177.png",
      code: 70,
    },
    {
      name: "85 - Cecred",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135796777791017010/Logo-CECRED.png",
      code: 85,
    },
    {
      name: "97 - Credisis",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135796870086668328/credisis-jicred.png",
      code: 97,
    },
    {
      name: "99 - Cooperativa Uniprime Central",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135797008985227294/R.png",
      code: 99,
    },
    {
      name: "104 - Caixa Econômica Federal",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135797153063772261/Caixa_Economica_Federal_logo.png",
      code: 104,
    },
    {
      name: "136 - Unicred do Brasil",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135797254347837481/R.png",
      code: 136,
    },
    {
      name: "237 - Bradesco",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135797581423837204/bradesco-1-2--1120x720.png",
      code: 237,
    },
    {
      name: "341 - Itaú",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135797695152402432/R.png",
      code: 341,
    },
    {
      name: "389 - Banco Mercantil do Brasil",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135797857174159420/banco-mercantil-do-brasil.png",
      code: 389,
    },
    {
      name: "399 - HSBC",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135797937025339402/1487077769966.png",
      code: 399,
    },
    {
      name: "748 - Sicredi",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135798020244512878/sicredi.png",
      code: 748,
    },
    {
      name: "756 - Sicoob",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135798218844807217/R.png",
      code: 756,
    },
    {
      name: "1000 - BBVA Bancomer",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135798304249237584/OIP.png",
      code: 1000,
    },
    {
      name: "1100 - CitiBanamex",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135798442141155338/2000.png",
      code: 1100,
    },
    {
      name: "1200 - Banorte",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135798527935651870/banorte.png",
      code: 1200,
    },
    {
      name: "1300 - Scotiabank",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135798638585577482/OIP.png",
      code: 1300,
    },
    {
      name: "1400 - Inbursa",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135798719816683641/OIP.png",
      code: 1400,
    },
    {
      name: "1500 - Interacciones",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135798861810630716/Banco-interacciones.png",
      code: 1500,
    },
    {
      name: "1600 - Afirme",
      link: "https://cdn.discordapp.com/attachments/1057734919964606526/1135798951564562442/OIP.png",
      code: 1600,
    },
];
export const bandeiras: Bandeira[] = [
  {
    name: "Visa",
    code: 1,
  },
  {
    name: "Mastercard",
    code: 2,
  },
  {
    name: "American Express",
    code: 3,
  },
  {
    name: "Sorocred",
    code: 4,
  },
  {
    name: "Diners Club",
    code: 5,
  },
  {
    name: "Elo",
    code: 6,
  },
  {
    name: "Hipercard",
    code: 7,
  },
  {
    name: "Aura",
    code: 8,
  },
  {
    name: "Cabal",
    code: 9,
  },
  {
    name: "Outro",
    code: 99,
  },
];
export const categoriasPagamento: CategoriaPagamento[] = [
  { name: "Dinheiro", code: 1 },
  { name: "Cheque", code: 2 },
  { name: "Cartão de Crédito", code: 3 },
  { name: "Cartão de Débito", code: 4 },
  { name: "Crédito na Loja", code: 5 },
  { name: "Vale Alimentação", code: 10 },
  { name: "Vale Refeição", code: 11 },
  { name: "Vale Presente", code: 12 },
  { name: "Vale Combustível", code: 13 },
  { name: "Boleto Bancário", code: 15 },
  { name: "Depósito Bancário", code: 16 },
  { name: "Pagamento Instantâneo (PIX)", code: 17 },
  { name: "Transferência bancária, Carteira Digital", code: 18 },
  { name: "Programa de fidelidade, Cashback, Crédito Virtual", code: 19 },
  { name: "Sem Pagamento", code: 90 },
  { name: "Outro", code: 99 }
];
export const credenciadoras: Credenciadora[] = [
  { code: "03106213000271", name: "Administradora de Cartões Sicredi Ltda" },
  { code: "59438325000101", name: "Banco Bradesco Cartões S/A" },
  { code: "62421979000129", name: "Banco CIFRA S/A" },
  { code: "58160789000128", name: "Banco Safra S/A" },
  { code: "07679404000100", name: "Banco Topázio S/A" },
  { code: "17351180000159", name: "Banco Triângulo S/A" },
  { code: "04627085000193", name: "BIGCARD Adm. de Convênios e Serviços" },
  { code: "01418852000166", name: "BOURBON Adm. de Cartões de Crédito" },
  { code: "03766873000106", name: "CABAL Brasil Ltda" },
  { code: "03722919000187", name: "CETELEM Brasil S/A- CFI" },
  { code: "01027058000191", name: "CIELO S/A" },
  { code: "03529067000106", name: "CREDI 21 Participações Ltda" },
  { code: "71225700000122", name: "ECX CARD Adm. e Processadora de Cartões S/A" },
  { code: "04432048000120", name: "EMPÓRIO CARD LTDA" },
  { code: "07953674000150", name: "FREEDDOM e Tecnologia e Serviços S/A" },
  { code: "03322366000175", name: "FUNCIONAL CARD LTDA" },
  { code: "03012230000169", name: "HIPERCARD Banco Multiplo S/A" },
  { code: "03966317000175", name: "MAPA Admin. Conv. e Cartões Ltda" },
  { code: "00163051000134", name: "Novo Pag Adm. e Proc. de Meios Eletrônicos de Pagto. Ltda" },
  { code: "43180355000112", name: "PERNAMBUCANAS Financiadora S/A Crédito, Fin. e Invest" },
  { code: "00904951000195", name: "POLICARD Systems e Serviços Ltda" },
  { code: "33098658000137", name: "PROVAR Negócios de Varejo Ltda" },
  { code: "01425787000104", name: "REDECARD S/A" },
  { code: "90055609000150", name: "RENNER Adm. Cartões de Crédito Ltda" },
  { code: "69034668000156", name: "SODEXO Pass do Brasil Serviços e Comércio S/A" },
  { code: "60114865000100", name: "SOROCRED Meios de Pagamentos Ltda" },
  { code: "47866934000174", name: "TICKET Serviços S/A" },
  { code: "00604122000197", name: "TRIVALE Administração Ltda" },
  { code: "61071387000161", name: "Unicard Banco Múltiplo S/A - TRICARD" }
];
export const uf: UF[] = [
  {
    code: 0,
    name: "AC",
  },
  {
    code: 1,
    name: "AL",
  },
  {
    code: 2,
    name: "AM",
  },
  {
    code: 3,
    name: "AP",
  },
  {
    code: 4,
    name: "BA",
  },
  {
    code: 5,
    name: "CE",
  },
  {
    code: 6,
    name: "DF",
  },
  {
    code: 7,
    name: "ES",
  },
  {
    code: 8,
    name: "GO",
  },
  {
    code: 0,
    name: "MA",
  },
  {
    code: 10,
    name: "MG",
  },
  {
    code: 11,
    name: "MS",
  },
  {
    code: 12,
    name: "MT",
  },
  {
    code: 13,
    name: "PA",
  },
  {
    code: 14,
    name: "PB",
  },
  {
    code: 15,
    name: "PE",
  },
  {
    code: 16,
    name: "PI",
  },
  {
    code: 17,
    name: "PR",
  },
  {
    code: 18,
    name: "RJ",
  },
  {
    code: 19,
    name: "RN",
  },
  {
    code: 20,
    name: "RO",
  },
  {
    code: 21,
    name: "RS",
  },
  {
    code: 22,
    name: "SC",
  },
  {
    code: 23,
    name: "SE",
  },
  {
    code: 24,
    name: "SP",
  },
  {
    code: 25,
    name: "TO",
  },
];
export const pessoa: Pessoa[] = [
  {
    code: 1,
    name: "Fisica",
  },
  {
    code: 2,
    name: "Juridica",
  },
];
export const tipoCliente: TipoCliente[] = [
  {
    code: 0,
    name: "Cliente",
  },
  {
    code: 1,
    name: "Empresa",
  },
  {
    code: 3,
    name: "Fornecedor",
  },
  {
    code: 4,
    name: "Transportadora",
  },
];
export const types:IType[] = [
  { code: 0, name: "Simples" },
  { code: 1, name: "Não Estocável" },
  { code: 2, name: "Feito na Hora" },
  { code: 3, name: "Conjunto" },
]
export const unit:IUnit[] = [
  { code: "und", name: "Unidade", precision: 0 },
  { code: "kg", name: "Quilogramas", precision: 3 },
  { code: "g", name: "Gramas", precision: 3 },
  { code: "saco", name: "Saco", precision: 1 },
  { code: "cx", name: "Caixa", precision: 1 },
  { code: "ds", name: "Dias", precision: 0 },
  { code: "hs", name: "Horas", precision: 0 },
  { code: "mins", name: "Minutos", precision: 0 },
]
export const notify: IType [] = [
  { code: 0, name: "Cozinha" },
  { code: 1, name: "Balcão" },
  { code: 2, name: "Depósito" },
  { code: 3, name: "Almoxarifado" },
  { code: 4, name: "Caixa" },
  { code: 5, name: "Outro" },
]
export const live: IType[] = [
  { code: 0, name: "Todos" },
  { code: 1, name: "Cozinha" },
  { code: 2, name: "Balcão" },
  { code: 3, name: "Depósito" },
  { code: 4, name: "Almoxarifado" },
  { code: 5, name: "Caixa" },
  { code: 6, name: "Outro" },
]

export const tipoTransacao: IType[] = [
  {code: 1, name: "Venda"},
  {code: 2, name: "OS"},
  {code: 3, name: "Devolucao"},
  {code: 4, name: "Comanda"},
]
export const tipoTransacaoPagamento: IType[] = [
  {
    code: 0,
    name: "Receita",
  },
  {
    code: 1,
    name: "Despesa",
  },
];