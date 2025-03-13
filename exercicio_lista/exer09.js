function notas(nota) {
  let notaCorrigida = arredondar(nota);
  if (notaCorrigida > 40) {
    console.log(`APROVADO ${notaCorrigida}`);
  } else {
    console.log(`REPROVADO ${notaCorrigida}`);
  }

  function arredondar(nota) {
    if (nota % 5 > 2) {
      return nota + (5 - (nota % 5));
    } else {
      return nota;
    }
  }
}

notas(10);
notas(61);
notas(84);
notas(38);
notas(50);
notas(45);
notas(88);
notas(83);
notas(89);
notas(81);
notas(71);
notas(89);
