// Script da tela "Home";

const openReceitas: any = document.getElementById("add-receita")

openReceitas.addEventListener("click", function(){
    window.location.href = "receitas.html";
});

const openDespesas: any = document.getElementById("add-gasto")

openDespesas.addEventListener("click", function(){
    window.location.href = "despesas.html";
});