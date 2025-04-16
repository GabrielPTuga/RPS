let pontuacao = JSON.parse(localStorage.getItem("pontuacao")); // Transformando-o em um objeto e armazenar os resultados

if (pontuacao === null) {
    pontuacao = {
        Ganhou: 0,
        Empate: 0,
        Perdeu: 0
    }
}

const ganperd = document.querySelector(".js-result");
updateScoreElement();

// Funcção para escolher a opção do jogador
function pickComputerMove() {
    const randomNumber = Math.floor(Math.random()*10);

    if (randomNumber >= 0 && randomNumber <=3) {
        return "Pedra";
    } else if (randomNumber >= 4 && randomNumber <= 6) {
       return "Papel";
    } else {
        return "Tesoura";
    }
}

// Funcção para iniciar o jogo
function playGame2(escolha) {
    let computer = pickComputerMove();
    const player = escolha;


    if((player == "Pedra" && computer == "Pedra") || (player =="Papel" && computer == "Papel") || (player == "Tesoura" && computer == "Tesoura")) {
        pontuacao.Empate += 1;
        ganperd.classList.add("js-empate");
        ganperd.classList.remove("js-ganhou")
        ganperd.classList.remove("js-perdeu")
        ganperd.innerHTML = "Empatou!";
        playerComputer(player,computer);
    } else if ((player == "Pedra" && computer=="Tesoura") || (player == "Papel" && computer=="Pedra") || (player =="Tesoura" && computer=="Papel")) {
        pontuacao.Ganhou += 1;
        ganperd.innerHTML = "Ganhou!";
        ganperd.classList.add("js-ganhou");
        ganperd.classList.remove("js-empate")
        ganperd.classList.remove("js-perdeu")
        playerComputer(player,computer);
        
    } else {
        pontuacao.Perdeu += 1;
        ganperd.innerHTML = "Perdeu!";
        ganperd.classList.add("js-perdeu");
        ganperd.classList.remove("js-ganhou")
        ganperd.classList.remove("js-empate")
        playerComputer(player,computer);
        
    }

    // Adicionar a função no localstorage
    localStorage.setItem("pontuacao", JSON.stringify(pontuacao));

    // Atualizar os resultados
    updateScoreElement();
}

// Função para resetar a pontuação
function resetarPontuacao() {
    pontuacao.Ganhou = 0;
    pontuacao.Empate = 0;
    pontuacao.Perdeu = 0;
    localStorage.removeItem("pontuacao");
    updateScoreElement();
    document.querySelector(".js-moves").innerHTML = ` `
    document.querySelector(".js-result").innerHTML = "Pontuação Resetada!";
    ganperd.classList.add("js-perdeu");
    ganperd.classList.remove("js-empate");
}

// Função que vai atualizar a pontuação do jogo
function updateScoreElement() {
    document.querySelector(".js-score").innerHTML = `Ganhou: ${pontuacao.Ganhou}, Empate: ${pontuacao.Empate}, Perdeu: ${pontuacao.Perdeu}`
};

// Função que vai Mostrar qual foi a opção que o jogador escolheu e qual que o computador escolheu
function playerComputer(player,computer) {
    document.querySelector(".js-moves").innerHTML = `Player: ${player} vs Computer ${computer}`
};