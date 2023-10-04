using JSmartPDV.DB.Enums;

namespace JSmartPDV.DB.Models
{
    public class FinTransacaoPagamento
    {
        public int Id { get; set; }
        public string Descricao { get; set; } = string.Empty;
        public FormaPagamento FormaPagamento { get; set; }  
        public decimal Valor { get; set; }
        public decimal ValorCalculado { get; set; }
        public string? Nsu {  get; set; } = null!;
        public decimal? PorcentagemPagamento { get; set; }
        public int FinMetodoPagamentoId { get; set; }
        public FinMetodoPagamento? FinMetodoPagamento { get; set; }
        public int? ClienteId { get; set; }
        public Cliente? Cliente { get; set; }
        public int? TransacaoId { get; set; }
        public Transacao? Transacao { get; set; }
        public int CaixaId { get; set; }
        public Caixa? Caixa { get; set; }
        public DateTime DataPagamentoEfetuado { get; set; }
        public DateTime DataVencimento { get; set; }
    }
}
