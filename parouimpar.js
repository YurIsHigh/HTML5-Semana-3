console.log("--- Par ou Ímpar (com WHILE) ---");
let numero = 1;

while (numero <= 20) {
  if (numero % 2 === 0) {
    console.log(`${numero} é Par`);
  } else {
    console.log(`${numero} é Ímpar`);
  }
  numero++;
}