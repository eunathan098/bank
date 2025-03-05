// Script da tela "Home";

const openReceitas: any = document.getElementById("add-receita")

openReceitas.addEventListener("click", function(){
    window.location.href = "receitas.html";
});

const openDespesas: any = document.getElementById("add-gasto")

openDespesas.addEventListener("click", function(){
    window.location.href = "despesas.html";
});

// Função de abrir/fechar menu mobile
const iconMobile = document.getElementById("icon-abrir") as HTMLElement;
const containerMenuMobile = document.getElementById("container-menu-mobile") as HTMLElement;

iconMobile.addEventListener("click", function() {
    // Alterna a classe 'show' para abrir ou fechar o menu
    containerMenuMobile.classList.toggle("show");
});

// Função de fechar Meu Mobile
const iconMobileFechar = document.getElementById("icon-fechar") as HTMLElement;

iconMobileFechar.addEventListener("click", function(){
    containerMenuMobile.style.display = "none";

    if(containerMenuMobile){
        containerMenuMobile.style.display = "none";
    }
});

// Abrir display abaixo da foto de perfil

const displayPerfil = document.getElementById("container-display-perfil") as HTMLElement;
const imgPerfil = document.getElementById("img-perfil") as HTMLElement;

imgPerfil.addEventListener("click", function(){
    if(displayPerfil.style.display === "block"){
        displayPerfil.style.display = "none";
    } else {
        displayPerfil.style.display = "block";
    }
});
