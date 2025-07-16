function RealizarSorteio(quantidadeVezes, NumeroInicial, NumeroFinal) {
  event.preventDefault();
  if (NumeroInicial > NumeroFinal) {
    alert("Numero inicial menor queo o numero final");
    return;
  }
  const resultado = [];

  for (let i = 0; i < quantidadeVezes; i++) {
    const numeroSorteado = Math.floor(
      Math.random() * (NumeroFinal - NumeroInicial + 1) + NumeroInicial
    );

    resultado.push(numeroSorteado);
    alert(resultado);
  }
  return resultado;
}

const quantidadeNumerosDeSorteio = document.getElementById("numero1");
quantidadeNumerosDeSorteio.addEventListener("input", function (e) {
  let valor = e.target.value;
  e.target.value = valor.replace(/[^\d]/g, "");
});

const InicioIntervaloDeNumerosSorteio = document.getElementById("numero2");
InicioIntervaloDeNumerosSorteio.addEventListener("input", (e) => {
  let valor = e.target.value;
  e.target.value = valor.replace(/[^\d]/g, "");
});

const FimIntervaloDeNumerosSorteio = document.getElementById("numero3");
FimIntervaloDeNumerosSorteio.addEventListener("input", (e) => {
  let valor = e.target.value;
  e.target.value = valor.replace(/[^\d]/g, "");
});

const botaoSortear = document.getElementById("realizar-sorteio");
botaoSortear.addEventListener("click", function () {
  const quantidade = quantidadeNumerosDeSorteio.value;
  const inicio = InicioIntervaloDeNumerosSorteio.value;
  const fim = FimIntervaloDeNumerosSorteio.value;

  RealizarSorteio(quantidade, inicio, fim);
});
