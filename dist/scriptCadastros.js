"use strict";
const olhoFechado = document.getElementById("olho-fechado");
const olhoAberto = document.getElementById("olho-aberto");
const inputPassword = document.getElementById("input-password");
const olhoFechadoConfirme = document.getElementById("olho-fechado-confirme");
const olhoAbertoConfirme = document.getElementById("olho-aberto-confirme");
const inputPasswordConfirme = document.getElementById("input-password-confirme");
// Função de abertura de Olhos
if (olhoFechado) {
    olhoFechado.addEventListener("click", () => {
        inputPassword.type = "text";
        olhoFechado.style.display = "none";
        olhoAberto.style.display = "block";
    });
}
// Função de fechamento de Olhos
if (olhoAberto) {
    olhoAberto.addEventListener("click", () => {
        inputPassword.type = "password";
        olhoAberto.style.display = "none";
        olhoFechado.style.display = "block";
    });
}
// Funçôes de confirmação de senha
if (olhoFechadoConfirme) {
    olhoFechadoConfirme.addEventListener("click", () => {
        inputPasswordConfirme.type = "text";
        olhoFechadoConfirme.style.display = "none";
        olhoAbertoConfirme.style.display = "block";
    });
}
if (olhoAbertoConfirme) {
    olhoAbertoConfirme.addEventListener("click", () => {
        inputPasswordConfirme.type = "password";
        olhoAbertoConfirme.style.display = "none";
        olhoFechadoConfirme.style.display = "block";
    });
}
// Função de envio do formulário
const formCadastro = document.getElementById("form-cadastro");
formCadastro.addEventListener("submit", (e) => {
    const password = inputPassword.value;
    const confirmPassword = inputPasswordConfirme.value;
    if (password !== confirmPassword) {
        e.preventDefault(); // Prevent form submission
        alert("As senhas não coincidem!");
    }
});
