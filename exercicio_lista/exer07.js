let pontuacoes = ["4", "11", "6", "25", "10", "14"];

function getRecords() {
  let recordeAtual = pontuacoes.filter((jogo) => jogo > 22);
  console.log(`O recorde atual é ${recordeAtual}`);

  let piorResultado = pontuacoes.filter((jogo) => jogo < 6);
  console.log(`O pior resultado até o momento é ${piorResultado}`);
}

getRecords();
