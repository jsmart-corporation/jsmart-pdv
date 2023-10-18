using System.ComponentModel.DataAnnotations;

namespace api.Model
{
    public class FormaPagamento
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(100)]
        [Required]
        public string Descricao { get; set; } = string.Empty;
        
        [Required]
        public int CategoriaPagamento { get; set; }

        [Required]
        public int Bandeira { get; set; }

        public int? ContaBancariaId { get; set; } = null;

        public ContaBancaria? ContaBancaria { get; set; } = null!;

        public string? Credenciadora { get; set; }

        [Required]
        public int DiasFaturamento { get; set; }

        [Required]
        public decimal Taxa { get; set; }

        [Required]
        public bool CodigoAutorizacao { get; set; }
        
        [Required]
        public bool BaixaAutomatica { get; set; }

        [Required]
        public bool AceitarTroco { get; set; }

        public string? Parcelas { get; set; } = string.Empty;

        public bool? Permantente { get; set; } = false;

        public DateTime CriadoEm { get; set; } = DateTime.Now;

        public bool Deletado { get; set; } = false;

        public DateTime? DeletadoEm {  get; set; } = null!;
    }
}
