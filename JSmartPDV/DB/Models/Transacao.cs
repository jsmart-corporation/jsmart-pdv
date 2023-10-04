using JSmartPDV.DB.Enums;

namespace JSmartPDV.DB.Models
{
    public class Transacao
    {
        public int Id { get; set; }
        public TipoTransacao Tipo { get; set; } = TipoTransacao.Venda;
        public decimal ValorTotal { get; set; }
        public decimal SubTotal { get; set; }   
        public decimal Desconto { get; set; }
        public int? ClienteId { get; set; }
        public Cliente? Cliente { get; set; }
        public int CaixaId { get; set; }
        public Caixa? Caixa { get; set; }
        public DateTime DataVenda { get; set; } = DateTime.Now;
        public ICollection<TransacaoItem>? TransacaoItems { get; set;}
        public ICollection<FinTransacaoPagamento>? TransacaoPagamentos { get; set; }
        public bool NotaEmitida { get; set; } = false;
    }
}
