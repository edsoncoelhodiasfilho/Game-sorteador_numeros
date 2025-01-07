function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  let sorteados = [];
  let numero;

  for (let a = 0; a < quantidade; a++) {
    numero = obterNumeroAleatorio(de, ate);
    sorteados.push(numero);
  }
  console.log(sorteados);
}

//Função gerar número aleatório.
function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
