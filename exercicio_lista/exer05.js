function formatDinheiro(moeda) {
  moeda = "R$";
  const valor = 0.30000000000000004;
  console.log(
    `O valor formatado é: ${moeda}${valor
      .toFixed(2)
      .toString()
      .replace(".", ",")}`
  );
}
formatDinheiro();
