using System.ComponentModel;

namespace api.Enums
{
    public enum TipoTransacao
    {
        Venda = 1,
        OS = 2,
        Devolucao = 3,
        Comanda = 4,
    }
    public enum TipoClienteEnum
    {
        [Description("Cliente")]
        Cliente = 0,

        [Description("Empresa")]
        Empresa = 1,

        [Description("Fornecedor")]
        Fornecedor = 3,

        [Description("Transportadora")]
        Transportadora = 4 
    }
    public enum TipoPessoaEnum
    {
        [Description("Pessoa Fisica")]
        Fisica = 0,

        [Description("Pessoa Juridica")]
        Juridica = 1,
    }
    public enum IEIsentoEnum
    {
        [Description("Isento")]
        Sim = 0,

        [Description("Não Isento")]
        Nao = 1,
    }
    public enum UFEnum
    {
        [Description("Acre")]
        AC = 0,

        [Description("Alagoas")]
        AL = 1,

        [Description("Amazonas")]
        AM = 2,

        [Description("Amapá")]
        AP = 3,

        [Description("Bahia")]
        BA = 4,

        [Description("Ceará")]
        CE = 5,

        [Description("Distrito Federal")]
        DF = 6,

        [Description("Espírito Santo")]
        ES = 7,

        [Description("Goiás")]
        GO = 8,

        [Description("Maranhão")]
        MA = 9,

        [Description("Minas Gerais")]
        MG = 10,

        [Description("Mato Grosso do Sul")]
        MS = 11,

        [Description("Mato Grosso")]
        MT = 12,

        [Description("Pará")]
        PA = 13,

        [Description("Paraíba")]
        PB = 14,

        [Description("Pernambuco")]
        PE = 15,

        [Description("Piauí")]
        PI = 16,

        [Description("Paraná")]
        PR = 17,

        [Description("Rio de Janeiro")]
        RJ = 18,

        [Description("Rio Grande do Norte")]
        RN = 19,

        [Description("Rondônia")]
        RO = 20,

        [Description("Rio Grande do Sul")]
        RS = 21,

        [Description("Santa Catarina")]
        SC = 22,

        [Description("Sergipe")]
        SE = 23,

        [Description("São Paulo")]
        SP = 24,

        [Description("Tocantins")]
        TO = 25,
    }
    public enum BancoEnum
    {
        [Description("0 - Outro")]
        Outro = 0,

        [Description("1 - Banco do Brasil")]
        BancoDoBrasil = 1,

        [Description("4 - Banco do Nordeste")]
        BancoDoNordeste = 4,

        [Description("33 - Santander")]
        Santander = 33,

        [Description("41 - Banrisul")]
        Banrisul = 41,

        [Description("70 - Banco BRB")]
        BancoBRB = 70,

        [Description("85 - Cecred")]
        Cecred = 85,

        [Description("97 - Credisis")]
        Credisis = 97,

        [Description("99 - Cooperativa Uniprime Central")]
        CooperativaUniprimeCentral = 99,

        [Description("104 - Caixa Econômica Federal")]
        CaixaEconomicaFederal = 104,

        [Description("136 - Unicred do Brasil")]
        UnicredDoBrasil = 136,

        [Description("237 - Bradesco")]
        Bradesco = 237,

        [Description("341 - Itaú")]
        Itau = 341,

        [Description("389 - Banco Mercantil do Brasil")]
        BancoMercantilDoBrasil = 389,

        [Description("399 - HSBC")]
        HSBC = 399,

        [Description("748 - Sicredi")]
        Sicredi = 748,

        [Description("756 - Sicoob")]
        Sicoob = 756,

        [Description("1000 - BBVA Bancomer")]
        BBVABancomer = 1000,

        [Description("1100 - CitiBanamex")]
        CitiBanamex = 1100,

        [Description("1200 - Banorte")]
        Banorte = 1200,

        [Description("1300 - Scotiabank")]
        Scotiabank = 1300,

        [Description("1400 - Inbursa")]
        Inbursa = 1400,

        [Description("1500 - Interacciones")]
        Interacciones = 1500,

        [Description("1600 - Afirme")]
        Afirme = 1600
    }
    public enum TipoProduto
    {
        Simples = 0,
        Estocavel = 1,
        FeitoNaHora = 2,
        Conjunto = 3,
    }
    public enum TipoDeEstoque
    {
        Unidade = 1,
        Quilogramas = 2,
        Gramas = 3
    }
    public enum Origin
    {
        [Description("0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8")]
        NacionalExcetoIndicadas3_4_5_8 = 0,

