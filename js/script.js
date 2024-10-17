const formulario = document.querySelector("form");
const convenio = document.querySelector("#pconvenio");

const resposta1 = document.querySelector("#outdesconto");
const resposta2 = document.querySelector("#outpagar");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const valor = Number(formulario.invalor.value);
  let desconto;

  if (formulario.rbsim.checked) {
    if (formulario.selconvenio.value == "AMIGO") {
      desconto = calculardesconto(valor, 20);
    } else {
      desconto = calculardesconto(valor, 15);
    }
  } else {
    desconto = calculardesconto(valor, 10);
  }
  resposta1.innerText = ` Desconto R$: ${desconto.toFixed(2)}`;
  resposta2.innerText = ` Total a pagar R$: ${(valor - desconto).toFixed(2)}`;
});
const calculardesconto = (valor, taxa) => valor * (taxa / 100);

formulario.rbsim.addEventListener("change", () => {
  convenio.className = "exibe-linha";
});
formulario.rbnao.addEventListener("change", () => {
  convenio.className = "oculta-linha";
});
