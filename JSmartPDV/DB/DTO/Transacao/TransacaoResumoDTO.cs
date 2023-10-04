using JSmartPDV.DB.Enums;

namespace JSmartPDV.DB.DTO.Transacao
{
    public class TransacaoResumoDTO
    {
        public int Id { get; set; }
        public TipoTransacao Tipo { get; set; } = TipoTransacao.Venda;
        public decimal ValorTotal { get; set; }
        public DateTime DataVenda { get; set; } = DateTime.Now;
        public string? Nome { get; set; }
        public bool NotaEmitida { get; set; }
    }
}
