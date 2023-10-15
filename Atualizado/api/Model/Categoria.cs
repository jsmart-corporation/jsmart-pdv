using System.ComponentModel.DataAnnotations;

namespace api.Model
{
    public class Categoria
    {
        public int Id { get; set; }
        [MaxLength(50)]
        public string Descricao { get; set; } = string.Empty;
        public DateTime CriadoEm { get; set; }
        public bool Deletado { get; set; } = false;
        public DateTime? DeletadoEm {  get; set; }
    }
}
