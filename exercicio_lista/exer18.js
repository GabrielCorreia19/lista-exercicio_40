function leiaNumero(num) {
  switch (num) {
    case 0:
      return "zero".toUpperCase();
    case 1:
      return "um".toUpperCase();
    case 2:
      return "dois".toUpperCase();
    case 3:
      return "três".toUpperCase();
    case 4:
      return "quatro".toUpperCase();
    case 5:
      return "cinco".toUpperCase();
    case 6:
      return "seis".toUpperCase();
    case 7:
      return "sete".toUpperCase();
    case 8:
      return "oito".toUpperCase();
    case 9:
      return "nove".toUpperCase();
    case 10:
      return "dez".toUpperCase();
    default:
      return "Número fora do intervalo";
  }
}

console.log(leiaNumero(0));
console.log(leiaNumero(1));
console.log(leiaNumero(2));
console.log(leiaNumero(3));
console.log(leiaNumero(4));
console.log(leiaNumero(5));
console.log(leiaNumero(6));
console.log(leiaNumero(7));
console.log(leiaNumero(8));
console.log(leiaNumero(9));
console.log(leiaNumero(10));
console.log(leiaNumero(104));
