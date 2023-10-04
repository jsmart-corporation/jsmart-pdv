using JSmartPDV.DB.DTO.Transacao;

namespace JSmartPDV.DB.DTO.Caixa
{
    public class CaixaAberturaDTO
    {
        public decimal ValorAbertura { get; set; }  
    }
    public class CaixaSessao
    {
        public decimal Dinheiro { get; set; }
        public decimal Debito { get; set; }
        public decimal Credito { get; set; }
        public decimal Outros { get; set; }
        public decimal Aporte { get; set; }
        public decimal Retirada { get; set; }

        public ICollection<TransacaoResumoDTO> Transacoes { get; set; } = new List<TransacaoResumoDTO>();
    }
    public class CaixaSessaoValoresDTO
    {
        public string Descricao { get; set; } = string.Empty;
        public decimal Valor { get; set; }
    }
}
