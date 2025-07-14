const quantidadeNumerosDeSorteio = document.getElementById("numero1");
quantidadeNumerosDeSorteio.addEventListener("input", function (e) {
  let quanitdadeNumeroSorteio = e.target.value;
  e.target.value = quanitdadeNumeroSorteio.replace(/[^\d]/g, "");
});

const InicioIntervaloDeNumerosSorteio = document.getElementById("numero2");
InicioIntervaloDeNumerosSorteio.addEventListener("input", (e) => {
  let inicialNumeroSorteio = e.target.value;
  e.target.value = inicialNumeroSorteio.replace(/[^\d]/g, "");
});

const FimIntervaloDeNumerosSorteio = document.getElementById("numero3");
FimIntervaloDeNumerosSorteio.addEventListener("input", (e) => {
  let terminalNumeroSorteio = e.target.value;
  e.target.value = terminalNumeroSorteio.replace(/[^\d]/g, "");
});

const formulario = document.getElementById(formularioSorteio);
formulario.addEventListener("submit", RealizarSorteio);

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

console.log(
  RealizarSorteio(
    quantidadeNumerosDeSorteio,
    InicioIntervaloDeNumerosSorteio,
    FimIntervaloDeNumerosSorteio
  )
);
