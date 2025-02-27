"use strict";
// Função para mudar o ícone de olho fechado para aberto
const iconFechado = document.getElementById("olho-fechado");
const iconAberto = document.getElementById("olho-aberto");
const inputEmail = document.getElementById("input-email");
const inputSenha = document.getElementById("input-password");
// Função de Mostrar a Senha Digitada
if (iconFechado && iconAberto && inputSenha) {
    iconFechado.addEventListener("click", () => {
        // Esconde o ícone de olho fechado e mostra o ícone de olho aberto
        iconFechado.style.display = "none";
        iconAberto.style.display = "block";
        // Torna o campo de senha visível (tipo 'text')
        inputSenha.type = "text";
    });
    // Função de Ocultar a Senha Digitada
    iconAberto.addEventListener("click", () => {
        // Esconde o ícone de olho aberto e mostra o ícone de olho fechado
        iconFechado.style.display = "block";
        iconAberto.style.display = "none";
        // Torna o campo de senha oculto (tipo 'password')
        inputSenha.type = "password";
    });
}
// Acessar sistema
const btnAcesso = document.getElementById("botao-login");
btnAcesso.addEventListener("click", () => {
    // Verificar se os campos de e-mail e senha estão preenchidos
    if (inputEmail.value === "nathan@gmail.com" && inputSenha.value === "senha") {
        alert("Acessando sistema...");
        window.location.href = "Home.html";
    }
    else {
        alert("Senha, Incorreta, verifique e tente novamente...");
        alert("Por favor, preencha os campos obrigatórios.");
    }
});
// Inicializa o ScrollReveal
const sr = ScrollReveal({ reset: true });
// Aplica o efeito de revelação para o seletor desejado
sr.reveal(".container-login", { duration: 2500 });
const btnEsqueceuSenha = document.getElementById("esqueceu-senha");
const containerEsqueceuSenha = document.querySelector(".container-digite-email");
// Verifique se o botão e o contêiner existem antes de adicionar o EventListener
if (btnEsqueceuSenha && containerEsqueceuSenha) {
    btnEsqueceuSenha.addEventListener("click", () => {
        // Supondo que `sr.reveal()` seja uma biblioteca para animação
        sr.reveal(".container-digite-email", { duration: 3000 });
        containerEsqueceuSenha.style.display = "block"; // Torna o contêiner visível
    });
}
else {
    console.error("Elemento não encontrado no DOM");
}
// Função para fechar o container de Redefinição de Senha
const btnFecharContainerRedefinicao = document.getElementById("btn-fechar-container");
btnFecharContainerRedefinicao.addEventListener("click", function () {
    containerEsqueceuSenha.style.display = "none";
});
