using System.ComponentModel;

namespace JSmartPDV.DB.Enums
{
    public enum Bandeira
    {
        [Description("Outro")]
        Outro = 99,

        [Description("Visa")]
        Visa = 01,

        [Description("Mastercard")]
        Mastercard = 02,

        [Description("American Express")]
        AmericanExpress = 03,

        [Description("Sorocred")]
        Sorocred = 04,

        [Description("Diners Club")]
        DinersClub = 05,

        [Description("Elo")]
        Elo = 06,

        [Description("Hipercard")]
        Hipercard = 07,

        [Description("Aura")]
        Aura = 08,

        [Description("Cabal")]
        Cabal = 09
    }
}
