namespace JSmartPDV.DB.Models
{
    public class Caixa
    {
        public int Id { get; set; }
        public DateTime DataAbertura { get; set; }
        public DateTime? DataEncerramento { get; set; }
        public decimal ValorAbertura { get; set; }
        public decimal ValorTotalEncerramento { get; set; }
        public bool Aberto { get; set; }
        public decimal? TotalCaixa { get; set; } = 0M;
    }
}
