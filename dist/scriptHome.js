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
// Função de abrir meni mobile 
const iconMobile = document.getElementById("icon-abrir");
const containerMenuMobile = document.getElementById("container-menu-mobile");
iconMobile.addEventListener("click", function () {
    containerMenuMobile.style.display = "block";
});
// Função de fechar Meu Mobile
const iconMobileFechar = document.getElementById("icon-fechar");
iconMobileFechar.addEventListener("click", function () {
    containerMenuMobile.style.display = "none";
    if (containerMenuMobile) {
        containerMenuMobile.style.display = "none";
    }
});
// Abrir display abaixo da foto de perfil
const displayPerfil = document.getElementById("container-display-perfil");
const imgPerfil = document.getElementById("img-perfil");
imgPerfil.addEventListener("click", function () {
    displayPerfil.style.display = "block";
});
