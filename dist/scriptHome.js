"use strict";
// Script da tela "Home";
const openReceitas = document.getElementById("add-receita");
openReceitas.addEventListener("click", function () {
    window.location.href = "receitas.html";
});
const openDespesas = document.getElementById("add-gasto");
openDespesas.addEventListener("click", function () {
    window.location.href = "despesas.html";
});
