
namespace JSmartPDV.DB.DTO.Transacao
{
    public class TransacaoPagamentoDTO
    {
        public string? Descricao { get; set; } = string.Empty;
        public int FormaPagamento { get; set; }
        public int? ContaBancariaId { get; set; }
        public decimal Valor { get; set; }
        public string? Nsu { get; set; } = null!;
        public decimal PorcentagemPagamento { get; set; }
        public int DiasPrevisao { get; set; }
        public int FinMetodoPagamentoId { get; set; }
        public int? NumeroParcelas { get; set; }
        public int? ClienteId {  get; set; }
        public int CaixaId { get; set; }
        public int TipoTransacao { get; set; } = 0;
        public bool Pago { get; set; }
    }
}
