namespace JSmartPDV.DB.Models
{
    public class TransacaoItem
    {
        public int Id { get; set; }
        public int TransacaoId { get; set; }
        public Transacao? Transacao { get; set; }
        public int? ProdutoId { get; set; }
        public Produto? Produto { get; set; }
        public string Descricao { get; set; } = string.Empty;
        public decimal ValorTotal { get; set; }
        public decimal ValorUn { get;set; }
        public int Quantidade { get; set; }
        public DateTime DataInsercao { get; set; } = DateTime.Now;
    }
}
