using api.Enums;
using System.ComponentModel.DataAnnotations;

namespace api.Model
{
    public class Cliente
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Nome { get; set; } = string.Empty;

        [Required]
        public TipoClienteEnum Tipo { get; set; }

        [Required]
        public TipoPessoaEnum Pessoa { get; set; }

        public string? Telefone { get; set; }

        public string? Email { get; set; }

        [Required]
        public IEIsentoEnum IEIsento { get; set; }

        public string? Cpf { get; set; }

        public string? Cnpj { get; set; }

        public string? InscricaoES { get; set; }

        public string? InscricaoSU { get; set; }

        public string? Cep { get; set; }

        public string? Endereco { get; set; }

        public string? Complemento { get; set; }

        public UFEnum? Uf { get; set; }

        public string? Cidade { get; set; }

        public string? Bairro { get; set; }

        public DateTime CriadoEm { get; set; }
        public bool Deletado { get; set; }
        public DateTime DeletadoEm {  get; set; }
    }
}
