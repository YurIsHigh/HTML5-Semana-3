//1. Declarada
function dobroDeclarada(n) {
  return n * 2;
}

//2. Expressão de função
const dobroExpressao = function(n) {
  return n * 2;
};

//3. Arrow Function - forma curta
const dobroArrow = n => n * 2;

//Testes:
console.log(dobroDeclarada(4)); //8
console.log(dobroExpressao(4));  //8
console.log(dobroArrow(4));      //8