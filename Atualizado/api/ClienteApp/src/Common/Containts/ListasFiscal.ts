export interface IFiscal {
    code: string;
    name: string;
  }

export const taxsituationPISCOFINS: IFiscal[] = [
  { code: "01", name: "01 - Operação Tributável com Alíquota Básica" },
  { code: "02", name: "02 - Operação Tributável com Alíquota Diferenciada" },
  { code: "03", name: "03 - Operação Tributável com Alíquota por Unidade de Medida de Produto" },
  { code: "04", name: "04 - Operação Tributável Monofásica - Revenda a Alíquota Zero" },
  { code: "05", name: "05 - Operação Tributável por Substituição Tributária" },
  { code: "06", name: "06 - Operação Tributável a Alíquota Zero" },
  { code: "07", name: "07 - Operação Isenta da Contribuição" },
  { code: "08", name: "08 - Operação sem Incidência da Contribuição" },
  { code: "09", name: "09 - Operação com Suspensão da Contribuição" },
  { code: "49", name: "49 - Outras Operações de Saída" },
  { code: "50", name: "50 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno" },
  { code: "51", name: "51 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno" },
  { code: "52", name: "52 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação" },
  { code: "53", name: "53 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno" },
  { code: "54", name: "54 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação" },
  { code: "55", name: "55 - Operação com Direito a Crédito - Vinculada a Receitas Não Tributadas no Mercado Interno e de Exportação" },
  { code: "56", name: "56 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno e de Exportação" },
  { code: "60", name: "60 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno" },
  { code: "61", name: "61 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno" },
  { code: "62", name: "62 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação" },
  { code: "63", name: "63 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno" },
  { code: "64", name: "64 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação" },
  { code: "65", name: "65 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação" },
  { code: "66", name: "66 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno e de Exportação" },
  { code: "67", name: "67 - Crédito Presumido - Outras Operações" },
  { code: "70", name: "70 - Operação de Aquisição sem Direito a Crédito" },
  { code: "71", name: "71 - Operação de Aquisição com Isenção" },
  { code: "72", name: "72 - Operação de Aquisição com Suspensão" },
  { code: "73", name: "73 - Operação de Aquisição a Alíquota Zero" },
  { code: "74", name: "74 - Operação de Aquisição sem Incidência da Contribuição" },
  { code: "75", name: "75 - Operação de Aquisição por Substituição Tributária" },
  { code: "98", name: "98 - Outras Operações de Entrada" },
  { code: "99", name: "99 - Outras Operações" },
];

export  const taxorigin: IFiscal[] = [
  { code: "0", name: "0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8" },
  { code: "1", name: "1 - Estrangeira - Importação direta, exceto a indicada no código 6" },
  { code: "2", name: "2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7" },
  { code: "3", name: "3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%" },
  { code: "4", name: "4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes" },
  { code: "5", name: "5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%" },
  { code: "6", name: "6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural" },
  { code: "7", name: "7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural" },
  { code: "8", name: "8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%" },
];

export const taxcfop: IFiscal[] = [
  { code: "5101", name: "5.101 - Venda de produção do estabelecimento" },
  { code: "5102", name: "5.102 - Venda de mercadoria de terceiros" },
  { code: "5103", name: "5.103 - Venda de produção do estabelecimento efetuada fora do estabelecimento" },
  { code: "5104", name: "5.104 - Venda de mercadoria adquirida ou recebida de terceiros, efetuada fora do estabelecimento" },
  { code: "5115", name: "5.115 - Venda de mercadoria adquirida ou recebida de terceiros, recebida anteriormente em consignação mercantil" },
  { code: "5405", name: "5.405 - Venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária, na condição de contribuinte substituído" },
  { code: "5656", name: "5.656 - Venda de combustível ou lubrificante de terceiros, destinados a consumidor final" },
  { code: "5667", name: "5.667 - Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra UF" },
  { code: "5933", name: "5.933 - Prestação de serviço tributado pelo ISSQN (No caso de Nota Fiscal conjugada)" },
];

export const taxsituation: IFiscal[] = [
  { code: "101", name: "101 - Tributada pelo Simples Nacional com permissão de crédito" },
  { code: "102", name: "102 - Tributada pelo Simples Nacional sem permissão de crédito" },
  { code: "103", name: "103 - Isenção do ICMS no Simples Nacional para faixa de receita bruta" },
  { code: "201", name: "201 - Tributada pelo Simples Nacional com permissão de crédito e com cobrança do ICMS por substituição tributária" },
  { code: "202", name: "202 - Tributada pelo Simples Nacional sem permissão de crédito e com cobrança do ICMS por substituição tributária" },
  { code: "203", name: "203 - Isenção do ICMS no Simples Nacional para faixa de receita bruta e com cobrança do ICMS por substituição tributária" },
  { code: "300", name: "300 - Imune" },
  { code: "400", name: "400 - Não tributada pelo Simples Nacional" },
  { code: "500", name: "500 - ICMS cobrado anteriormente por substituição tributária (substituído) ou por antecipação" },
  { code: "900", name: "900 - Outros" },
];