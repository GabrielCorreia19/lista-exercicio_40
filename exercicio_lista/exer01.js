const soma = "soma";
const sub = "sub";
const mult = "mult";
const div = "div";

function operacao(x, y, operador) {
  switch (operador) {
    case soma:
      console.log(x + y);
      break;
    case sub:
      console.log(x - y);
      break;
    case mult:
      console.log(x * y);
      break;
    case div:
      console.log(x / y);
      break;
    default:
      console.log(`OPERAÇÃO INVÁLIDA!`);
  }
}

operacao(1, 23, div);
