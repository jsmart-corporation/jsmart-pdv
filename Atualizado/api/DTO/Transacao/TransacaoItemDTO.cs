
namespace JSmartPDV.DB.DTO.Transacao
{
    public class TransacaoItemDTO
    {
        public int? ProdutoId { get; set; }
        public string Descricao { get; set; } = string.Empty;
        public decimal ValorTotal { get; set; }
        public decimal ValorUn { get; set; }
        public int Quantidade { get; set; }
    }
}
