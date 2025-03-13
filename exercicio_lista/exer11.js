function getAnoBissexto(ano) {
  if (ano <= 0) {
    return false;
  } else if (ano % 4 == 0) {
    return true;
  } else if (ano % 100 == 0) {
    return false;
  } else if (ano % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(getAnoBissexto(0));
console.log(getAnoBissexto(2026));
console.log(getAnoBissexto(400));
console.log(getAnoBissexto(201));
console.log(getAnoBissexto(2014));
