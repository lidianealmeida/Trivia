var name = prompt("Olá, qual é o seu nome?");

while (name === "") {
    var name = prompt("Olá, qual é o seu nome?");
} 

    var welcome = document.getElementById("name");
    welcome.innerHTML = name;

var points = 0;

function goodChoice1() {
    window.alert("Boa escolha! Vamos à primeira pergunta:");
    var question1 = prompt("1. Qual o nome da fundadora do Laboratória? \n----------------------------------------\nA. Vanessa Pinheiro\nB. Regina Acher\nC. Mariana Costa Checa\n\n(Digite A/B/C)").toUpperCase();
    if (question1 === "C") {
        alert("Parabéns, você acertou! :) \n\nVamos para a próxima...");
        ++points;
    } else {
        alert(":/ Não foi dessa vez... \n\nVamos ver se você acerta na próxima...");
    }
  
    var question2 = prompt("2. Qual a linguagem de programação base do projeto Laboratoria?\n---------------------------------------- \nA. Python, além de Linux e prompt de comando. \nB. Javascript, além de HTML e CSS. \nC. Python e C++.\n\n(Digite A/B/C)").toUpperCase();
    if (question2 === "B") {
        alert("Parabéns, você acertou! :) \n\nVamos para a próxima...");
        ++points;
    } else {
        alert(":/ Não foi dessa vez... \n\nVamos ver se você acerta na próxima...");
    }
    
    var question3 = prompt("3. Por que as mulheres são o foco do Laboratoria?\n---------------------------------------- \nA. Porque apenas 10% dos programadores na América Latina são mulheres e em contrapartidas há muitas mulheres talentosas excluídas à uma formação de qualidade. \nB. Porque a maioria dos programadores na América Latina são mulheres e o propósito da Laboratoria é aumentar essa estimativa.\nC. Porque as mulheres aprendem mais rápido.\n\n(Digite A/B/C)").toUpperCase();
    if (question3 === "A") {
        alert("Parabéns, você acertou! :) \n\nO jogo acabou...");
        ++points;
    } else {
        alert(":/ Não foi dessa vez... \n\nO jogo acabou...");
    }
    alert(name.toUpperCase() + "\nSua Pontuação foi: \n" + points);
    if (points < 1) {
        var showPointsToUser = document.getElementById("final-points-0");
        showPointsToUser.innerHTML = points;
        document.getElementById("result").scrollIntoView();
    } else if (2 > points >= 1) {
        var showPointsToUser = document.getElementById("final-points-1-2");
        showPointsToUser.innerHTML = points;
        document.getElementById("result").scrollIntoView();
    } else {
        var showPointsToUser = document.getElementById("final-points-3");
        showPointsToUser.innerHTML = points;
        document.getElementById("result").scrollIntoView();
    }
}

function goodChoice2() {
    window.alert("Boa escolha! Vamos à primeira pergunta:");
 
    var question1 = prompt("1. Em que ano foi criado o Javascript? \n------------------------\nA. 2008\nB. 1991\nC. 1995\n\n(Digite A/B/C)").toUpperCase();
    if (question1 === "C") {
        alert("Parabéns, você acertou! :) \n\nVamos para a próxima...");
        ++points;
    } else {
        alert(":/ Não foi dessa vez... \n\nVamos ver se você acerta na próxima...");
    }
    
    var question2 = prompt("2. Qual o nome do(a) criador(a) do JS?\n------------------------ \nA. Brendan Eich. \nB. Ada Lovelace. \nC. Steve Jobs.\n\n(Digite A/B/C)").toUpperCase();
    if (question2 === "A") {
        alert("Parabéns, você acertou! :) \n\nVamos para a próxima...");
        ++points;
    } else {
        alert(":/ Não foi dessa vez... \n\nVamos ver se você acerta na próxima...");
    }
 
    var question3 = prompt("3. Por que o JS é uma excelente linguagem para aprender?\n------------------------ \nA. Porque as aplicações são quase infinitas e é uma das linguagens que mais cresce no mercado de trabalho. \nB. Porque é uma linguagem de baixo nível.\nC. Porque o JS é aplicado para obtenção de resultado eficiente e descritivo. \n(Digite A/B/C)").toUpperCase();
    if (question3 === "A") {
        alert("Parabéns, você acertou! :) \n\nO jogo acabou...");
        ++points;
    } else {
        alert(":/ Não foi dessa vez... \n\nO jogo acabou...");
    }
    alert(name.toUpperCase() + "\nSua Pontuação foi: \n" + points);
    if (points < 1) {
        var showPointsToUser = document.getElementById("final-points-0");
        showPointsToUser.innerHTML = points;
        document.getElementById("result").scrollIntoView();
    } else if (points === 1 || points === 2) {
        var showPointsToUser = document.getElementById("final-points-1-2");
        showPointsToUser.innerHTML = points;
        document.getElementById("result").scrollIntoView();
    } else {
        var showPointsToUser = document.getElementById("final-points-3");
        showPointsToUser.innerHTML = points;
        document.getElementById("result").scrollIntoView();
    }
}

function showAnswerTheme1() {
    document.getElementById("answers-theme-1").style.display = "block";
}

function showAnswerTheme2() {
    document.getElementById("answers-theme-2").style.display = "block";
}

function playAgain() {
    points = 0;
    document.getElementById("choice").scrollIntoView();
}

if (reload()) {
    window.scrollTo(0, 0);
}