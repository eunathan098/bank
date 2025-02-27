// Funcionalidade botôes da tela de Dashboard

const btnClient = document.getElementById("client");
const btnAddReceita = document.getElementById("add-receita");
const btnAddGasto = document.getElementById("add-gasto")

const btnReceita = document.getElementById("receita")
const btnDespesa = document.getElementById("despesas")
const btnRelatorio = document.getElementById("btn-relatorio")

btnClient.addEventListener("click", function(){
  alert("Esta funcionalidade listará o paiinel de clientes atuais");
});

btnAddReceita.addEventListener("click", function(){
  alert("Esta funcionalidade adicionará Recebimentos");
});

btnAddGasto.addEventListener("click", function(){
  alert("Esta funcionalidade adicionará Gastos");
});

