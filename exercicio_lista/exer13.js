function diaSemana(dia) {
  switch (dia) {
    case 1:
      return "Fim de Semana";
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Dia Útil";
    case 7:
      return "Fim de Semana";
    default:
      return "Dia inválido";
  }
}

console.log(diaSemana(1));
console.log(diaSemana(2));
console.log(diaSemana(3));
console.log(diaSemana("a"));
