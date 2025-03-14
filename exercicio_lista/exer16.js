function calculadora(x, operacao, y) {
  switch (operacao) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    default:
      return "Operação Inválida";
  }
}

console.log(calculadora(10, "+", 10));
console.log(calculadora(50, "-", 10));
console.log(calculadora(10, "*", 10));
console.log(calculadora(100, "/", 10));
console.log(calculadora(100, "GG", 10));