        [Description("1 - Estrangeira - Importação direta, exceto a indicada no código 6")]
        EstrangeiraImportacaoDiretaExceto6 = 1,

        [Description("2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7")]
        EstrangeiraAdquiridaMercadoInternoExceto7 = 2,

        [Description("3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%")]
        NacionalConteudoImportacaoSuperior40InferiorIgual70 = 3,

        [Description("4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes")]
        NacionalProducaoConformidadeProcessosProdutivos = 4,

        [Description("5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%")]
        NacionalConteudoImportacaoInferiorIgual40 = 5,

        [Description("6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural")]
        EstrangeiraImportacaoDiretaSemSimilarNacionalCAMEXGasNatural = 6,

        [Description("7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural")]
        EstrangeiraAdquiridaMercadoInternoSemSimilarNacionalCAMEXGasNatural = 7,

        [Description("8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%")]
        NacionalConteudoImportacaoSuperior70 = 8,
    }
    public enum CFOP
    {
        [Description("5.101 - Venda de produção do estabelecimento")]
        VendaProducaoEstabelecimento = 5101,

        [Description("5.102 - Venda de mercadoria de terceiros")]
        VendaMercadoriaTerceiros = 5102,

        [Description("5.103 - Venda de produção do estabelecimento efetuada fora do estabelecimento")]
        VendaProducaoForaEstabelecimento = 5103,

        [Description("5.104 - Venda de mercadoria adquirida ou recebida de terceiros, efetuada fora do estabelecimento")]
        VendaMercadoriaForaEstabelecimento = 5104,

        [Description("5.115 - Venda de mercadoria adquirida ou recebida de terceiros, recebida anteriormente em consignação mercantil")]
        VendaMercadoriaConsignacao = 5115,

        [Description("5.405 - Venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária, na condição de contribuinte substituído")]
        VendaMercadoriaSubstituicaoTributaria = 5405,

        [Description("5.656 - Venda de combustível ou lubrificante de terceiros, destinados a consumidor final")]
        VendaCombustivelLubrificanteConsumidorFinal = 5656,

        [Description("5.667 - Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra UF")]
        VendaCombustivelLubrificanteOutraUF = 5667,

        [Description("5.933 - Prestação de serviço tributado pelo ISSQN (No caso de Nota Fiscal conjugada)")]
        PrestacaoServicoTributadoISSQN = 5933,
    }

    public enum SituacaoTributaria
    {
        [Description("101 - Tributada pelo Simples Nacional com permissão de crédito")]
        TributadaSimplesNacionalPermissaoCredito = 101,

        [Description("102 - Tributada pelo Simples Nacional sem permissão de crédito")]
        TributadaSimplesNacionalSemPermissaoCredito = 102,

        [Description("103 - Isenção do ICMS no Simples Nacional para faixa de receita bruta")]
        IsencaoICMSSimplesNacionalFaixaReceitaBruta = 103,

        [Description("201 - Tributada pelo Simples Nacional com permissão de crédito e com cobrança do ICMS por substituição tributária")]
        TributadaSimplesNacionalPermissaoCreditoCobrancaICMSSubstituicaoTributaria = 201,

        [Description("202 - Tributada pelo Simples Nacional sem permissão de crédito e com cobrança do ICMS por substituição tributária")]
        TributadaSimplesNacionalSemPermissaoCreditoCobrancaICMSSubstituicaoTributaria = 202,

        [Description("203 - Isenção do ICMS no Simples Nacional para faixa de receita bruta e com cobrança do ICMS por substituição tributária")]
        IsencaoICMSSimplesNacionalFaixaReceitaBrutaCobrancaICMSSubstituicaoTributaria = 203,

        [Description("300 - Imune")]
        Imune = 300,

        [Description("400 - Não tributada pelo Simples Nacional")]
        NaoTributadaSimplesNacional = 400,

        [Description("500 - ICMS cobrado anteriormente por substituição tributária (substituído) ou por antecipação")]
        ICMSAnteriorSubstituicaoAntecipacao = 500,

        [Description("900 - Outros")]
        Outros = 900,
    }
    
    public enum SituacaoTributariaPISCOFINS
    {
        [Description("01 - Operação Tributável com Alíquota Básica")]
        OperacaoTributavelAliquotaBasica = 1,

