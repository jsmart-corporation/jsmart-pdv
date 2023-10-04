using JSmartPDV.DB.Enums;

namespace JSmartPDV.DB.Models
{
    public class FinMetodoPagamento
    {
        public int Id { get; set; }
        public FormaPagamento FormaPagamento { get; set;}
        public string Descricao { get; set; } = string.Empty;
        public decimal Porcentagem { get; set; }
        public bool UsarNsu { get; set; }
        public int DiasPrevisao { get; set; }
        public Bandeira Bandeira { get; set; }
    }
}
