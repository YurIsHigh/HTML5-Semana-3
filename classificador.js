function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

//Testes:
console.log(classificarNota(8)); //Aprovado
console.log(classificarNota(5)); //Reprovado