        [Description("02 - Operação Tributável com Alíquota Diferenciada")]
        OperacaoTributavelAliquotaDiferenciada = 2,

        [Description("03 - Operação Tributável com Alíquota por Unidade de Medida de Produto")]
        OperacaoTributavelAliquotaPorUnidadeMedidaProduto = 3,

        [Description("04 - Operação Tributável Monofásica - Revenda a Alíquota Zero")]
        OperacaoTributavelMonofasicaRevendaAliquotaZero = 4,

        [Description("05 - Operação Tributável por Substituição Tributária")]
        OperacaoTributavelSubstituicaoTributaria = 5,

        [Description("06 - Operação Tributável a Alíquota Zero")]
        OperacaoTributavelAliquotaZero = 6,

        [Description("07 - Operação Isenta da Contribuição")]
        OperacaoIsentaContribuicao = 7,

        [Description("08 - Operação sem Incidência da Contribuição")]
        OperacaoSemIncidenciaContribuicao = 8,

        [Description("09 - Operação com Suspensão da Contribuição")]
        OperacaoComSuspensaoContribuicao = 9,

        [Description("49 - Outras Operações de Saída")]
        OutrasOperacoesSaida = 49,

        [Description("50 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno")]
        OperacaoDireitoCreditoVinculadaReceitaTributadaInterno = 50,

        [Description("51 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno")]
        OperacaoDireitoCreditoVinculadaReceitaNaoTributadaInterno = 51,

        [Description("52 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação")]
        OperacaoDireitoCreditoVinculadaReceitaExportacao = 52,

        [Description("53 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno")]
        OperacaoDireitoCreditoVinculadaReceitasTributadasNaoTributadasInterno = 53,

        [Description("54 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação")]
        OperacaoDireitoCreditoVinculadaReceitasTributadasInternoExportacao = 54,

        [Description("55 - Operação com Direito a Crédito - Vinculada a Receitas Não Tributadas no Mercado Interno e de Exportação")]
        OperacaoDireitoCreditoVinculadaReceitasNaoTributadasInternoExportacao = 55,

        [Description("56 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno e de Exportação")]
        OperacaoDireitoCreditoVinculadaReceitasTributadasNaoTributadasInternoExportacao = 56,

        [Description("60 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno")]
        CreditoPresumidoAquisicaoVinculadaReceitaTributadaInterno = 60,

        [Description("61 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno")]
        CreditoPresumidoAquisicaoVinculadaReceitaNaoTributadaInterno = 61,

        [Description("62 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação")]
        CreditoPresumidoAquisicaoVinculadaReceitaExportacao = 62,

        [Description("63 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno")]
        CreditoPresumidoAquisicaoVinculadaReceitasTributadasNaoTributadasInterno = 63,

        [Description("64 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação")]
        CreditoPresumidoAquisicaoVinculadaReceitasTributadasInternoExportacao = 64,

        [Description("65 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação")]
        CreditoPresumidoAquisicaoVinculadaReceitasNaoTributadasInternoExportacao = 65,

        [Description("66 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno e de Exportação")]
        CreditoPresumidoAquisicaoVinculadaReceitasTributadasNaoTributadasInternoExportacao = 66,

        [Description("67 - Crédito Presumido - Outras Operações")]
        CreditoPresumidoOutrasOperacoes = 67,

        [Description("70 - Operação de Aquisição sem Direito a Crédito")]
        OperacaoAquisicaoSemDireitoCredito = 70,

        [Description("71 - Operação de Aquisição com Isenção")]
        OperacaoAquisicaoIsencao = 71,

        [Description("72 - Operação de Aquisição com Suspensão")]
        OperacaoAquisicaoSuspensao = 72,

        [Description("73 - Operação de Aquisição a Alíquota Zero")]
        OperacaoAquisicaoAliquotaZero = 73,

        [Description("74 - Operação de Aquisição sem Incidência da Contribuição")]
        OperacaoAquisicaoSemIncidenciaContribuicao = 74,

        [Description("75 - Operação de Aquisição por Substituição Tributária")]
        OperacaoAquisicaoSubstituicaoTributaria = 75,

        [Description("98 - Outras Operações de Entrada")]
        OutrasOperacoesEntrada = 98,

        [Description("99 - Outras Operações")]
        OutrasOperacoes = 99,
    }
}
