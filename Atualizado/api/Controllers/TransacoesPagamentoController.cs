﻿using api.Controllers.Base;
using api.Model;
using api.Services;
using JSmartPDV.DB.DTO.Transacao;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransacoesPagamentoController : PdvBase
    {
        private readonly TransacaoPagamentoService _service;
        private readonly TransacaoService _transacaoService;

        public TransacoesPagamentoController(TransacaoPagamentoService service, TransacaoService transacaoService)
        {
            _service = service;
            _transacaoService = transacaoService;
        }

        [HttpGet("all")]
        public async Task<ActionResult> GetFinTransacoesPagamento() => Ok(await _service.GetFinTransacoesPagamento());
        [HttpPost("planejador")]
        public async Task<ActionResult> PostTransacaoPlanejador(TransacaoPagamento pagamento) => Ok(await _service.PostTransacaoPagamentosAsync(pagamento));
    }
}
