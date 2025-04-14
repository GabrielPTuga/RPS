let pontuacao = JSON.parse(localStorage.getItem("pontuacao")); // Transformando-o em um objeto e armazenar os resultados

if (pontuacao === null) {
    pontuacao = {
        Ganhou: 0,
        Empate: 0,
        Perdeu: 0
    }
}

updateScoreElement();

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
/*
function playGame() {
    let computer = pickComputerMove();
    const player = prompt("Digite (Pedra, Papel ou Tesoura");

    if((player == "Pedra" && computer == "Pedra") || (player =="Papel" && computer == "Papel") || (player == "Tesoura" && computer == "Tesoura")) {
        console.log(`Player: ${player} vs Computer ${computer}`);
        console.log("Empate");
    } else if ((player == "Pedra" && computer=="Tesoura") || (player == "Papel" && computer=="Pedra") || (player =="Tesoura" && computer=="Papel")) {
        console.log(`Player: ${player} vs Computer ${computer}`);
        console.log("Player ganhou");
    } else {
        console.log(`Player: ${player} vs Computer ${computer}`);
        console.log("Conputer ganhou");
    }
}
*/

function playGame2(escolha) {
    let computer = pickComputerMove();
    const player = escolha;

    if((player == "Pedra" && computer == "Pedra") || (player =="Papel" && computer == "Papel") || (player == "Tesoura" && computer == "Tesoura")) {
        pontuacao.Empate += 1
        document.querySelector(".js-result").innerHTML = "Empatou!"
        playerComputer(player,computer);
    } else if ((player == "Pedra" && computer=="Tesoura") || (player == "Papel" && computer=="Pedra") || (player =="Tesoura" && computer=="Papel")) {
        pontuacao.Ganhou += 1;
        document.querySelector(".js-result").innerHTML = "Ganhou!"
        playerComputer(player,computer);
        
    } else {
        pontuacao.Perdeu += 1
        document.querySelector(".js-result").innerHTML = "Perdeu!"
        playerComputer(player,computer);
        
    }

    localStorage.setItem("pontuacao", JSON.stringify(pontuacao));

    updateScoreElement();
}

function resetarPontuacao() {
    pontuacao.Ganhou = 0;
    pontuacao.Empate = 0;
    pontuacao.Perdeu = 0;
    localStorage.removeItem("pontuacao");
    updateScoreElement();
    document.querySelector(".js-moves").innerHTML = ` `
    document.querySelector(".js-result").innerHTML = "Pontuação Resetada!";
}

function updateScoreElement() {
    document.querySelector(".js-score").innerHTML = `Ganhou: ${pontuacao.Ganhou}, Empate: ${pontuacao.Empate}, Perdeu: ${pontuacao.Perdeu}`
};

function playerComputer(player,computer) {
    document.querySelector(".js-moves").innerHTML = `Player: ${player} vs Computer ${computer}`
};