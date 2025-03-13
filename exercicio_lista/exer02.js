function getTriangulo(l1, l2, l3) {
  if (l1 == l2 && l2 == l3) {
    console.log("Triângulo Equilátero");
  } else if (l1 == l2 || l1 == l3 || l2 == l3) {
    console.log(`Triângulo Isósceles`);
  } else {
    console.log(`Triângulo Escaleno`);
  }
}

getTriangulo(5, 5, 5);
getTriangulo(1, 1, 12);
getTriangulo(5, 1, 12);
