const perguntas = [
    {
        pergunta: "Qual é a capital do Brasil?",
        opcoes: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
        resposta: 1
    },
    {
        pergunta: "Quem escreveu 'Dom Quixote'?",
        opcoes: ["Miguel de Cervantes", "William Shakespeare", "Friedrich Nietzsche", "Charles Dickens"],
        resposta: 0
    },
    {
        pergunta: "Qual é o maior animal terrestre?",
        opcoes: ["Elefante africano", "Girafa", "Hipopótamo", "Baleia Azul"],
        resposta: 0
    },
    {
        pergunta: "Qual é o metal mais abundante na crosta terrestre?",
        opcoes: ["Ferro", "Alumínio", "Cobre", "Ouro"],
        resposta: 1
    },
    {
        pergunta: "Quem pintou a 'Mona Lisa'?",
        opcoes: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        resposta: 1
    },
    {
        pergunta: "Qual é o maior oceano do mundo?",
        opcoes: ["Atlântico", "Índico", "Pacífico", "Ártico"],
        resposta: 2
    },
    {
        pergunta: "Qual é o elemento químico com o símbolo 'P'?",
        opcoes: ["Potássio", "Fósforo", "Platina", "Prata"],
        resposta: 1
    },
    {
        pergunta: "Quantos elementos químicos existem na tabela periódica?",
        opcoes: ["92", "104", "118", "120"],
        resposta: 2
    },
    {
        pergunta: "Qual é o maior planeta do sistema solar?",
        opcoes: ["Júpiter", "Saturno", "Urano", "Netuno"],
        resposta: 0
    },
    {
        pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
        opcoes: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        resposta: 0
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

function carregarPergunta() {
    const perguntaElemento = document.getElementById("pergunta");
    const opcoes = document.querySelectorAll(".opcao");

    perguntaElemento.textContent = perguntas[perguntaAtual].pergunta;

    opcoes.forEach((opcao, index) => {
        opcao.textContent = perguntas[perguntaAtual].opcoes[index];
    });
}

function verificarResposta(indiceOpcao) {
    const opcaoSelecionada = perguntas[perguntaAtual].opcoes[indiceOpcao];
    const opcaoCorreta = perguntas[perguntaAtual].opcoes[perguntas[perguntaAtual].resposta];
    const elementoResultado = document.getElementById("resultado");

    if (opcaoSelecionada === opcaoCorreta) {
        pontuacao++;
        elementoResultado.textContent = "Resposta correta!";
    } else {
        elementoResultado.textContent = "Resposta incorreta. A resposta correta é: " + opcaoCorreta;
    }

    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("resultado-container").style.display = "block";

    if (perguntaAtual === perguntas.length - 1) {
        mostrarResultado();
    }
}

function proximaPergunta() {
    if (perguntaAtual < perguntas.length - 1) {
        perguntaAtual++;
        carregarPergunta();
        document.getElementById("quiz-container").style.display = "block";
        document.getElementById("resultado-container").style.display = "none";
        document.getElementById("quiz-container").style.display = "block";
        document.getElementById("resultado-container").style.display = "none";
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    const totalPerguntas = perguntas.length;
    const porcentagem = (pontuacao / totalPerguntas) * 100;
    const elementoResultado = document.getElementById("resultado");
    if (pontuacao === totalPerguntas) {
        elementoResultado.textContent = "Parabéns! Você acertou todas as perguntas!";
    } else {
        elementoResultado.textContent = `Você acertou ${pontuacao} de ${totalPerguntas} perguntas (${porcentagem}%).`;
    }

    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("resultado-container").style.display = "block";
}
carregarPergunta();