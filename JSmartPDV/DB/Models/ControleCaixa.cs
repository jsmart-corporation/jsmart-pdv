using JSmartPDV.DB.Enums;

namespace JSmartPDV.DB.Models
{
    public class ControleCaixa
    {
        public int Id { get; set; }
        public string? Descricao { get; set; } = string.Empty;
        public decimal Valor {  get; set; }
        public DateTime DataEfetuada { get; set; } = DateTime.Now;
        public TipoControleCaixa Tipo { get; set; } = TipoControleCaixa.Aporte;
        public int CaixaId { get; set; }
        public Caixa? Caixa {  get; set; }
    }
}
