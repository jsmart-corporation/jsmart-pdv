namespace JSmartPDV.DB.Models
{
    public class Cliente
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string? Cpf { get; set; } = null!;

    }
}
