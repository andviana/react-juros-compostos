function toMoney(value) {
  const formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  });
  return formatter.format(value);
}

function toPercent(value) {
  return value.toFixed(2) + '%';
}

function calcularParcelas(capital, taxaJuros, periodo) {
  const resultado = [];
  for (let i = 1; i <= periodo; i++) {
    const taxaJurosLocal = taxaJuros / 100;
    const parcelNumber = i;
    const montante = capital * Math.pow(1 + taxaJurosLocal, i);
    const rendimento = montante - capital;
    const percentage = (rendimento / capital) * 100;
    const depreciacao = taxaJuros < 0 ? true : false;
    resultado.push({
      parcelNumber,
      capital,
      montante,
      rendimento,
      percentage,
      depreciacao,
    });
  }
  return resultado;
}

export { toMoney, toPercent, calcularParcelas };
