const iconFechado = document.getElementById("olho-fechado") as HTMLImageElement;
const iconAberto = document.getElementById("olho-aberto") as HTMLImageElement;
const inputEmail = document.getElementById("input-email") as HTMLInputElement;
const inputSenha = document.getElementById("input-password") as HTMLInputElement;
const formLogin = document.getElementById("form-login") as HTMLFormElement;
const btnEsqueceuSenha = document.getElementById("esqueceu-senha") as HTMLAnchorElement;
const containerEsqueceuSenha = document.querySelector(".container-digite-email") as HTMLDivElement;
const btnFecharContainerRedefinicao = document.getElementById("btn-fechar-container") as HTMLParagraphElement;

// Função para mudar o ícone de olho fechado para aberto
if (iconFechado && iconAberto && inputSenha) {
    iconFechado.addEventListener("click", () => {

        iconFechado.style.display = "none";
        iconAberto.style.display = "block";

        inputSenha.type = "text";
    });

// Função de Ocultar a Senha Digitada
    iconAberto.addEventListener("click", () => {
        iconFechado.style.display = "block";
        iconAberto.style.display = "none";

        inputSenha.type = "password";
    });
}

// Acessar sistema - Tira o padrão do Form de Envio do Cadastro...
formLogin.addEventListener("submit", function (event: Event) {
    event.preventDefault();

    const inputEmailValue = inputEmail.value;
    const inputSenhaValue = inputSenha.value;

    if (inputEmailValue === "nathan@gmail.com" && inputSenhaValue === "senha") {
        alert("Acessando sistema...");
        window.location.href = "Home.html"; // Redireciona para a página inicial
    } else {
        alert("Senha incorreta, verifique e tente novamente...");
    }
});

// Inicializa o ScrollReveal
const sr = ScrollReveal({ reset: true });

// Aplica o efeito de revelação para o seletor desejado
sr.reveal(".container-login", { duration: 2500 });

// Container de envio de senha para e-mail
if (btnEsqueceuSenha && containerEsqueceuSenha) {
    btnEsqueceuSenha.addEventListener("click", () => {
        sr.reveal(".container-digite-email", { duration: 3000 });
        containerEsqueceuSenha.style.display = "block"; // Torna o contêiner visível
    });
} else {
    console.error("Elemento não encontrado no DOM");
}

// Função para fechar o container de envio de Senha
if (btnFecharContainerRedefinicao) {
    btnFecharContainerRedefinicao.addEventListener("click", function () {
        containerEsqueceuSenha.style.display = "none";
    });
} else {
    console.error("Elemento não encontrado no DOM");
}