let pontuacao = {
    Ganhou: 0,
    Empate: 0,
    Perdeu: 0
}

function Hello () {
    console.log("Hello");
    console.log("World");
}

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

function playGame2(escolha) {
    let computer = pickComputerMove();
    const player = escolha;

    if((player == "Pedra" && computer == "Pedra") || (player =="Papel" && computer == "Papel") || (player == "Tesoura" && computer == "Tesoura")) {
        pontuacao.Empate += 1
        alert(`Player: ${player} vs Computer ${computer} \n Empate \n Ganhou: ${pontuacao.Ganhou}, Empate: ${pontuacao.Empate}, Perdeu: ${pontuacao.Perdeu}`);
    } else if ((player == "Pedra" && computer=="Tesoura") || (player == "Papel" && computer=="Pedra") || (player =="Tesoura" && computer=="Papel")) {
        pontuacao.Ganhou += 1
        alert(`Player: ${player} vs Computer ${computer}\n Player Ganhou \n Ganhou: ${pontuacao.Ganhou}, Empate: ${pontuacao.Empate}, Perdeu: ${pontuacao.Perdeu}`);
    } else {
        pontuacao.Perdeu += 1
        alert(`Player: ${player} vs Computer ${computer}\n
        Computador Ganhou \n Ganhou: ${pontuacao.Ganhou}, Empate: ${pontuacao.Empate}, Perdeu: ${pontuacao.Perdeu}`);
        
    }
}

function resetarPontuacao() {
    pontuacao.Ganhou = 0;
    pontuacao.Empate = 0;
    pontuacao.Perdeu = 0;
    alert("Pontuacao foi Resetada!")
}