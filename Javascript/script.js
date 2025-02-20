// Função para mudar o ícone de olho fechado para aberto
const iconFechado = document.getElementById("olho-fechado");
const iconAberto = document.getElementById("olho-aberto");
const inputCPF = document.getElementById("input-CPF");
const campoSenha = document.getElementById("input-password");

iconFechado.addEventListener("click", () => {
    // Esconde o ícone de olho fechado e mostra o ícone de olho aberto
    iconFechado.style.display = "none";
    iconAberto.style.display = "block";
    
    // Torna o campo de senha visível (tipo 'text')
    campoSenha.type = "text";
    
});

iconAberto.addEventListener("click", () => {
    // Esconde o ícone de olho aberto e mostra o ícone de olho fechado
    iconFechado.style.display = "block";
    iconAberto.style.display = "none";

    // Torna o campo de senha oculto (tipo 'password')
    campoSenha.type = "password";
});

// Acessar sistema
const botaoAcesso = document.getElementById("btn-login");

botaoAcesso.addEventListener("click", () => {
    window.location.href = "./Home.html"; // Redirecionando para a página Home.html
});

// Scroll Reveal da página

window.sr = ScrollReveal({ reset: true})

sr.reveal(".container-login", {duration: 2500
});

// Formatação de CPF

function formatarCPF(input) {
    let cpf = input.value;

    // Remove tudo o que não for número
    cpf = cpf.replace(/\D/g, '');

    // Limita o CPF a 11 números
    if (cpf.length > 11) {
      cpf = cpf.substring(0, 11);
    }

    // Adiciona a formatação de CPF
    if (cpf.length <= 3) {
      input.value = cpf;
    } else if (cpf.length <= 6) {
      input.value = cpf.replace(/(\d{3})(\d{1,})/, '$1.$2');
    } else if (cpf.length <= 9) {
      input.value = cpf.replace(/(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3');
    } else {
      input.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3-$4');
    }
  }

  // Função para limitar a entrada a 6 dígitos numéricos e permitir apenas números
function validarSenha(input) {
    let senha = input.value;

    // Remove qualquer caractere que não seja número
    senha = senha.replace(/\D/g, '');

    // Limita a entrada a 6 dígitos
    if (senha.length > 6) {
        senha = senha.substring(0, 6);
    }

    // Atualiza o valor do campo de senha com a entrada formatada
    input.value = senha;
}




