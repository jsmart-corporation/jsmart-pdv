namespace api.DTO.TransacaoPagamento
{
    public class BaixaDTO
    {
        public List<int> Contas { get; set; } = new List<int>();
        public int FormaPagamentoId { get; set; }
        public string? Nsu { get; set; }
        public int? ContaBancariaId { get; set; }
        public decimal Valor {  get; set; }
        public int? Parcelas { get; set; }
        public DateTime DataPagamento { get; set; }
        public int Dias { get; set; }
        public decimal Porcentagem { get; set; }
       

    }
}
