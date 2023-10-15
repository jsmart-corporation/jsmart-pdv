using api.Enums;
using System.ComponentModel.DataAnnotations;

namespace api.Model
{
    public class ContaBancaria
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(100)]
        [Required]
        public string Descricao { get; set; } = string.Empty;

        [MaxLength(10)]
        public string? Agencia { get; set; }

        [MaxLength(20)]
        public string? Conta { get; set; }

        [Required]
        public BancoEnum Banco { get; set; } = BancoEnum.Outro;

        public bool? Permanente { get; set; } = false;

        [Required]
        public DateTime CriadoEm { get; set; } = DateTime.Now;
        public bool Deletado { get; set; } = false;
        public DateTime? DeletadoEm { get; set; } = null!;

    }
}
