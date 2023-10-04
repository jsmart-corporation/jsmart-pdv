using JSmartPDV.DB.Enums;

namespace JSmartPDV.DB.Models
{
    public class Produto
    {
        public int Id { get; set; } 
        public string Descricao { get; set; } = string.Empty;
        public string? CodigoDeBarra { get; set; }
        public decimal Valor { get; set; } = 0M;
        public int QtdVendida { get; set; }
        public TipoProduto Tipo { get; set; }
        public bool Ativo { get; set; } 
        public byte[]? Imagem { get; set; }
    }
}
