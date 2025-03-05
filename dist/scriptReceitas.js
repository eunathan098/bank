"use strict";
// Função de abrir/fechar menu mobile
const iconeMobile = document.getElementById("icone-abrir");
const conteinerMenuMobile = document.getElementById("container-menu-mobile");
iconeMobile.addEventListener("click", function () {
    // Alterna a classe 'show' para abrir ou fechar o menu
    conteinerMenuMobile.classList.toggle("show");
});
// Função de fechar Meu Mobile
const iconeMobileFechar = document.getElementById("icone-fechar");
iconeMobileFechar.addEventListener("click", function () {
    conteinerMenuMobile.style.display = "none";
    if (containerMenuMobile) {
        conteinerMenuMobile.style.display = "none";
    }
});
// Função para adicionar uma nova receita
const addReceita = document.getElementById("add-Receitas");
const formAdicionar = document.querySelector(".form-adicionar");
const addLinha = document.getElementById("adicionar-linha");
addReceita.addEventListener("click", function () {
    formAdicionar.style.display = "block";
});
addLinha.addEventListener("click", function () {
    alert("Adicionado com sucesso!!");
    formAdicionar.style.display = "none";
});
// Função para filtrar registros listados em tela
const filterReceitas = document.getElementById("filter-Receitas");
filterReceitas.addEventListener("click", function () {
    alert("Esta funcionalidade filtrará pelos registros listados em tela");
});
// Função de exclusão de registro
const lixeiraReceita = document.getElementById("lixeira-Receitas");
lixeiraReceita.addEventListener("click", function () {
    alert("Esta funcionalidade excluirá os registros selecionados da tela");
});
// Função para marcar todas as checkbox
const selectAll = document.getElementById("selecao-todas");
const selectOne = document.querySelectorAll(".selecionar-linha");
selectAll.addEventListener("click", function () {
    selectOne.forEach(item => {
        item.checked = selectAll.checked;
    });
});
// adicionar registros 
// Seleciona os elementos do DOM
const tabelaBody = document.getElementById("tabela-body");
const adicionarBtn = document.getElementById("adicionar-linha");
// Dados fictícios iniciais
const dadosFicticios = [
    {
        cliente: "Jose Alves",
        descricao: "Venda de Produto X",
        natureza: "Receita",
        valor: "500,00",
        dataPagamento: "01/03/2025",
        status: "Concluído"
    },
    {
        cliente: "Francisco",
        descricao: "Compra de Insumos Y",
        natureza: "Despesa",
        valor: "300,00",
        dataPagamento: "02/03/2025",
        status: "Pendente"
    }
];
// Função para adicionar uma nova linha na tabela
const adicionarLinha = () => {
    const cliente = document.getElementById("cliente").value;
    const descricao = document.getElementById("descricao").value;
    const natureza = document.getElementById("natureza").value;
    const valor = document.getElementById("valor").value;
    const dataPagamento = document.getElementById("data-pagamento").value;
    const status = document.getElementById("status").value;
    // Cria a nova linha na tabela
    const novaLinha = document.createElement("tr");
    novaLinha.classList.add("header-table-columns");
    novaLinha.innerHTML = `
        <td><input type="checkbox" class="selecionar-linha"></td>
        <td>${cliente}</td>
        <td>${descricao}</td>
        <td>${natureza}</td>
        <td>R$ ${valor}</td>
        <td>${dataPagamento}</td>
        <td>${status}</td>
    `;
    // Adiciona a nova linha ao corpo da tabela
    tabelaBody.appendChild(novaLinha);
    // Salva a tabela atualizada no localStorage
    salvarTabela();
};
// Função para salvar a tabela no localStorage
const salvarTabela = () => {
    const linhasTabela = [];
    const todasLinhas = tabelaBody.querySelectorAll("tr");
    todasLinhas.forEach(linha => {
        const celulas = linha.querySelectorAll("td");
        const linhaDados = {
            cliente: celulas[1].innerText,
            descricao: celulas[2].innerText,
            natureza: celulas[3].innerText,
            valor: celulas[4].innerText,
            dataPagamento: celulas[5].innerText,
            status: celulas[6].innerText
        };
        linhasTabela.push(linhaDados);
    });
    // Salva a tabela no localStorage
    localStorage.setItem("tabelaReceitas", JSON.stringify(linhasTabela));
};
// Função para carregar a tabela ao iniciar a página
const carregarTabela = () => {
    const tabelaSalva = localStorage.getItem("tabelaReceitas");
    if (tabelaSalva) {
        const linhasTabela = JSON.parse(tabelaSalva);
        linhasTabela.forEach((linha) => {
            const novaLinha = document.createElement("tr");
            novaLinha.classList.add("header-table-columns");
            novaLinha.innerHTML = `
                <td><input type="checkbox" class="selecionar-linha"></td>
                <td>${linha.cliente}</td>
                <td>${linha.descricao}</td>
                <td>${linha.natureza}</td>
                <td>${linha.valor}</td>
                <td>${linha.dataPagamento}</td>
                <td>${linha.status}</td>
            `;
            tabelaBody.appendChild(novaLinha);
        });
    }
};
// Adiciona evento de click para o botão de adicionar linha
adicionarBtn.addEventListener("click", adicionarLinha);
// Carrega a tabela ao iniciar a página
document.addEventListener("DOMContentLoaded", carregarTabela);
