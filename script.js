let pontuacao = JSON.parse(localStorage.getItem("pontuacao")); // Transformando-o em um objeto e armazenar os resultados

if (pontuacao === null) {
    pontuacao = {
        Ganhou: 0,
        Empate: 0,
        Perdeu: 0
    }
}

const ganperd = document.querySelector(".js-result");
updateScoreElement();  // Exibir o resultado

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

let isAutoPlaying = false;
let intervalID;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalID = setInterval(() => { // Pegando o numero do setInterval
            const playerMove = pickComputerMove();
            playGame2(playerMove);
        }, 1000);
        isAutoPlaying = true; 
        return true; // Para fazer o controle da função
    } else {
        clearInterval(intervalID); // Vai para o setInterval
        isAutoPlaying = false;
        return false;
    }
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

    /*
    if (autoPlay() === true) {
        autoPlay();
    }
    */
}

// Função que vai atualizar a pontuação do jogo
function updateScoreElement() {
    document.querySelector(".js-score").innerHTML = `Ganhou: ${pontuacao.Ganhou}, Empate: ${pontuacao.Empate}, Perdeu: ${pontuacao.Perdeu}`
};

// Função que vai Mostrar qual foi a opção que o jogador escolheu e qual que o computador escolheu
function playerComputer(player,computer) {
    document.querySelector(".js-moves").innerHTML = `Player: <img src="images/${player}.png" alt="" class="move-icon">vs Computer <img src="images/${computer}.png" alt="" class="move-icon">`
};

// Adicionndo EventListners
const pedraButton = document.querySelector(".pedra-button");
const papelButton = document.querySelector(".papel-button");
const tesouraButton = document.querySelector(".tesoura-button");
const resetarButton = document.querySelector(".js-reset");
const autoButton = document.querySelector(".js-auto")


pedraButton.addEventListener("click",() => {
    playGame2("Pedra");
});
papelButton.addEventListener("click",() => {
    playGame2("Papel");
});
tesouraButton.addEventListener("click",() => {
    playGame2("Tesoura");
});
resetarButton.addEventListener("click",() => {
    resetarPontuacao();
})
autoButton.addEventListener("click",() => {
    const isPlaying = autoPlay();

    if(isPlaying) {
        autoButton.classList.add("auto-stop");
        autoButton.innerHTML = "StopPlay";
    } else {
        autoButton.classList.remove("auto-stop");
        autoButton.innerHTML = "AutoPlay";
    }
    
})

// On keyDown

document.addEventListener("keydown",(event) => {
    switch (event.key) {
        case "a":
            playGame2("Pedra");
            break
        case "s":
            playGame2("Papel");
            break
        case "d":
            playGame2("Tesoura");
            break
        case "r":
            resetarPontuacao();
            break
        case "x":
            autoPlay();
    }
});