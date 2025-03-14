function calculaSalario(plano, salario) {
  switch (plano) {
    case "plano A":
      return salario * 1.1;
    case "plano B":
      return salario * 1.15;
    case "plano C":
      return salario * 1.2;
    default:
      return "Plano é inválido";
  }
}

console.log(calculaSalario("plano A", 1000));
console.log(calculaSalario("plano B", 1000));
console.log(calculaSalario("plano C", 1000));
console.log(calculaSalario("plano D", 1000));
