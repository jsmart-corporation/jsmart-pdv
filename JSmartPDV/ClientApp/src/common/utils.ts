export function FormataMoeda(valor: any) {
    let onlyDigits = valor
      .split("")
      .filter((s: any) => /\d/.test(s))
      .join("")
      .padStart(3, "0");
    if (onlyDigits.slice(0, -2) == "00")
      onlyDigits = onlyDigits.slice(1, onlyDigits.length);
    const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2);
    if (parseFloat(digitsFloat) > 0.9)
      return parseFloat(digitsFloat).toFixed(2).toString();
    else return digitsFloat;
}
  
export function maskCurrency(valor: any, locale = 'pt-BR', currency = 'BRL') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(valor);
}

export function FormatarInteiro(valor: string) {
  let onlyDigits = valor
    .split("")
    .filter((s: any) => /\d/.test(s))
    .join("")
    .padStart(1, "0");

  // Se o número for maior que zero, retornar o valor formatado sem o zero à esquerda
  if (parseInt(onlyDigits) > 0) {
    return parseInt(onlyDigits).toString();
  } else {
    // Caso contrário, substituir o zero por um valor padrão (por exemplo, "N/A")
    return "0"; // Substitua "N/A" pelo valor padrão desejado
  }
}
export function removerLetrasEPontos(string: string) {
  return string.replace(/[^0-9]/g, "");
}
export function ValidaCpf(cpf: string) {
  if (!cpf) {
    return false;
  }

  /* eslint-disable no-useless-escape */
  cpf = cpf.trim().replace(/\.|\-/g, "");

  for (const ch of cpf) {
    if (ch < "0" || ch > "9") {
      return false;
    }
  }

  if (cpf.length !== 11) {
    return false;
  }

  if (
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999"
  ) {
    return false;
  }

  let add = 0;
  for (let i = 0; i < 9; i++) {
    add += parseInt(cpf.charAt(i), 10) * (10 - i);
  }
  let rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) {
    rev = 0;
  }
  if (rev !== parseInt(cpf.charAt(9), 10)) {
    return false;
  }

  add = 0;
  for (let i = 0; i < 10; i++) {
    add += parseInt(cpf.charAt(i), 10) * (11 - i);
  }
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) {
    rev = 0;
  }
  if (rev !== parseInt(cpf.charAt(10), 10)) {
    return false;
  }
  return true;
}