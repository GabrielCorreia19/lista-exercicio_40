function lanchonete(id, qntd) {
  switch (id) {
    case 100:
      return 3 * qntd;
    case 200:
      return 4 * qntd;
    case 300:
      return 5.5 * qntd;
    case 400:
      return 7.5 * qntd;
    case 500:
      return 3.5 * qntd;
    case 600:
      return 2.8 * qntd;
    default:
      return "Produto não existe";
  }
}

console.log(lanchonete(100, 2));
console.log(lanchonete(200, 5));
console.log(lanchonete(300, 10));
console.log(lanchonete(400, 2));
console.log(lanchonete(500, 6));
