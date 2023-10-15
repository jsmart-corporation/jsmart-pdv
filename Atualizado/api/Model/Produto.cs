using api.Enums;

namespace api.Model
{
    public class Produto
    {
        public int Id { get; set; }
        public string? Codigo { get; set; }
        public string? CodBalanca { get; set; }
        public string Nome { get; set; } = string.Empty;
        public TipoProduto TipoProduto { get; set; }
        public decimal ValorUnidade { get; set; }
        public decimal? PrecoCusto { get; set; } = 0M;
        public string TipoEstoque { get; set; } = string.Empty;
        public decimal EstoqueAtual { get; set; }
        public decimal MinEstoque { get; set; }
        public bool Agrupavel { get; set; } = true;
        public bool Recomendado { get; set; } = false;

        public string Insumos { get; set; } = null!;
        public string NotificarImpressao { get; set; } = null!;
        public string NotificarLive { get; set; } = null!;

        public byte[]? Imagem { get; set; }

        public int? CategoriaId { get; set; }
        public Categoria? Categoria { get; set; } = null!;

        public bool Deletado { get; set; } = false;
        public DateTime CriadoEm { get; set; } = DateTime.Now;
        public DateTime? DeletadoEm { get; set; } = null!;

        //fiscal

        public decimal? AliquotaTranspacencia { get; set; }
        public int? CodBeneficio { get; set; }
        public string? Ncm { get; set; } = string.Empty;
        public string? Cest { get; set; } = string.Empty;
        public string Origin { get; set; } = string.Empty;
        public string Cfop { get; set; } = string.Empty;
        public string SituacaoTributaria { get; set; } = string.Empty;
        public decimal? reducIcms { get; set; }
        public string SituacaoTributariaPIS { get; set; } = string.Empty;
        public string SituacaoTributariaCOFINS { get; set; } = string.Empty;
        public decimal? AliquotaPis { get; set; }
        public decimal? AliquotaICMS { get; set; }
        public decimal? AliquotaCOFINS { get; set; }
    }
}
