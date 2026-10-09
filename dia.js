function diaDaSemana(numero) {
  switch (numero) {
    case 1:
      return "Domingo";
    case 2:
      return "Segunda-feira";
    case 3:
      return "Terça-feira";
    case 4:
      return "Quarta-feira";
    case 5:
      return "Quinta-feira";
    case 6:
      return "Sexta-feira";
    case 7:
      return "Sábado";
    default:
      return "Número inválido. Insira um valor de 1 a 7.";
  }
}

// Testes:
console.log(diaDaSemana(1)); //Domingo
console.log(diaDaSemana(5)); //Quinta-feira
console.log(diaDaSemana(9)); //Número inválido. Insira um valor de 1 a 7.