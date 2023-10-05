using JSmartPDV.DB.Enums;

namespace JSmartPDV.DB.Models
{
    public class Impressora
    {
        public int Id { get; set; }
        public string? Ip { get; set; } = null!;
        public int Milimetros { get; set; }
        public Setor Setor { get; set; }
        public int EstacaoId { get; set; }
        public Estacao? Estacao { get; set; }
    }
}
