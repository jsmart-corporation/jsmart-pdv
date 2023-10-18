using System.ComponentModel.DataAnnotations;

namespace api.Model
{
    public class TransacaoPagamento
    {
        public int Id { get; set; }
        public string Descricao { get; set; } = string.Empty;
        public int CategoriaPagamento { get; set; }
        public decimal Valor { get; set; }
        public int TipoTransacao { get; set; } = 0;
        public decimal ValorCalculado { get; set; }
        public string? Nsu { get; set; } = null!;
        public decimal? PorcentagemPagamento { get; set; }
        public int? NumeroParcelas { get; set; }
        public int? FormaPagamentoId { get; set; }
        public FormaPagamento? FinMetodoPagamento { get; set; }
        public int? ContaBancariaId { get; set; } = null!;
        public ContaBancaria? ContaBancaria { get; set; } = null!;
        public int? ClienteId { get; set; }
        public Cliente? Cliente { get; set; }
        public int? TransacaoId { get; set; }
        public Transacao? Transacao { get; set; }
        public int? CaixaId { get; set; }
        public Caixa? Caixa { get; set; }
        public DateTime? DataPagamentoEfetuado { get; set; }
        public DateTime DataVencimento { get; set; }
        public bool Pago { get; set; } = true;
    }
}
