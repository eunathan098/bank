const olhoFechado = document.getElementById("olho-fechado") as HTMLElement;
const olhoAberto = document.getElementById("olho-aberto") as HTMLElement;
const inputPassword = document.getElementById("input-password") as HTMLInputElement;

const olhoFechadoConfirme = document.getElementById("olho-fechado-confirme") as HTMLElement;
const olhoAbertoConfirme = document.getElementById("olho-aberto-confirme") as HTMLElement;
const inputPasswordConfirme = document.getElementById("input-password-confirme") as HTMLInputElement;

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
const formCadastro = document.getElementById("form-cadastro") as HTMLFormElement;
formCadastro.addEventListener("submit", (e) => {
    const password = inputPassword.value;
    const confirmPassword = inputPasswordConfirme.value;

    if (password !== confirmPassword) {
        e.preventDefault(); // Prevent form submission
        alert("As senhas não coincidem!");
    }
});