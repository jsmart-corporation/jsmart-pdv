﻿

using api.Enums;

namespace JSmartPDV.DB.DTO.Transacao
{
    public class TransacaoDTO
    {
        public TipoTransacao Tipo { get; set; } = TipoTransacao.Venda;
        public decimal ValorTotal { get; set; }
        public int? ClienteId { get; set; }
        public int CaixaId { get; set; }
        public decimal SubTotal { get; set; }
        public decimal Desconto { get; set; }
        public DateTime DataVenda { get; set; } = DateTime.Now;
        public List<TransacaoItemDTO> TransacaoItems { get; set; } = new List<TransacaoItemDTO>();
        public List<TransacaoPagamentoDTO> TransacaoPagamentos { get; set; } = new List<TransacaoPagamentoDTO>();
    }
}
